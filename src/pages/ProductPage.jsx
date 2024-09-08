import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Dashboard/sidebag.css';
import '../Styles/sidebar.css';
import '../Styles/product-page.css';
import { FaArrowLeft } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Sidebag from '../components/Sidebag';
import { useSelector } from 'react-redux';
import '../Styles/Dashboard.css';

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from the URL parameter
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  ); // Find the product based on the ID

  // If the product is not found, return an error message
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="detail-page">
       <Sidebar className='sidebar'/>
      <div className="product-page-section">
        <div className="product-img">
          <span className="back-text">
            <FaArrowLeft className="back-icon" />
            <a href="/">Back</a> <br />
          </span>
          <div className="side-images">
            {/* Side images, these could be different angles of the product */}
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
          </div>

          {/* Main product image */}
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h1 className="product-h1">{product.name}</h1>
            <h3 className="product-h3">{product.description}</h3>
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <h4 className="product-price">{product.price}</h4>
            <p className="product-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <button className="add-to-bag">
          <i className="fa-solid fa-bag-shopping-plus"></i>Add to bag
        </button>
        <hr />
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Sidebag className='sidebag'/>
    </div>
  );
};

export default ProductPage;
