import React from 'react';
import styles from './ButtonInternet.module.scss';

const ButtonInternet = ({ name }) => {
  return (
    <button className={styles.btn}>
      <span>{name}</span>
    </button>
  );
};

export default ButtonInternet;
