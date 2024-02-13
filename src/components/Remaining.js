import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = ({ selectedCurrency }) => {
    const { expenses, budget } = useContext(AppContext);
console.log("Redering Remaining, Budget:", budget, "Expenses", expenses);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost,0);
    const remaining = budget - totalExpenses;

    return (
        <div
        className={`alert ${remaining < 0 ? 'alert-danger' : 'alert-success'}`}>
        Remaining: <span> {selectedCurrency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
