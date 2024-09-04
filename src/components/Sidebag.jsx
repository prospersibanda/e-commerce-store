import React from 'react';
import '../Styles/Dashboard/sidebag.css';
import { FaShoppingBag } from 'react-icons/fa';

const bagItems = [
    { id: 1, image: '/img/products/laptop.png' },
    { id: 2, image: '/img/products/blueiphone11.png' },
    { id: 3, image: '/img/products/whiteiphone11.png' },
    { id: 4, image: '/img/products/blackiphone11.png' },
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
