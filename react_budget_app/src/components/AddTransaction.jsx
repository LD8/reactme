import React, { useState } from "react";

export const AddTransaction = ({ handleAddTransaction }) => {
  const generateID = () => Math.floor(Math.random() * 1000000);
  const [newTransaction, setNewTransaction] = useState({
    id: generateID(),
    description: "",
    amount: ""
  });
  const onSubmit = e => {
    e.preventDefault();
    handleAddTransaction(newTransaction);
    setNewTransaction({ id: generateID(), description: "", amount: "" });
  };

  return (
    <div className="add-transaction">
      {/* <h3>Add Income / Expense</h3> */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={newTransaction.description}
          onChange={e =>
            setNewTransaction({
              ...newTransaction,
              description: e.target.value
            })
          }
          placeholder="Enter a description of your transaction"
        />
        <input
          type="text"
          value={newTransaction.amount}
          onChange={e =>
            setNewTransaction({ ...newTransaction, amount: e.target.value })
          }
          placeholder="Enter a positive or negative number"
        />
        <button
          className="add-button"
          type="submit"
          disabled={(newTransaction.description !== "" && newTransaction.amount !== "" && !isNaN(newTransaction.amount)) ? false : true}
        >
          Add</button>
      </form>
    </div>
  );
};
