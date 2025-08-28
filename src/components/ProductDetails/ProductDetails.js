import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../../data/mobiles";

const ProductDetails = () => {
    const { id } = useParams();

    const [productData, setProductData] = React.useState(null);

    React.useEffect(() => {
        const product = products.find(p => p.id === parseInt(id));
        setProductData(product);
    }, [id]);


    return (
        <>
            {productData ? (
                <div>
                    <img src={productData.image} alt={productData.title} style={{ width: '300px', height: '300px' }} />
                    <div>
                        <h1>{productData.title}</h1>
                        <p>Price: ${productData.price}</p>
                        <p>Desc: {productData.description}</p>
                        <Link className="btn" to="/">Other Products</Link>
                    </div>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
}

export default ProductDetails;