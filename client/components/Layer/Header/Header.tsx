import { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className='container'>Header</div>
    </header>
  );
};

export default Header;
