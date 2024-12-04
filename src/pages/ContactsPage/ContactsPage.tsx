import { Container } from '../../components/Container/Container';

import styles from './ContactsPage.module.sass';

export const ContactsPage = () => {
  return <div>
    <Container>
      <div className={styles.contactsPageWrapper}>
        <h1 className={styles.contactsPageTitle}>Контакты</h1>
        <p className={styles.contactsPageNumber}>Номер телефона:{' '}
          <a className={styles.contactsPageNumberLink} href="tel:89170114599">8-917-011-45-99</a></p>
        
        <p className={styles.contactsPageDev}>Разработчик: Дмитрий Хлопов</p>
      </div>
    </Container>
  </div>;
};
