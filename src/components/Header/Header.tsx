import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import { logOut, selectUser } from '../../redux/user/userSlice';
import { Container } from '../Container/Container';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';

import styles from './Header.module.sass';
import classNames from 'classnames';
import { useState } from 'react';

export const Header = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState(false)

  const logOutHandle = () => {
    dispatch(logOut());
  };

  const openCloseMobileMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <Link className={styles.headerLink} to='/'>
            <img className={styles.headerLogo} src='/bmw.svg' alt='Logo BMW' />
            BMW Info
          </Link>
          <NavigationMenu type='nav' />
          {user.name && (
            <button className={styles.btn} onClick={logOutHandle}>
              <img
                className={styles.avatar}
                src='/user.svg'
                alt='avatar user'
              />
              <p className={styles.btnText}>
                {user?.name[0].toUpperCase() +
                  user?.name.slice(1).toLowerCase()}
              </p>
            </button>
          )}

          {!user.name && (
            <Link className={styles.btn} to='/login'>
              Войти
            </Link>
          )}
          <div className={styles.burgerBtn} onClick={() => setIsActive(!isActive)}>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </div>
        </div>
      </Container>

        <div className={classNames(styles.mobileMenu, {
          [styles.mobileMenuActive]: isActive
        })}>
          <div className={styles.burgerBtnClose} onClick={() => setIsActive(!isActive)}>
            <div className={styles.burgerLineClose}></div>
            <div className={styles.burgerLineClose}></div>
          </div>
          <NavigationMenu type='mobile' openCloseMobileMenu={openCloseMobileMenu} />
          {!user.name && (<Link
            className={styles.btnMobile}
            to='/login'
            onClick={() => setIsActive(!isActive)}
          >
            Войти
          </Link>)}
          {user.name && (
            <button className={classNames(styles.btn, styles.btnMobile)} onClick={() => {
              setIsActive(!isActive)
              logOutHandle()
            }}>
              <img
                className={styles.avatar}
                src='/user.svg'
                alt='avatar user'
              />
              <p className={styles.btnText}>
                {user?.name[0].toUpperCase() +
                  user?.name.slice(1).toLowerCase()}
              </p>
            </button>
          )}
        </div>
    </div>
  );
};
