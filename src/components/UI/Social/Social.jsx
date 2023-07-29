import { socialData } from './SocialData.js';
import { Link } from 'react-router-dom';
import styles from './Social.module.scss';

const Social = () => {
  return (
    <div>
      {socialData.map((item, index) => (
        <Link key={`social_${index}`} to={item.link} className={styles.social}>
          <item.icon />
        </Link>
      ))}
    </div>
  );
};

export default Social;
