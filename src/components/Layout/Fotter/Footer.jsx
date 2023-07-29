import React from 'react';
import styles from './Footer.module.scss';
import { useForm } from 'react-hook-form';
import FooterEnd from './FooterEnd.jsx';
import Contacts from './Contacts';

const Footer = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>Оставьте контакты для связи</h1>
        <Contacts />
      </div>
      <div className="wrapper-inner-page">
        <FooterEnd />
      </div>
    </>
  );
};

export default Footer;
