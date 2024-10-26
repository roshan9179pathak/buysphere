'use client'
import React from "react";
import styles from './styles/ProductCard.module.css';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, onClick }) => {
  
  const handleClick = () => {
    onClick(); 
  };

  return (
    <div 
      onClick={handleClick} 
      className={`card bg-base-100 w-60 min-h-3/5 shadow-xl ${styles.cardJump} flex flex-col`}
    >
      <figure className="flex-shrink-0 h-3/5 w-full overflow-hidden">
        <img
          className="w-full h-48 object-cover object-fill"
          src={product.image}
          alt={`Image of ${product.name}`} 
          loading="lazy" 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{product.description.substring(0, 81)}{product.description.length > 81 && '...'}</p> {/* Add ellipsis for long descriptions */}
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.category}</div>
          <div className="badge badge-outline">${product.price.toFixed(2)}</div> {/* Format price */}
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
