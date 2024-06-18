import React, { useEffect } from 'react';
import styles from './LandingPage.module.css';
import Display from '../Components/Display';
import Header from '../Components/Header';
import expensesData from '../expenses.json';

function LandingPage() {
  const { expenses, mainbalance } = expensesData;

  useEffect(() => {
    localStorage.setItem('mainbalance', mainbalance);
  }, [mainbalance]);

  return (
    <div className={styles.lander}>
      <div className={styles.title}><Header expenseList={Object.keys(expenses)} /></div>
      <Display expenses={expenses} />
    </div>
  );
}

export default LandingPage;
