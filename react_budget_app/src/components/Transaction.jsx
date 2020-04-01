import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';

export const Transaction = ({ transaction, handleDeleteTransaction }) => {
    const sign = transaction.amount > 0 ? "+" : "-";
    const [showButton, setShowButton] = useState(false);
    const deleteTransaction = () => {
        handleDeleteTransaction(transaction.id);
    }
    return (
        <li
            onMouseOver={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
            className={sign === "+" ? "transaction pos-transaction" : "transaction neg-transaction"}>
            <p className="transaction-description">{transaction.description}</p>
            <p className={sign === "+" ? "transaction-amount green-text" : "transaction-amount red-text"}>{sign}${Math.abs(transaction.amount)}</p>

            {showButton && <button
                className="delete-button"
                onClick={deleteTransaction}
            >-</button>}
        </li>
    )
}
