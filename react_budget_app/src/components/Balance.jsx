import React, { useEffect } from 'react'
import { useSpring, animated } from "react-spring";
import { IncomeExpense } from "./IncomeExpense"

let oldAmount = 0;

export const Balance = ({ amounts }) => {
    const newAmount = amounts.reduce(((acc, amount) => acc += amount), 0)
    const props = useSpring({ to: { newAmount }, from: { oldAmount } });

    useEffect(() => {
        oldAmount = newAmount
    }, [newAmount])
    
    return (
        <div className="balance">
            <h3>Balance</h3>
            <h2 className="balance-number">$ <animated.span>{props.newAmount.interpolate(x => Math.floor(x))}</animated.span></h2>
            <IncomeExpense amounts={amounts} />
        </div>
    )
}
