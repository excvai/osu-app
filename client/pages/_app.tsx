import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import Layer from 'components/Layer/Layer';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className='wrapper'>
      <Layer>
        <Component {...pageProps} />
      </Layer>
    </div>
  );
};

export default MyApp;
