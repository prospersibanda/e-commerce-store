import React, { useState } from 'react';
import '../Styles/checkout.css';

function CheckoutPage() {
    const [address, setAddress] = useState("123 Place Grond Street, Vermont, California");
    const [paymentMethod, setPaymentMethod] = useState("mastercard");
    const [cartItems, setCartItems] = useState([
        { name: "Dell XPS 13", price: 1799.99, quantity: 1 },
        { name: "Iphone 11", price: 999.99, quantity: 1 }
    ]);

    const handlePlaceOrder = () => {
        alert("Order placed successfully!");
    };

    return (
        <div className="checkout-page">
            <ShippingAddress address={address} setAddress={setAddress} />
            <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
            <ReviewYourBag cartItems={cartItems} setCartItems={setCartItems} />
            <OrderSummary cartItems={cartItems} />
            <button onClick={handlePlaceOrder}>Place your order</button>
        </div>
    );
}

function ShippingAddress({ address, setAddress }) {
    return (
        <div className="shipping-address">
            <h2>Shipping Address</h2>
            <p>John Maker</p>
            <p>{address}</p>
            <p>United States of America</p>
            <button>Change</button>
        </div>
    );
}

function PaymentMethod({ paymentMethod, setPaymentMethod }) {
    return (
        <div className="payment-method">
            <h2>Payment Method</h2>
            <p><i className="fa fa-credit-card"></i> Mastercard ending in 1252</p>
            <p><i className="fa fa-gift"></i> $53.21 gift card balance</p>
            <label>
                <input type="checkbox" checked /> Billing address same as Shipping Address
            </label>
            <button>Change</button>
        </div>
    );
}

function ReviewYourBag({ cartItems, setCartItems }) {
    return (
        <div className="review-your-bag">
            <h2>Review Your Bag</h2>
            {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                    <p>{item.name}</p>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="quantity">
                        <button onClick={() => setCartItems(
                            cartItems.map((ci, i) => i === index ? { ...ci, quantity: ci.quantity - 1 } : ci)
                        )}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => setCartItems(
                            cartItems.map((ci, i) => i === index ? { ...ci, quantity: ci.quantity + 1 } : ci)
                        )}>+</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

function OrderSummary({ cartItems }) {
    const calculateTotal = () => {
        const itemTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        const shipping = 6.99;
        const gst = itemTotal * 0.13;
        return (itemTotal + shipping + gst).toFixed(2);
    };

    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Items: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
            <p>Shipping: $6.99</p>
            <p>Estimated GST: ${(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * 0.13).toFixed(2)}</p>
            <p>Order Total: ${calculateTotal()}</p>
        </div>
    );
}

export default Checkout;

