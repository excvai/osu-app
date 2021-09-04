import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <main className={styles.home}>
      <section className={styles.main}>
        <div className='container'>Home</div>
      </section>
    </main>
  );
};

export default Home;
