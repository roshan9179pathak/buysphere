"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { addProduct } from "../../../store/slices/productsSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await response.json();
        setProducts(data);

        data.map((product) => dispatch(addProduct(product)));
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Failed to fetch products");
        }
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>; // Consider using a spinner here
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
        {products.map((product) => (
          <li key={product.id} className="w-full">
            <Link href={`/categories/electronics/${product.id}`}>
              <ProductCard onClick={() => console.log()} product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
