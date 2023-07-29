import styles from './Header.module.scss';
import cn from 'clsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger.jsx';
import { FiActivity } from 'react-icons/fi';

const Header = ({ backLink = '/' }) => {
  const { pathName } = useLocation();
  const nav = useNavigate();
  return (
    <>
      <div className={styles.wrapper}>
        <Link to={backLink}>
          <img src="/images/logo.png" alt="" className={styles.logo} />
        </Link>
        <Hamburger />
      </div>
    </>
  );
};

export default Header;
