import React, { useState } from 'react';
import Card from './Card';
import { cardData } from './TarifData';
import styles from './Card.module.scss';
const CardList = () => {
  const [cardStates, setCardStates] = useState(cardData.map(() => false));

  const toggleCardState = (index) => {
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <>
      <div className={styles.container}>
        {cardData.map((data, index) => (
          <Card
            key={index}
            data={data}
            isFlipped={cardStates[index]}
            toggleFlip={() => toggleCardState(index)}
            className={styles.card}
          />
        ))}
      </div>
    </>
  );
};

export default CardList;
