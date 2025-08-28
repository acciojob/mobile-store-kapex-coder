import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { id, title, image, price } = product;
    return (
        <div>
            <img src={image} alt={title} style={{ width: '150px', height: '150px' }} />
            <div>
                <h2>{title}</h2>
                <div>
                    <p>Price: ${price}</p>
                    <Link className="btn" to={`/products/${id}`}>
                        Buy
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default ProductCard;