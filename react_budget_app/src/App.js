import React, { useState, useEffect } from "react";
import "./App.css";

function DisplayBalance({ balance }) {
  return (
    <div id="DisplayBalance">
      <h2>{balance}</h2>
    </div>
  );
}

function Items({ itemList }) {
  const items = itemList.map(item => (
    <li className="item" key={item.description}>
      <span>{item.description}</span>
      <span>{item.amount}</span>
    </li>
  ));

  return <ul id="Items">{items}</ul>;
}

function App() {
  const [balance, setBalance] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState({ description: "", amount: 0 });

  // const handleAddItemInput = e => {
  //   e.target.name === "description"
  //     ? setItem({...item, description: e.target.value })
  //     : setItem({...item, amount: parseInt(e.target.value) });
  // };

  const handleAddItemInput = e => {
    setItem({
      ...item,
      [e.target.name]:
        e.target.name === "description"
          ? e.target.value
          : parseInt(e.target.value)
    });
  };

  const handleAddItemFormSubmit = e => {
    e.preventDefault();
    setItemList([...itemList, item]);
    setItem({ description: "", amount: 0 });
    // getBalance(); // why can't it be here?
  };

  const getBalance = () =>
    setBalance(() => {
      const amounts = itemList.map(item => item.amount);
      return amounts.reduce((acc, amount) => (acc += amount), 0); //fix the result to be 2 decimal float
    });

  // still do NOT understand this function, WHY??
  useEffect(() => {
    getBalance();
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Budget App</h1>
      </header>

      <DisplayBalance balance={balance} />

      <form id="AddItemForm" onSubmit={handleAddItemFormSubmit}>
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={handleAddItemInput}
        />
        <input
          type="number"
          name="amount"
          value={item.amount}
          onChange={handleAddItemInput}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      <Items itemList={itemList} />
    </div>
  );
}

export default App;
