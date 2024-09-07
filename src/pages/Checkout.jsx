import React, { useState } from 'react';

function Checkout() {
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [cartItems, setCartItems] = useState([]);

    const handlePlaceOrder = () => {
        // Handle order placement logic here
    };

    return (
        <div className="checkout-page">
            <ShippingAddress address={address} setAddress={setAddress} />
            <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
            <CartItems cartItems={cartItems} setCartItems={setCartItems} />
            <OrderSummary cartItems={cartItems} />
            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
}

function ShippingAddress({ address, setAddress }) {
    return (
        <div className="shipping-address">
            <h2>Shipping Address</h2>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
            />
        </div>
    );
}

function PaymentMethod({ paymentMethod, setPaymentMethod }) {
    return (
        <div className="payment-method">
            <h2>Payment Method</h2>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="mastercard">MasterCard</option>
                <option value="visa">Visa</option>
                <option value="paypal">PayPal</option>
            </select>
        </div>
    );
}

function CartItems({ cartItems, setCartItems }) {
    return (
        <div className="cart-items">
            <h2>Review Your Bag</h2>
            {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(index, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
}

function OrderSummary({ cartItems }) {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Total: ${calculateTotal()}</p>
        </div>
    );
}

export default Checkout;
