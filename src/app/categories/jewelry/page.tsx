"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { RootState } from "@/store/store";

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
  const [loading, setLoading] = useState<boolean>(true);

  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(
  //         "https://fakestoreapi.com/products/category/jewelery"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch products");
  //       }

  //       const data: Product[] = await response.json();
  //       setProducts(data);

  //       data.map((product) => dispatch(addProduct(product)));
  //     } catch (error: unknown) {
  //       if (error instanceof Error) {
  //         setError(error.message);
  //       } else {
  //         setError("Failed to fetch products");
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, [dispatch]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    let categoryProduct = [];
    if (storedProducts) {
      categoryProduct = JSON.parse(storedProducts);
      let filteredProducts = categoryProduct.filter(
        (product: any) => product.category === "jewelery"
      );

      setProducts(filteredProducts);

      setLoading(false);
    } else {
      setLoading(true);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  

  return (
    <main>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/categories/jewelry/${product.id}`}>
              <ProductCard onClick={() => console.log()} product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
