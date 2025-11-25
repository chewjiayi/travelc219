import React, { useState } from "react";
// Initial packing items

const initialItems=[
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form() {
  function handleSubmit(e){
    e.preventDefault();
  }
 
  const [description,setDescription]=useState('')
  const [quantity,setQuantity]=useState(1)

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <label>
        <input 
          type="text" 
          name="item" 
          placeholder="Item..."
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
         
        />
      </label>
      <button>Add</button>
    </form>
  );
}



function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item quantity={2} description="This is a green"/>
        ))}
      </ul>
    </div>
  );
}

function Item(){
  return(
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <div>
          <li>{item.quantity}</li>
          <li>{item.description}</li>
          </div>
        ))}

      </ul>
    </div>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in the list. You already packed Y (Z%).</em>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
      <ul>
        {initialItems.map((item) => (
          <li key={item.id} >
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.description} ({item.quantity})
            </span>
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
