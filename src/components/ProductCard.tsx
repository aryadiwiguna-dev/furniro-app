import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  tag?: 'new' | 'sale' | string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative w-full">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Tag Badge */}
        {product.tag && (
          <div className={`absolute top-3 right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium 
            ${product.tag === 'new' ? 'bg-teal-500' : product.tag === 'sale' ? 'bg-red-500' : 'bg-gray-800'}`}>
            {product.tag.toUpperCase()}
          </div>
        )}
        
        {/* Hover Actions */}
        <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 py-2 sm:py-3 px-3 sm:px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-[#b88e2f] text-white py-1 sm:py-2 text-xs sm:text-sm font-medium hover:bg-[#a17a25] transition">
            Add to cart
          </button>
          <div className="flex justify-between mt-1 sm:mt-2 text-[10px] sm:text-xs text-gray-700">
            <button className="hover:text-[#b88e2f] transition">+ Share</button>
            <button className="hover:text-[#b88e2f] transition">+ Compare</button>
            <button className="hover:text-[#b88e2f] transition">+ Like</button>
          </div>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="mt-3 sm:mt-4">
        <h3 className="text-sm sm:text-base md:text-lg font-medium line-clamp-1">{product.name}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-1 sm:mt-2 flex justify-between items-center">
          <p className="text-sm sm:text-base font-semibold text-[#b88e2f]">Rp {product.price.toLocaleString()}</p>
          {product.oldPrice && (
            <p className="text-xs sm:text-sm text-gray-400 line-through">Rp {product.oldPrice.toLocaleString()}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;