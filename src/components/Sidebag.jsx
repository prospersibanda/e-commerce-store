import React from 'react';
import '../Styles/Dashboard/sidebag.css';
import { FaShoppingBag } from 'react-icons/fa';

const bagItems = [
    { id: 1, image: '/img/products/iphone15.jpg' },
    { id: 2, image: '/img/products/iphone15.jpg' },
    { id: 3, image: '/img/products/iphone15.jpg' },
    { id: 4, image: '/img/products/iphone15.jpg' },
];

const Sidebag = () => {
    return (
        <div className="shopping-bag">
            <h3 className="bag-title">Bag</h3>
            <div className="bag-items">
                {bagItems.map((item) => (
                    <div key={item.id} className="bag-item">
                        <img src={item.image} alt={`Item ${item.id}`} className="bag-item-image" />
                    </div>
                ))}
            </div>
            <button className="view-bag-button">
                <span className="bag-icon"><FaShoppingBag/></span> View Bag
            </button>
        </div>
    );
};

export default Sidebag;
