import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || '5050',
  osuApiUrl: 'https://osu.ppy.sh/',
  osuClientId: 6010,
  osuClientSecret: process.env.CLIENT_SECRET,
  osuRedirectUri: 'http://127.0.0.1:3000/',
};
