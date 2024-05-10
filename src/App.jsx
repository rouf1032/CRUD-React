import { useState } from 'react'
import PackingItems from './components/PackingItems/PackingItems'
import Logo from './components/Logo/Logo'
import Form from './components/Form/Form'
import Stats from './components/Stats/Stats'
import './App.css'


// const cartItems = [
//   {description:"Toothbrshu", quantity:2, packed:false, id:1},
//   {description:"Pass", quantity:1, packed:false, id:2},
//   {description:"Socks", quantity:3, packed:true, id:3},
  
// ]



function App() {

  const [listItem, setListItem] = useState([
    // {description:"Pass", quantity:1, packed:false, id:2},
//   {description:"Socks", quantity:3, packed:true, id:3},
  ])

  const newItem = (items) => {
    console.log(items);
      setListItem((prevItems) => [...prevItems, items])
  }

  const filteredItem = (id) => {
    setListItem(prevItems => prevItems.filter(items => items.id !== id));
    
  }

  const handleUpdate = (id) => {
    setListItem(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    
  };

  return (
    <div className='app'>
    <div className="app-logo">
      <Logo />
    </div>
    <div className="app-form">
      <Form getNewItem={newItem}/>
    </div>
    <div className="app-form">
      <PackingItems cartItems={listItem} deletedItems={filteredItem} onToggleItem={handleUpdate}/>
    </div>
    <div className="app-form">
      <Stats allItems={listItem}/>
    </div>
    
    
    
    </div>
  )
}

export default App
