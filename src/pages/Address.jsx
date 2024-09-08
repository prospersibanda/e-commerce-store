import React, { useState } from "react";
import "../Styles/address.css";
import { FaLock } from "react-icons/fa";

const Address = () => {
  const [formData, setFormData] = useState({
    shippingName: "",
    streetName: "",
    city: "",
    state: "",
    country: "",
    saveAsDefault: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.name.trim()) formErrors.name = "Shipping Name is required";
    if (!formData.streetName.trim())
      formErrors.streetName = "Street Name is required";
    if (!formData.city.trim()) formErrors.city = "City is required";
    if (!formData.state.trim()) formErrors.state = "State is required";
    if (!formData.country.trim()) formErrors.country = "Country is required";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="address-container">
      <form className="address-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Shipping Name</label> <br />
        <input
          type="text"
          placeholder="John Maker"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />{" "}
        <br /> <br />
        <label htmlFor="street-name">Street Name</label> <br />
        <input
          type="text"
          name="streetName"
          placeholder="123 Plae Grond Stret"
          required
          value={formData.streetName}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <label htmlFor="city">City</label> <br />
        <input
          type="text"
          placeholder="Vermont"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />{" "}
        <br /> <br />
        <label htmlFor="state">State</label> <br />
        <input
          type="text"
          placeholder="California"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />{" "}
        <br /> <br />
        <label htmlFor="country">Country</label> <br />
        <input
          type="text"
          placeholder="United States of America"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <span>
          <input
            type="checkbox"
            name="saveAsDefault"
            value={formData.saveAsDefault}
            onChange={handleChange}
          />{" "}
          <p>Save this as your default address</p>
        </span>{" "}
        <br />
        <input type="button" value="Add Address" /> <br /> <br /> <br />
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
};

export default Address;
