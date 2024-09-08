import React from "react"; 
import '../Styles/address.css';
import {FaLock} from 'react-icons/fa';

const Address = () => {
  return (
    <div className="address-container">
      <form className="address-form">
        <label htmlFor="name">Shipping Name</label> <br />
        <input type="text" placeholder="John Maker" value="" /> <br /> <br />
        <label htmlFor="street-name">Street Name</label> <br />
        <input
          type="text"
          placeholder="123 Plae Grond Stret"
          value=""
        /> <br /> <br />
        <label htmlFor="city">City</label> <br />
        <input type="text" placeholder="Vermont" value="" /> <br /> <br />
        <label htmlFor="state">State</label> <br />
        <input type="text" placeholder="California" value="" /> <br /> <br />
        <label htmlFor="country">Country</label> <br />
        <input
          type="text"
          placeholder="United States of America"
          value=""
        />{" "}
        <br />
        <span>
          <input type="checkbox" name="checkbox" value="" />{" "}
          <p>Save this as your default address</p>
        </span>{" "}
        <br />
        <input type="button" value="Add Address" /> <br/> <br/> <br/>
        <span class="last-details">
        <a href="/">Back</a>
      <span className="lock"><FaLock className="icon"/><p class="connection">Secure Connection</p></span>
        </span>
      </form>
    </div>
  );
}

export default Address;