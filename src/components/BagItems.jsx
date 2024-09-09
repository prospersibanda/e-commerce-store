import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector to access Redux state
import '../Styles/bag.css'; // Import the CSS file for styling

const BagItems = () => {
  // Access the cart items from Redux store
  const items = useSelector((state) => state.cart.items);

  // Fallback if the cart is empty or items are undefined
  if (!items || items.length === 0) {
    return <p>Your bag is empty.</p>;
  }

  return (
    <div className="bag-container">
      <h2>Check your Bag Items</h2>
      {items.map((item) => (
        <div key={item.id} className="bag-items-con">
          <div className="bag-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="bag-details">
            <h3>{item.name}</h3>
            <p className="color">{item.color}</p>
            <p className="description">{item.description}</p>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span> <p>{item.rating} / 5</p>
            </div>
            <p className="price">
              ${item.price.toFixed(2)} <span> x {item.quantity}</span>
            </p>
            <div className="quantity-controls">
              <button>-</button>
              <span>{item.quantity}</span>
              <button>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BagItems;
