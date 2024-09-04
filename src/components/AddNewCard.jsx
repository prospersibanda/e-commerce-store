import React from 'react';
import '../Styles/PaymentPage/AddNewCard.css';

const AddNewCard = () => {
    return (
        <div className="add-new-card">
            <h2>Add a New Card</h2>
            <form>
                <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" value="John Maker" />
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" value="5126-5987-2214-7621" />
                </div>
                <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM / YYYY" />
                    <label>CVC</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className="form-group">
                    <input type="checkbox" /> Save this as your default payment method
                </div>
                <button type="submit" className="add-payment-method">
                    Add Payment Method
                </button>
            </form>
            <div className="back-button">Back</div>
            <div className="secure-connection">
                <i className="fas fa-lock"></i> Secure Connection
            </div>
        </div>
    );
};

export default AddNewCard;
