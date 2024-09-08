import React from 'react';
import { useSelector, useDispatch } from 'react-redux';  // Import useDispatch for actions
import { addToCart } from '../state/cartSlice';  // Import addToCart action
import '../Styles/Dashboard/ProductGrid.css';
import addCartBtn from '../Assets/addCartBtn.png';

const ProductGrid = () => {
    const products = useSelector((state) => state.products.items);  // Access products from Redux state
    const dispatch = useDispatch();  // Initialize useDispatch to dispatch actions

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));  // Dispatch the action to add the product to the cart
    };

    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="image-container">
                        <img src={product.image} alt={product.name} className="product-image" />
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
                                onClick={() => handleAddToCart(product)}  // Call handleAddToCart on click
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
