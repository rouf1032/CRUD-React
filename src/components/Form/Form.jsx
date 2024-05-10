import React, { useState } from "react";
import "./Form.css";

const Form = ({getNewItem}) => {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!item) return;
    const newItem = { description:item, quantity, packed: false, id: Date.now() };
    getNewItem(newItem);
    setQuantity(1)
    setItem("")
  };

  const handleQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleItem = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>What do you need for your trip 😍</h4>
        <select name="" id="" value={quantity} onChange={handleQuantity}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          name=""
          id="item-input"
          placeholder="item..."
          value={item}
          onChange={handleItem}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
