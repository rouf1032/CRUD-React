import React from 'react';
import Items from './Items';
import './PackingItems.css'

const PackingItems = ({cartItems, deletedItems, onToggleItem}) => {
    
    return (
        <div className='packing'>
            {cartItems.map((item) => (
                <Items key={item.id} item={item} deletedItems={deletedItems} onToggleItem={onToggleItem}/>
            ))}
        </div>
    );
};

export default PackingItems;