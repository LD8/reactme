import React from 'react'
import { IncomeExpense } from "./IncomeExpense"

export const Balance = ({ amounts }) => {
    const totalAmount = amounts.reduce(((acc, amount) => acc += amount), 0)
    return (
        <div className="balance">
            <h3>Balance</h3>
            <h2 className="balance-number">$ {totalAmount}</h2>
            <IncomeExpense amounts={amounts} />
        </div>
    )
}
