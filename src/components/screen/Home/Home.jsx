import CompanyDescription from './CompanyDescription.jsx';
import stylesLayout from '../../Layout/Layout.module.scss';
import Layout from '../../Layout/Layout.jsx';
import styles from './Home.module.scss';
import { AiFillGift } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AboutCard from '../../UI/AboutCard/AboutCard.jsx';
import cn from 'clsx';
import test from '../../../../public/test.json';
import Lottie from 'lottie-react';
import Field from '../../UI/Field/Field.jsx';
import Footer from '../../Layout/Fotter/Footer.jsx';

const Home = () => {
  const style = {
    height: 500,
  };

  return (
    <>
      <div style={{ height: '100vh' }}>
        <Layout bgVideo={'/back.mp4'} backLink="/">
          <div className={stylesLayout.heading}>
            <h1>Интернет без компромиссов</h1>
            <h2>Лучшие условия, цены, сервис</h2>
          </div>
        </Layout>
      </div>

      <div className="wrapper-inner-page">
        <div className={styles.about}>
          <Lottie animationData={test} style={style} autoPlay={true} />
          <CompanyDescription />
        </div>
      </div>
      <div
        style={{ paddingRight: '70px', paddingLeft: '70px', margin: '0 auto' }}
      >
        <div style={{ marginTop: '10%' }}>
          <AboutCard />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
