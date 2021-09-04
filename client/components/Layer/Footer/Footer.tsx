import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>Footer</div>
    </footer>
  );
};

export default Footer;
