import React from 'react';
import './Items.css'

const Items = ({item, deletedItems, onToggleItem}) => {

    const {description,quantity,packed,id} = item;
    const handleClick = (id) => {
        deletedItems(id);
    }

    const handlePacked = (id) => {
        onToggleItem(id);
    }

    return (
        <div className='items'>
        <ul>
        <input type="checkbox" name="" id="checkbox-input" value={packed} onChange={() => handlePacked(id)}/>
        
            <li style={packed? {textDecoration:"line-through"} : {}}>{quantity} {description}</li>
            <button className='btn' onClick={()=> handleClick(id)}>❌</button>
        </ul>
            
        </div>
    );
};

export default Items;