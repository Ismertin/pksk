import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Price from './../../UI/price/Price';
const CompanyDescription = () => {
  const description =
    'Добро пожаловать в мир интернета с ПКСК! Мы предлагаем непревзойденную скорость, надежность и превосходный сервис. У нас есть разнообразные пакеты интернета и IPTV, чтобы удовлетворить потребности каждого клиента. Мы гордимся своим качеством обслуживания и надежностью, подкрепленными инновационными технологиями.Мы стремимся обеспечить вам лучший интернет-опыт. Подключайтесь к ПКСК сегодня и откройте для себя новый уровень интернет-соединения.';
  return (
    <>
      <p>
        {description}
        <br />
        <Link to="/about" className={styles.link}>
          О нас
        </Link>
      </p>
    </>
  );
};

export default CompanyDescription;
