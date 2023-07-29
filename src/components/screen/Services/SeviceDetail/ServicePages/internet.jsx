import React from 'react';
import Header from '../../../../Layout/Header/Header';
import ServiceDetail from '../ServiceDetail';
import Footer from '../../../../Layout/Fotter/Footer';
import CardList from './Tarif/CardList';

const internet = () => {
  return (
    <>
      <Header />
      <ServiceDetail search={'internet'} />
      <CardList />
      <Footer />
    </>
  );
};

export default internet;
