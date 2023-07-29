import React from 'react';
import { DescriptionData } from './../../../UI/AboutCard/DescriptionData';
import styles from './ServiceDetail.module.scss';

const ServiceDetail = ({ search }) => {
  const selectedData = DescriptionData.find(item => item.search === search);

  if (selectedData) {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            <img src={selectedData.icon} alt={selectedData.name} />
          </div>
          <div className={styles.description}>
            <h1>{selectedData.name}</h1>
            <h2>{selectedData.description}</h2>
            <p>{selectedData.fullDescription}</p>
          </div>
        </div>
      </>
    );
  }

  return <p>Нет информации.</p>;
};

export default ServiceDetail;
