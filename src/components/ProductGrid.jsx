import React from 'react';
import '../Styles/Dashboard/ProductGrid.css';

const products = [
    { id: 1, name: 'Apple Watch', description: 'Series 5 SE', price: '$529.99', image: '/img/products/iphone15.jpg', },
    { id: 2, name: 'Sony ZX330BT', description: 'Light Grey', price: '$39.99', image: '/img/products/iphone15.jpg', },
    { id: 3, name: 'Iphone 11', description: 'Serious Black', price: '$619.99', image: '/img/products/iphone15.jpg', },
    { id: 4, name: 'Iphone 11', description: 'Subway Blue', price: '$619.99', image: '/img/products/iphone15.jpg', },
    { id: 5, name: 'Iphone 11', description: 'Product RED', price: '$619.99', image: '/img/products/iphone15.jpg', },
    { id: 6, name: 'Iphone 11', description: 'Milky White', price: '$619.99', image: '/img/products/iphone15.jpg', },
    { id: 7, name: 'Iphone 13', description: 'Product RED', price: '$619.99', image: '/img/products/iphone15.jpg', },
    { id: 8, name: 'Iphone 14', description: 'Product RED', price: '$619.99', image: '/img/products/iphone15.jpg', },
];

const ProductGrid = () => {
    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="image-container">
                        <img src={product.image} alt={product.name} className="product-image" />
                    </div>
                    <div className='product-info'>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <div className="product-price">{product.price}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
