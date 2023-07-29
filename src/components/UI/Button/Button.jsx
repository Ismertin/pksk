import React from 'react';
import styles from './Button.module.scss';

const Button = ({ name, click }) => {
  return (
    <button className={styles.btn} onClick={click}>
      <span>{name}</span>
    </button>
  );
};

export default Button;
