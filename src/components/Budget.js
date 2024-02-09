import React, { useContext, useState } from 'react';
import { AppContext } from '../../../Company-Budget/src/context/AppContext';
import './Budget.css';
import CurrencySelector from './CurrencySelector';

const Budget = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('£'); // Initialize selectedCurrency state with Pound (£)
  
  // Function to handle currency change
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value); // Update selectedCurrency when user selects a different currency
  };

  return (
    <div className='alert alert-secondary'>
      <CurrencySelector selectedCurrency={selectedCurrency} handleCurrencyChange={handleCurrencyChange} /> {/* Render the CurrencySelector component */}
      <form className="budget-form">
        <label>
          Budget:
          <input
            type="number"
            value={`${selectedCurrency} ${newBudget}`} {/* Dynamically display currency prefix */}
            placeholder={`Enter a number`}
            step={10}
          />
        </label>
      </form>
    </div>
  );
};

export default Budget;
