import React from 'react';
import '../Styles/Dashboard/sidebag.css';

const bagItems = [
    { id: 1, image: 'path-to-your-image-1' },
    { id: 2, image: 'path-to-your-image-2' },
    { id: 3, image: 'path-to-your-image-3' },
    { id: 4, image: 'path-to-your-image-4' },
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
                <span className="icon">👜</span> View Bag
            </button>
        </div>
    );
};

export default Sidebag;
