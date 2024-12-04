import styles from './Container.module.sass';

interface ConatainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ConatainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
