import React from 'react';
import Field from '../../UI/Field/Field';
import styles from './Footer.module.scss';
import Button from '../../UI/Button/Button';
import { useForm } from 'react-hook-form';

const Contacts = () => {
  const { error, control } = useForm();

  return (
    <>
      <form
        style={{
          alignItems: 'center',
          justifyContent: 'end',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className={styles.inputRow}>
          <Field
            name="first-name"
            error={error}
            options={{ required: 'Укажите имя латинскими буквами' }}
            type="text"
            placeholder="Ф.И.О"
            register={control.register}
          />
          <Field
            name="last-name"
            error={error}
            options={{ required: 'Укажите фамилию латинскими буквами' }}
            type="text"
            placeholder="Email*"
            register={control.register}
          />
          <Field
            name="Mobile"
            error={error}
            options={{ valueIsNumber: true, validate: (value) => value > 0 }}
            type="text"
            placeholder="Мобильный телефон"
            register={control.register}
          />
        </div>
        <div style={{ width: '100%' }}>
          <Field
            name="Address"
            error={error}
            options={{ required: 'Укажите адрес латинскими буквами' }}
            type="text"
            placeholder="Адрес"
            register={control.register}
          />
        </div>
        <div style={{ marginTop: '50px' }}>
          <Button name="Отправить" />
        </div>
      </form>
    </>
  );
};

export default Contacts;
