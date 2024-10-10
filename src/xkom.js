import React from 'react';
import zdj1 from './1.png';
import zdj2 from './2.png';
import zdj3 from './3.png';
import ProductCard from './ProductCard';

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: 'Apple AirPods Pro 2 (USB-C)',
            price: 1149.00,
            imageUrl: 'https://cdn.mos.cms.futurecdn.net/oJKZPRwWHbxrJzA3EVVtFi.jpeg',
            description: 'Słuchawki True Wireless z aktywną redukcją szumów.',
        },
        {
            id: 2,
            name: 'QCY Arbuds Lite T27',
            price: 89.00,
            imageUrl: zdj2, // używaj zdefiniowanej zmiennej
            description: 'Słuchawki True Wireless z redukcją szumów ENC.',
        },
        {
            id: 3,
            name: 'JBL Tune 510BT',
            price: 169.00,
            imageUrl: zdj3, // używaj zdefiniowanej zmiennej
            description: 'Bezprzewodowe słuchawki nauszne z Bluetooth.',
        },
    ];

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    description={product.description}
                />
            ))}
        </div>
    );
};

export default ProductList;