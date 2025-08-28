import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../data/mobiles";

const ProductList = () => {
    return (
        <div>
            {products.map(product => {
                return <ProductCard key={product.id} product={product} />
            })}
        </div>
    );
}

export default ProductList;