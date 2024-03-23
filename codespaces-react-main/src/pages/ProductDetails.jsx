import React from "react";
import '@mui/material/styles';
import Button from '@mui/material/Button';
import { useParams, Link } from "react-router-dom";
import { ProductList } from "../data/productList";

const ProductDetails = () => {
    const { productId } = useParams(); // Use more descriptive variable name
    const details = ProductList[productId]
    console.log(details);
    return (
        <div className="product-details-container">
            <h1>{details.name}</h1>
            <div className="product-details">
                <img src={details.img} alt="" />
                <div className="detail-texts">
                    <h3>{details.name}</h3>
                    <p>{details.description}</p>
                    <p>Price: {details.price}</p>
                    <p>Discount: {details.discountPercent}%</p>
                    <Link to={'/cart/'}>
                        <Button variant="outlined">Add to cart</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default ProductDetails