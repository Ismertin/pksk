import React from 'react';
import { useClickMenu } from '../../../hooks/UseClickMenu.js';
import styles from './Hamburger.module.scss';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Menu from './Menu.jsx';
import { FiActivity } from 'react-icons/fi';

const Hamburger = () => {
  const { isShow, setIsShow, ref } = useClickMenu(false);

  const handleMouseEnter = () => {
    if (isShow) {
      return styles.active;
    } else {
      return '';
    }
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? (
          <HiX fontSize={34} className={handleMouseEnter()} color={'#fff'} />
        ) : (
          <HiOutlineMenuAlt3
            fontSize={34}
            className={handleMouseEnter()}
            color={'#000'}
          />
        )}
      </button>
      <Menu isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default Hamburger;
