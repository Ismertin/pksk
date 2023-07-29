import React from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import styles from './Modal.module.scss';

const MotionDialog = motion(Dialog);

const ModalExample = ({ isOpen, setIsOpen }) => {
  return (
    <MotionDialog
      open={isOpen}
      className={styles.modal}
      onClose={() => setIsOpen(false)}
      as={motion.div}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className={styles.content}>
        <Dialog.Title className={styles.title}>
          Выбран тариф "Стандарт"
        </Dialog.Title>
        <Dialog.Description className={styles.description}>
          Выбранный тариф подходит для:
          <ul>
            <li>Просмотр контента в "HD"</li>
            <li>Комфортный интернет сёрфинг</li>
            <li>Общение по видеосвязи</li>
            <li>Соц.сети</li>
          </ul>
        </Dialog.Description>
        <div className={styles.contacts}>
          <span>Оставьте заявку, мы вам перезвоним.</span>
          <form>
            <input type="text" placeholder="Ф.И.О" />
            <input type="text" placeholder="Мобильный телефон" />
            <input type="text" placeholder="Адрес" />
          </form>
        </div>
        <div className={styles.button}>
          <button onClick={() => setIsOpen(false)}>Оставить заявку</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src="/public/images/modal.jpg" />
      </div>
    </MotionDialog>
  );
  ``;
};

export default ModalExample;
