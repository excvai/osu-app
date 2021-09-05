import { FC } from 'react';
import styles from './HomeContent.module.scss';
import Image from 'next/image';

export const HomeContent: FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>*Name* - Profile</div>
      <div className={styles.ava}>
        <Image
          src={'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'}
          objectFit='contain'
          layout='fill'
          alt='avatar'
        />
      </div>
    </div>
  );
};
