"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
const page = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/electronics`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch Products`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message); 
        } else {
          setError("Failed to fetch Products");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(products);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [products]);

  return (
    <main>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
        {products.map(
          (product: {
            id: number;
            name: string;
            image: string;
            description: string;
            price: number;
            category: string;
          }) => {
            return (
              <li key={product.id}>
                <Link href={`/categories/electronics/${product.id}`}>
                  <ProductCard
                    onClick={() => console.log()}
                    product={product}
                  />
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
};

export default page;
