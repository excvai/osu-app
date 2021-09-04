import { FC } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layer: FC = ({ children }) => {
  return (
    <div className='layer'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layer;
