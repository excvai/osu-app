import { AuthProvider } from 'contexts/authContext';
import { FC, useEffect, useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layer: FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(() => Boolean(token));
  }, []);

  return (
    <AuthProvider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <div className='layer'>
        <Header />
        {children}
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Layer;
