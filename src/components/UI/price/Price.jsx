import React from 'react';
import styles from './Price.module.scss';

const Price = ({ first, last }) => {
  return (
    <div className={styles.price}>
      <span className={styles.currency}>{first}</span>
      <span className={styles.divider}></span>
      <span className={styles.period}>{last}</span>
    </div>
  );
};

export default Price;
