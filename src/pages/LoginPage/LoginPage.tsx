import { Form } from '../../components/Form/Form';
import { FormWrapper } from '../../components/FormWrapper/FormWrapper';

import styles from './LoginPage.module.sass';

export const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <FormWrapper
        title='Войти'
        linkText='Зарегистрироваться'
        textSpan='Нет аккаунта?'
        to='/register'
      >
        <Form title='Войти' type='login' />
      </FormWrapper>
    </div>
  );
};
