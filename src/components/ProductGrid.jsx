import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../Styles/Dashboard/ProductGrid.css';
import addCartBtn from '../Assets/addCartBtn.png';

const ProductGrid = () => {
    const products = useSelector((state) => state.products.items); // Get product data from Redux state

    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="image-container">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.name} className="product-image" />
                        </Link>
                    </div>
                    <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <div className="product-price">
                            {product.price}
                            <img 
                                src={addCartBtn} 
                                className='add-bagIcon' 
                                alt="Add to cart"
                                // Add to cart functionality
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
