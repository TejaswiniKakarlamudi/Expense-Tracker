import React, { useState } from 'react';
import styles from './Display.module.css';
import EditPopup from './EditPopup';
import Piechart from './PieChart';
function Display({ expenses }) {
  const [balance, setBalance] = useState(5000);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const expensesData = require('../expenses.json').expenses.crio; 
  const handleAddIncome = () => {
    setPopupTitle('Add Balance');
    setIsPopupOpen(true);
  };

  const handleAddExpense = () => {
    setPopupTitle('Add Expense');
    setIsPopupOpen(true);
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = (data) => {
    if (popupTitle === 'Add Balance') {
      setBalance(balance + parseFloat(data.balance || 0));
    } else if (popupTitle === 'Add Expense') {
      const newExpense = parseFloat(data.price || 0);
      setExpensesTotal(expensesTotal + newExpense);
      // Add logic to update expenses in expenses.json here
    }
    setIsPopupOpen(false);
  };
  const walletballance = '4500';
  const expenseBalance = '500';
  return (
    <div className={styles.display}>
      <div className={styles.topdisplay}>
        <div className={styles.balance}>
          Wallet Balance: ₹ {walletballance}
          <button onClick={handleAddIncome}>+ Add Income</button>
        </div>
        <div className={styles.expenses}>
          Expenses: ₹ {expenseBalance}
          <button onClick={handleAddExpense}>+ Add Expense</button>
        </div>
        <div>
          <Piechart expensesData={expensesData}/>
        </div>
      </div>
      {isPopupOpen && (
        <EditPopup
          title={popupTitle}
          button="Submit"
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default Display;
