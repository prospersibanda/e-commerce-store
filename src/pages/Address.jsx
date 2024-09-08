import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, toggleSaveAsDefault } from '../state/addressSlice';
import '../Styles/address.css';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const address = useSelector((state) => state.address);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAddress({ [name]: value }));
  };

  const handleSaveAsDefault = () => {
    dispatch(toggleSaveAsDefault());
  };

  const handleSubmit = () => {
    // Handle form submission logic
    alert("Address added successfully!");
    navigate('/checkout'); // Navigate to the /checkout route
  };

  return (
    <div className="address-container">
      <form className="address-form">
        <label htmlFor="name">Shipping Name</label> <br />
        <input
          type="text"
          name="name"
          placeholder="John Maker"
          value={address.name}
          onChange={handleChange}
        /> <br /> <br />
        <label htmlFor="street">Street Name</label> <br />
        <input
          type="text"
          name="street"
          placeholder="123 Place Grond Street"
          value={address.street}
          onChange={handleChange}
        /> <br /> <br />
        <label htmlFor="city">City</label> <br />
        <input
          type="text"
          name="city"
          placeholder="Vermont"
          value={address.city}
          onChange={handleChange}
        /> <br /> <br />
        <label htmlFor="state">State</label> <br />
        <input
          type="text"
          name="state"
          placeholder="California"
          value={address.state}
          onChange={handleChange}
        /> <br /> <br />
        <label htmlFor="country">Country</label> <br />
        <input
          type="text"
          name="country"
          placeholder="United States of America"
          value={address.country}
          onChange={handleChange}
        /> <br />
        <span>
          <input
            type="checkbox"
            name="saveAsDefault"
            checked={address.saveAsDefault}
            onChange={handleSaveAsDefault}
          />
          <p>Save this as your default address</p>
        </span> <br />
        <button type="button" onClick={handleSubmit}>Add Address</button> <br /> <br /> <br />
        <span className="last-details">
          <a href="/">Back</a>
          <span className="lock">
            <FaLock className="icon" />
            <p className="connection">Secure Connection</p>
          </span>
        </span>
      </form>
    </div>
  );
}

export default Address;
