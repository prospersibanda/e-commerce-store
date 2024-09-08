import React from 'react';
import '../Styles/Dashboard/sidebag.css';
import '../Styles/sidebar.css';
import '../Styles/product-page.css';
import { FaArrowLeft } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Sidebag from '../components/Sidebag';

const ProductPage = () => {
  return (
    <div className="detail-page">
      <Sidebar />
      <div className="product-page-section">
        <div className="product-img">
          <span className="back-text">
            <FaArrowLeft className="back-icon" />
            <a href="/">Back</a> <br />
          </span>
          <div className="side-images">
            <img
              src="./img/products/watch.png"
              alt="A SE edition time-piece."
            />
            <img
              src="./img/products/watch.png"
              alt="A SE edition time-piece."
            />
            <img
              src="./img/products/watch.png"
              alt="A SE edition time-piece."
            />
          </div>
          <img src="./img/products/watch.png" alt="A SE edition time-piece." />
          <div className="product-details">
            <h1 className="product-h1">Apple Watch</h1>
            <h3 className="product-h3">Series 5 SE </h3>
            <div className="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>
             <h4 className="product-price">$ 529.99</h4>
            <p className="product-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <button className='add-to-bag'><i class="fa-solid fa-bag-shopping-plus"></i>Add to bag
        </button>
        <hr />
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Sidebag />
    </div>
  );
}

export default ProductPage