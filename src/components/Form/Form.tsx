import classnames from 'classnames';

import styles from './Form.module.sass';
import { FormEvent, useEffect } from 'react';
import { submitRegistrationForm } from '../../redux/user/submitRegistrationForm';
import { submitLoginForm } from '../../redux/user/submitLoginForm';
import { clearError } from '../../redux/user/userSlice';
import { useForm } from './useForm';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

interface FormProps {
  title: string;
  type: string;
}

export const Form = ({ type, title }: FormProps) => {
  const dispatch = useAppDispatch();
  const { error, user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const {
    name,
    email,
    password,
    emailDirty,
    emailError,
    passwordDirty,
    passwordError,
    nameDirty,
    nameError,
    blurHandler,
    emailHandler,
    passwordHandler,
    nameHandler,
    formValid
  } = useForm({ type });

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, []);

  useEffect(() => {
    if (user.name) [navigate('/')];
  }, [user]);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (type === 'registration') {
      dispatch(
        submitRegistrationForm({
          name,
          email,
          password
        })
      );
    } else {
      dispatch(
        submitLoginForm({
          email,
          password
        })
      );
    }
  };

  return (
    <form className={styles.loginForm}>
      {type === 'registration' ? (
        <label className={styles.formLabel}>
          Имя
          {type === 'registration' && nameDirty && nameError && (
            <div className={styles.errorMessage}>{nameError}</div>
          )}
          <input
            className={styles.formInput}
            type='name'
            name='name'
            placeholder='Введите имя'
            value={name}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => nameHandler(e)}
          />
        </label>
      ) : null}
      <label className={classnames(styles.formLabel, styles.emailLabel)}>
        Email
        {type === 'registration' && emailDirty && emailError && (
          <div className={styles.errorMessage}>{emailError}</div>
        )}
        <input
          className={styles.formInput}
          type='email'
          name='email'
          placeholder='Введите email'
          value={email}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => emailHandler(e)}
        />
      </label>
      <label className={styles.formLabel}>
        Пароль
        {type === 'registration' && passwordDirty && passwordError && (
          <div className={styles.errorMessage}>{passwordError}</div>
        )}
        <input
          className={styles.formInput}
          type='password'
          name='password'
          autoComplete='off'
          placeholder='Введите пароль'
          value={password}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => passwordHandler(e)}
        />
      </label>
      <button
        className={styles.formBtn}
        onClick={submitForm}
        disabled={!formValid}
      >
        {title}
      </button>
      {error && <p className={styles.formError}>{error}</p>}
    </form>
  );
};
