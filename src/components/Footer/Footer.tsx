import { Link } from 'react-router-dom';
import styles from './Footer.module.sass';
import { Container } from '../Container/Container';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <Link className={styles.footerLink} to='/'>
            <img className={styles.footerLogo} src='/bmw.svg' alt='' />
            BMW Info
          </Link>
          <div>
            <p className={styles.footerDev}>Разработчик: Дмитрий Хлопов</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
