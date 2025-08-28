import React from "react";
import { products } from "../../data/mobiles";
import { Link } from "react-router-dom";

const AdminPanel = () => {
    return (
        <div>
            <button>Add Product</button>
            {products.map(product => (
                <Link to={`/admin/products/${product.id}`} key={product.id}>
                    <img src={product.image} alt={product.title}/>
                    <h2>{product.title}</h2>
                </Link>
            ))}
        </div>
    );
}

export default AdminPanel;