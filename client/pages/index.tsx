import { HomeContent } from 'components/Home/HomeContent/HomeContent';
import { useAuth } from 'contexts/authContext';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const Home: NextPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <main className={styles.home}>
      <section className={styles.main}>
        <div className='container'>
          {isAuthenticated ? <HomeContent /> : <div>Authenticate first</div>}
        </div>
      </section>
    </main>
  );
};

export default Home;
