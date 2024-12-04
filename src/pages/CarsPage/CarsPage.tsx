import { Container } from '../../components/Container/Container';
import { Outlet } from 'react-router-dom';

import styles from './CarsPage.module.sass';

const CarsPage = () => {
  return (
    <div className={styles.carsPage}>
      <Container>
          <div className={styles.carsPageWrapper}>
            <Outlet />
          </div>
      </Container>
    </div>
  );
};
export default CarsPage;
