"use client";
import Card from "@/components/Card";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/store/slices/productsSlice";
import electronics from "../../public/electronics.jpg";
import jewelry from "../../public/jewelry.jpg";
import watches from "../../public/watches.jpg";

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



export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const dispatch = useDispatch();
  const storedProducts = useSelector((state: any) => state.products);

  useEffect(() => {
    const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour
    const fetchProducts = async () => {
      try {
        if (typeof window !== "undefined") {
          const storedProducts = localStorage.getItem("products");
          const cacheTimestamp = localStorage.getItem("cacheTimestamp");

          if (storedProducts && cacheTimestamp) {
            const timeElapsed = Date.now() - parseInt(cacheTimestamp, 10);
            if (timeElapsed < CACHE_EXPIRATION_TIME) {
              const productsFromStorage: Product[] = JSON.parse(storedProducts);
              setProducts(productsFromStorage);
              productsFromStorage.forEach((product) =>
                dispatch(addProduct(product))
              );
              return;
            }
          }

          const response = await fetch("https://fakestoreapi.com/products");
          if (!response.ok) {
            console.log(products);
            throw new Error("Failed to fetch products");
          }

          const data: Product[] = await response.json();
          setProducts(data);
          localStorage.setItem("products", JSON.stringify(data));
          localStorage.setItem("cacheTimestamp", Date.now().toString());
          data.forEach((product) => dispatch(addProduct(product)));
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Failed to fetch products");
        }
      }
    };

    fetchProducts();
  }, [dispatch, storedProducts.length]);

  useEffect(() => {

    if (typeof window !== "undefined") {
      const isUserAuthenticated = localStorage.getItem("users")!==null ? true : false;
      console.log(isUserAuthenticated);
      
      if(isUserAuthenticated !== null  && isUserAuthenticated === true)
      setAuthenticated(isUserAuthenticated);
    }
  }, []);

  if (error) return <p>Error: {error}</p>;

  // if (!authenticated ) 
  //   return (
  //     <p className="text-center text-[#1d232a]">
  //       Please Sign-In to explore products
  //     </p>
  //   );
  

  return  (
    <main className="flex justify-center items-center flex-wrap gap-10 min-h-screen">
      <Card
        id="jewelry"
        src={jewelry}
        name="Accessories"
        description="Accessorize Your Life – Unleash Your Style with Unique Accessories That Make Every Outfit Shine!"
      />
      <Card
        id="electronics"
        src={electronics}
        name="Electronics"
        description="Upgrade Your Life with the Latest Tech – Shop the Best in Electronics at Unbeatable Prices!"
      />
      <Card
        id="watches"
        src={watches}
        name="Watches"
        description="Timeless Style Awaits – Discover Our Stunning Collection of Watches to Elevate Your Look!"
      />
    </main>
    
  )
  
}
