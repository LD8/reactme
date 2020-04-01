import React from 'react'

export const Transactions = (props) => {
    return (
        <div className="transactions">
            <h3>Transaction History</h3>
            <ul className="transaction-ul">
                {props.children}
            </ul>
        </div>
    )
}
