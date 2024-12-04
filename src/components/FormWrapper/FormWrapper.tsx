import { Link } from 'react-router-dom';
import styles from './FormWrapper.module.sass';

interface FormWrapperProps {
  title: string;
  linkText: string;
  textSpan: string;
  to: string;
  children: React.ReactNode;
}

export const FormWrapper = ({
  title,
  linkText,
  textSpan = '',
  to,
  children
}: FormWrapperProps) => {
  return (
    <div className={styles.formWrapper}>
      <h3 className={styles.formTitle}>{title}</h3>
      {children}
      <Link className={styles.formLink} to={to}>
        <span className={styles.loginLinkSpan}>{textSpan} </span>
        {linkText}
      </Link>
    </div>
  );
};
