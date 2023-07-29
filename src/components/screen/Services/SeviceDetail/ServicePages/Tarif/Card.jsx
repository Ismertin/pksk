import React, { useState } from 'react';
import styles from './Card.module.scss';
import Button from '../../../../../UI/Button/Button';
import Price from '../../../../../UI/price/Price';
import ModalExample from '../../../../../UI/Modal/Modal';

const Card = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(true);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.section}>
          <span>{data.section}</span>
        </div>
        <h1 className={styles.title}>{data.name}</h1>
        <div className={styles.circle}>
          <p>{data.speed}</p>
          <p>мбит/c</p>
        </div>
        <div className={styles.price}>
          <span>
            {data.priceOnMount} <Price first="руб" last="мес" />
          </span>
          <span>
            {data.priceOnYear} <Price first="руб" last="год" />
          </span>
        </div>
        <Button className={styles.btn} name="Подробнее" click={toggleModal} />
      </div>
      {isVisible && (
        <ModalExample isOpen={isVisible} setIsOpen={setIsVisible} />
      )}
    </>
  );
};

export default Card;
