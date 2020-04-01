import React from 'react'

export const IncomeExpense = ({ amounts }) => {
    const incomeTotal = amounts.filter(amount => amount > 0).reduce(((acc, posAmount) => acc += posAmount), 0)
    const expenseTotal = amounts.filter(amount => amount < 0).reduce(((acc, negAmount) => acc += negAmount), 0)
    // console.log(incomeTotal, expenseTotal)
    return (
        <div className="income-expense-total">
            <div className="income-total">
                <p>Income Total</p>
                <p>{incomeTotal}</p>
            </div>
            <div className="expense-total">
                <p>Expense Total</p>
                <p>{expenseTotal}</p>
            </div>
        </div>
    )
}
