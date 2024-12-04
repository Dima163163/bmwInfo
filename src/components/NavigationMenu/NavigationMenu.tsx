import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './NavigationMenu.module.sass';

interface NavigationMenuProps {
  type: string;
  openCloseMobileMenu?: () => void
}

export const NavigationMenu = ({type='nav', openCloseMobileMenu}: NavigationMenuProps) => {
  return (
    <nav className={classNames({
      [styles.navMenu]: type === 'nav',
      [styles.navMenuMobile]: type === 'mobile'
    })}>
      <ul className={classNames(styles.navList, {
        [styles.navListMobile]: type === 'mobile'
      })}>
        <li className={styles.navItem}>
          <Link className={classNames(styles.navLink)} to='/cars/catalog' onClick={() => type === 'mobile' && openCloseMobileMenu &&openCloseMobileMenu()}>
            Модельный ряд
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={classNames(styles.navLink)} to='/autosport' onClick={() => type === 'mobile' && openCloseMobileMenu &&openCloseMobileMenu()}>
            Автоспорт
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={classNames(styles.navLink)} to='/contacts' onClick={() => type === 'mobile' && openCloseMobileMenu &&openCloseMobileMenu()}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};
