import React from 'react';
import { category } from '../../fakeData/category';

const Inventory = () => {
    const handleAddProduct = () => {
        fetch('https://floating-earth-05223.herokuapp.com/addCategory ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category)
        })
       
    }

    return (
        <div>
            <button onClick={handleAddProduct}>add product</button>
        </div>
    );
};

export default Inventory;