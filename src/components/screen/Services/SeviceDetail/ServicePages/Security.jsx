import React, { useState } from 'react';
import ModalExample from './../../../../UI/Modal/Modal';

const Security = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleModal}>Открыть</button>
      {isOpen && <ModalExample isOpen={isOpen} setIsOpen={setOpen} />}
    </>
  );
};

export default Security;
