import React, { useState } from 'react';
import styles from './Header.module.css';
import { HiAdjustmentsHorizontal, HiOutlineUser, HiMiniFolderPlus, HiMiniFolderMinus, HiMiniFolderArrowDown } from 'react-icons/hi2';

function Header({ expenseList }) {
  const [name, setName] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [plusMinusState, setPlusMinusState] = useState(true); // State to toggle plus/minus icon

  const containsName = (name) => {
    return expenseList.includes(name);
  };

  const handleAddDelete = () => {
    if (containsName(name)) {
      console.log(`Delete ${name}`);
      setPlusMinusState(false); // Set state to minus
      // Delete logic here
    } else {
      console.log(`Add ${name}`);
      setPlusMinusState(true); // Set state to plus
      // Add logic here
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (selectedName) => {
    setName(selectedName);
    setIsMenuOpen(false); // Close menu after selection
  };

  return (
    <div className={styles.Header}>
      <div className={styles.title}>Expense Tracker</div>
      <div className={styles.headerbuttons}>
        <div className={styles.button}>
          <HiOutlineUser className={styles.icon} />
        </div>
        <div className={styles.button}>
          <button
            onClick={handleAddDelete}
            style={{ background: 'transparent', border: 'none' }}
          >
            {plusMinusState ? (
              <HiMiniFolderPlus className={styles.icon} />
            ) : (
              <HiMiniFolderMinus className={styles.icon} />
            )}
          </button>
        </div>
        <div className={styles.button}>
          <button
            onClick={handleMenuToggle}
            style={{ background: 'transparent', border: 'none' }}
          >
            <HiMiniFolderArrowDown className={styles.icon} />
          </button>
        </div>
        <div className={styles.button}>
          <button onClick={() => handleMenuClick()}>
            <HiAdjustmentsHorizontal className={styles.icon} /> More
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.menu}>
          <ul>
            {expenseList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
