import React, { Fragment } from 'react';
import styles from './Footer.module.scss';
import { BiMap } from 'react-icons/bi';
import Social from '../../UI/Social/Social.jsx';
import { Link } from 'react-router-dom';
import stylesSocial from '../../UI/Social/Social.module.scss';

const FooterEnd = () => {
  const MAP_LINK = 'Бухта мечты';
  return (
    <Fragment>
      <div className={styles.footer_end}>
        <div className={styles.footer_map}>
          <Link
            key={'locate'}
            to={
              'https://yandex.ru/maps/org/bukhta_mechty/1084122795/?ll=33.713584%2C44.412895&z=16'
            }
                      className={styles.map_link}
          >
            <span>{MAP_LINK}</span>
            <BiMap />
          </Link>
          <a className={styles.private} href="">
            it@pksk.su
          </a>
          <a className={styles.private} href="">
            +799999999
          </a>
          <span className={styles.private}>
            Севастополь, Севастопольская зона ЮБК, 20А
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default FooterEnd;
