'use client'
import React, { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import {getProduct} from '../store/slices/productsSlice'
import { RootState } from "../store/store";
import Product from '../store/slices/productsSlice'
type IndividualProductProps = {
  id: number;
};

const IndividualProduct = ({ id }: IndividualProductProps) => {

  const [product, setProduct] = useState<Product | null>(null);

  const dispatch = useDispatch();

  const selectedProduct = useSelector(
    (state: RootState) => state.products.selectedProduct
  );

  useEffect(() => {
    
    setProduct(selectedProduct);
  }, [selectedProduct]);

  
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const handleGetProduct = (id: number) => {
    dispatch(getProduct(id));
  };

  useEffect(() => {
    setProduct(selectedProduct);
  }, [selectedProduct]);



  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product Name</h2>
        <p>Description</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
