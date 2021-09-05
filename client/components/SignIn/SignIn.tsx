import axios from 'axios';
import { CLIENT_ID, OSU_API_URL } from 'constants/osu';
import { useRouter } from 'next/dist/client/router';
import { FC, useEffect } from 'react';
import Link from 'next/link';
import styles from './SignIn.module.scss';
import { SERVER_URL } from 'constants/server';
import Image from 'next/image';
import { useAuth } from 'contexts/authContext';

export interface Credentials {
  token_type: string;
  expires_in: 86400;
  access_token: string;
  refresh_token: string;
}

interface SignInProps {
  authorizeClass?: string;
  imageClass?: string;
  textClass?: string;
}

export const SignIn: FC<SignInProps> = ({
  authorizeClass,
  imageClass,
  textClass,
}) => {
  const router = useRouter();

  const { setIsAuthenticated } = useAuth();

  const authorizeUrl = new URL(OSU_API_URL + 'oauth/authorize');
  const params = {
    client_id: CLIENT_ID,
    redirect_uri: 'http://127.0.0.1:3000/',
    response_type: 'code',
    scope: 'public',
  };
  Object.keys(params).forEach((key) =>
    // Todo: delete ts-ignore
    // @ts-ignore
    authorizeUrl.searchParams.append(key, params[key])
  );

  const code = router.query.code as string | undefined;
  const error = router.query.error as string | undefined;
  useEffect(() => {
    if (!code && !error) return;

    if (code) {
      signIn(code);
      setIsAuthenticated!(true);
    } else {
      alert(error);
    }

    window.history.pushState({}, '', '/');
  }, [code, error]);

  const signIn = async (code: string) => {
    try {
      const response = await axios.post(SERVER_URL + 'api/auth/login', {
        code,
      });

      interface LoginData {
        meta: {
          success: boolean;
        };
        result: Credentials;
      }
      const loginData: LoginData = response.data;

      if (!loginData.meta.success) {
        throw new Error('The success of the result is false');
      }

      const credentials = loginData.result;
      localStorage.setItem('token', credentials.access_token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Link href={authorizeUrl}>
      <a className={authorizeClass}>
        <div className={textClass}>Login</div>
        <div className={imageClass}>
          <svg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'>
            <path d='m64 17.43a46.754 46.754 0 0 0 -27.4 84.638l.043.03.008.006a46.775 46.775 0 0 0 54.692 0l.046-.032a46.754 46.754 0 0 0 -27.389-84.642zm-24.62 82.305v-3.025a22.766 22.766 0 0 1 22.77-22.78h1.735.115s.076 0 .115 0h1.735a22.766 22.766 0 0 1 22.77 22.78v3.025a43.233 43.233 0 0 1 -49.24 0zm24.735-29.3h-.23a15.518 15.518 0 0 1 -15.454-15.5c0-.4.017-.806.051-1.214a15.571 15.571 0 0 1 31.037.012c.033.4.05.8.05 1.2a15.518 15.518 0 0 1 -15.454 15.5zm28.005 26.586v-.311a26.261 26.261 0 0 0 -18.82-25.199 18.966 18.966 0 0 0 9.766-16.58c0-.5-.021-1-.062-1.484a19.07 19.07 0 0 0 -38.013-.012c-.042.491-.063.994-.063 1.5a18.959 18.959 0 0 0 9.772 16.576 26.26 26.26 0 0 0 -18.82 25.199v.311a43.25 43.25 0 1 1 56.24 0z' />
          </svg>
        </div>
      </a>
    </Link>
  );
};
