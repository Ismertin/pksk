import React from 'react';
import Header from '../../../../Layout/Header/Header';
import ServiceDetail from '../ServiceDetail';
import Footer from '../../../../Layout/Fotter/Footer';

const Iptv = () => {
  return (
    <>
      <Header />
      <ServiceDetail search={'iptv'} />
      <Footer />
    </>
  );
};

export default Iptv;
