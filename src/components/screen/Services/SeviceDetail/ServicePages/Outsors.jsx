import React from 'react';
import Header from '../../../../Layout/Header/Header';
import ServiceDetail from '../ServiceDetail';
import Footer from '../../../../Layout/Fotter/Footer';

const Outsors = () => {
  return (
    <>
      <Header />
      <ServiceDetail search={'outsors'} />
      <Footer />
    </>
  );
};

export default Outsors;
