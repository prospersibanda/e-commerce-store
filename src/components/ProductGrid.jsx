import React from 'react';
import { useSelector } from 'react-redux';  // Import useSelector to access Redux state
import '../Styles/Dashboard/ProductGrid.css';
import addCartBtn from '../Assets/addCartBtn.png';

const ProductGrid = () => {
    // Access the products data from the Redux store
    const products = useSelector((state) => state.products.items);

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
                        <div className="product-price">{product.price}<img src={addCartBtn} className='add-bagIcon'/></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
