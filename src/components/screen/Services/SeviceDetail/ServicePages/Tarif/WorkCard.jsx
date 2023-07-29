import React, { useState } from 'react';
import styles from './Card.module.scss';
import Button from '../../../../../UI/Button/Button';
import Price from '../../../../../UI/price/Price';

const Card = ({ data }) => {
  const [isFrontVisible, setIsFrontVisible] = useState(true);

  const toggleFlip = () => {
    setIsFrontVisible(!isFrontVisible);
  };

  return (
    <div className={styles.card}>
      {isFrontVisible ? (
        <>
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
          <Button className={styles.btn} name="Подробнее" click={toggleFlip} />
        </>
      ) : (
        <div className={styles.cardBack}>
          <h1 className={styles.backTitle}>Подходит для:</h1>
          <ul className={styles.list}>
            {data.description.map((item, descriptionIndex) => (
              <li key={descriptionIndex}>{item}</li>
            ))}
          </ul>
          <Button className={styles.btn} name="Подключить" click={toggleFlip} />
        </div>
      )}
    </div>
  );
};

export default Card;
