import React, { useState } from 'react';
import '../Styles/PaymentPage/AddNewCard.css';

const AddNewCard = () => {
const [formData, setFormData] = useState({
cardholderName: '',
cardNumber: '',
expiryDate: '',
cvc: '',
});

const validate = () => {
    let formErrors = {};

    if (!formData.cardholderName) formErrors.cardholderName = 'Cardholder Name is required';
    if (!formData.cardNumber) formErrors.cardNumber = 'Card Number is required';
    if (!formData.expiryDate) formErrors.expiryDate = 'Expiry Date is required';
    if (!formData.cvc) formErrors.cvc = 'CVC is required';
};
   
const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
};

    return (
        <div className="add-new-card">
            <h2>Add a New Card</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" name="cardholderName" value={formData.cardholderName} onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM / YYYY" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
                    <label>CVC</label>
                    <input type="text" placeholder="123" name="cvc" value={formData.cvc} onChange={handleChange} />
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
