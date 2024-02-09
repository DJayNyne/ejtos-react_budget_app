// CurrencySelector.js

import React from 'react';
import './CurrencySelector.css';

const CurrencySelector = ({ selectedCurrency, handleCurrencyChange }) => {
    return (
        <div className="currency-selector">
            <label>
                Currency:
                <select value={selectedCurrency} onChange={handleCurrencyChange} className="currency-dropdown">
                    <option value="$">Dollar ($)</option>
                    <option value="£">Pound (£)</option>
                    <option value="€">Euro (€)</option>
                    <option value="₹">Rupee (₹)</option>
                </select>
            </label>
        </div>
    );
};

export default CurrencySelector;
