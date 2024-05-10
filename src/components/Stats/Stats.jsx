import React from 'react';
import './Stats.css'

const Stats = ({allItems}) => {
    if(!allItems.length) {
        return (
            <div className='stats'>
                <p>Start Adding some items to your packing list 🚀</p>
            </div>
        )
    }
    
    const length = allItems.length;
    const packed = allItems.filter((item) => item.packed).length;
    const percentage = Math.round((packed / length) * 100);

    return (
        <div className='stats'>
        {percentage == 100 ? "All Packed!!!Ready to go 🚀" :`You have ${length} items on your list, and you already packed ${packed} (${percentage}%)`}
            
        </div>
    );
};

export default Stats;