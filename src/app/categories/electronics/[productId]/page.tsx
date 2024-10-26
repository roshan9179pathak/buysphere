"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Button from "@/components/Buttons";

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

const Page = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const params = useParams();
  let products = useSelector((state: any) => state.products);
  products = products.products;

  useEffect(() => {
    setLoading(true)
    const updateCall = async () => {
      return new Promise(async (resolve, reject) => {
        const fetchProducts = async () => {
          setLoading(true);
          try {
            const response = await fetch(
              "https://fakestoreapi.com/products/category/electronics"
            );
            if (!response.ok) {
              throw new Error("Failed to fetch products");
            }
            const data: Product = await response.json();
            products = data;
          } catch (error: unknown) {
            if (error instanceof Error) {
              setError(error.message);
            } else {
              setError("Failed to fetch products");
            }
          } finally {
            setLoading(false);
          }
          resolve(products);
        };
        await fetchProducts();
      });
    };

    const updateSelectedProduct = ()=>{
      products.map((product: any) => {
        if (product.id == params.productId) {
          setSelectedProduct(product);
        }
      });
    }

    if (products.length === 0) {
      updateCall().then((resp) => {
        products = resp;
        updateSelectedProduct();
      });
    }

    updateSelectedProduct();

    setLoading(false)

  }, []);


  if (loading) {
    return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
  </div>
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="w-4/5 max-h-96">
        <img src={selectedProduct?.image} alt="Album" className="w-full h-full rounded-md object-contain"  />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{selectedProduct?.title}</h2>
        <p>{selectedProduct?.description}</p>
        <div className="card-actions justify-between">
          <div>
            <Button
              onClick={() => decreaseQuantity()}
              className="font-extrabold"
              type="button"
            >
              -
            </Button>
            <span className="mx-3">{quantity}</span>
            <Button
              onClick={() => increaseQuantity()}
              className="font-extrabold"
              type="button"
            >
              +
            </Button>
          </div>
          <Button className="btn btn-primary" type="button">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
