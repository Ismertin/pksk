import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Layout.module.scss';
import Header from './Header/Header.jsx';

const Layout = ({ bgVideo, children, heading = ' ', backLink = ' ' }) => {
  const nav = useNavigate();

  useEffect(() => {
    const video = document.getElementById('bgVideo');
    if (video) {
      video.play();
    }
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.videoContainer}>
        <video
          id="bgVideo"
          className={styles.background}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div style={{ zIndex: '1' }}>
          <Header backLink={backLink} />
          {heading && <h1 className={styles.heading}>{heading}</h1>}
          {children && <div>{children}</div>}
        </div>
      </div>
      {/* Добавьте здесь контент, который будет идти под видео */}
    </section>
  );
};

export default Layout;
