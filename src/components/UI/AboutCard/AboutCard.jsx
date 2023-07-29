import React from 'react';
import { DescriptionData } from './DescriptionData';
import styles from './AboutCard.module.scss';
import { useNavigate } from 'react-router-dom';



const AboutCard = () => {
  const nav = useNavigate()
  const handleClick = (item) => {
    nav(item.nav)
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Наши
        <br />
        Услуги:
      </h1>
      <div className={styles.cardContainer}>
        {DescriptionData.map((item, index) => (
          <div className={styles.card} key={index} onClick={() => handleClick(item)}>
            <img className={styles.cardIcon} src={item.icon} alt="" />
            <h2 className={styles.cardTitle}>{item.name}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
