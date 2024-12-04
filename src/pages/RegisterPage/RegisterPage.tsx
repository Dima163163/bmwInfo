import { Form } from '../../components/Form/Form';
import { FormWrapper } from '../../components/FormWrapper/FormWrapper';

import styles from './RegisterPage.module.sass';

export const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <FormWrapper
        title='Зарегистрироваться'
        textSpan='У вас есть аккаунт?'
        linkText='Войти'
        to='/login'
      >
        <Form title='Зарегистрироваться' type='registration' />
      </FormWrapper>
    </div>
  );
};
