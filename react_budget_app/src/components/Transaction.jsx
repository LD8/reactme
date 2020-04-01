import React, { useState } from 'react'

export const Transaction = ({ transaction, handleDeleteTransaction }) => {
    const sign = transaction.amount > 0 ? "+" : "-";
    const [showButton, setShowButton] = useState(false);
    const deleteTransaction = () => {
        handleDeleteTransaction(transaction.id);
    }
    console.log(transaction);
    return (
        <li
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
            className={sign === "+" ? "transaction pos-transaction" : "transaction neg-transaction"}>
            <p>{transaction.description}</p>
            <p className={sign === "+" ? "green-text" : "red-text"}>{sign}${Math.abs(transaction.amount)}</p>
            {showButton && <button
                className="delete-button"
                onClick={deleteTransaction}
            >x</button>}
        </li>
    )
}
