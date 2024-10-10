import React from 'react';
import './xkom.css';

const ProductCard = ({ name, price, imageUrl, description }) => {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-description">{description}</p>
            <p className="product-price">${price.toFixed(2)}</p>

            <button className="custom-button">
                Kup teraz
            </button>
        </div>
    );
};

export default ProductCard;