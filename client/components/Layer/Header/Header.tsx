import { SignIn } from 'components/SignIn/SignIn';
import { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerWrapper} container`}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <SignIn
                authorizeClass={styles.authorize}
                imageClass={styles.authorizeImg}
                textClass={styles.authorizeText}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
