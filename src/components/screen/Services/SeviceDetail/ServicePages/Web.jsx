import React from 'react';
import Header from '../../../../Layout/Header/Header';
import ServiceDetail from '../ServiceDetail';
import Footer from '../../../../Layout/Fotter/Footer';

const Web = () => {
  return (
    <>
      <Header />
      <ServiceDetail search={'web'} />
      <Footer />
    </>
  );
};

export default Web;
