import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { AddTransaction } from "./components/AddTransaction";
import { Transaction } from "./components/Transaction";
import { Transactions } from "./components/Transactions";
import "./App.css";

// const mockTransactionList = [
//   { id: 1, description: "Income", amount: "1000" },
//   { id: 2, description: "Fish", amount: "-20" },
//   { id: 3, description: "Rent", amount: "400" },
//   { id: 4, description: "Breakfast", amount: "-7" },
//   { id: 5, description: "Dog food", amount: "-30" },
//   { id: 6, description: "Muj's bread", amount: "-130" }
// ]

export default function App() {
  // const [transactionList, setTransactionList] = useState(mockTransactionList);
  const [transactionList, setTransactionList] = useState(
    localStorage.getItem("transactions") !== null
      ? JSON.parse(localStorage.getItem("transactions"))
      : []
  );
  const [amounts, setAmounts] = useState([]);

  useEffect(() => {
    setAmounts(
      transactionList.map(transaction => parseInt(transaction.amount))
    );
    localStorage.setItem("transactions", JSON.stringify(transactionList));
  }, [transactionList]);

  const handleAddTransaction = newTransaction => {
    setTransactionList([newTransaction, ...transactionList]);
  };

  const handleDeleteTransaction = id => {
    setTransactionList(
      transactionList.filter(transaction => transaction.id !== id)
    );
  };
  return (
    <>
      <Header />
      <div className="container">
        <Balance amounts={amounts} />
        <Transactions>
          {transactionList.length !== 0 ? (
            transactionList.map(transaction => (
              <Transaction
                key={transaction.id}
                transaction={transaction}
                handleDeleteTransaction={handleDeleteTransaction}
              />
            ))
          ) : (
            <p className="transaction text-center">Please add history below</p>
          )}
        </Transactions>
        <AddTransaction handleAddTransaction={handleAddTransaction} />
      </div>
    </>
  );
}
