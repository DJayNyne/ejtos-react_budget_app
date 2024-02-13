import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './Budget.css';

const Budget = ({ selectedCurrency }) => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    const initialBudgetValue = Math.max(2000, budget - totalExpenses);
    const [newBudget, setNewBudget] = useState(initialBudgetValue);
    const [error, setError] = useState(null);

    const handleBudgetChange = (event) => {
        const inputValue = event.target.value.trim();
        const inputBudget = parseFloat(inputValue);

        if (inputValue === '') {
            setNewBudget(null);
            setError(null);
            return;
        }

        let remainingBudget = budget - totalExpenses;

        setNewBudget(inputBudget);

        if (!isNaN(inputBudget) && inputBudget <= 20000.01 && inputBudget >= remainingBudget) {
            setError(null);
        } else if (inputBudget > 20000.01) {
            setError("Budget cannot exceed 20,000");
        } else if (inputBudget < remainingBudget) {
            setError("Budget cannot be lower than spending");
        } else {
            setError("Invalid input");
        }
        
        dispatch({
            type: 'UPDATE_BUDGET',
            payload: inputBudget,
        });
    };

    return (
        <div>
            <div className='alert alert-secondary'>
                <form className="budget-form" onSubmit={handleFormSubmit}>
                    <div className={`currency-prefix ${selectedCurrency.toLowerCase()}-prefix`}>
                        {selectedCurrency}
                    </div>
                <label>
                        Budget:
                        <input
                            type="number"
                            value={newBudget === null ? '' : newBudget}
                            onChange={handleBudgetChange}
                            placeholder= "Enter a Number"
                            step={10}
                        />
                    </label>

                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default Budget;
