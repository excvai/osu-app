import cors from 'cors';
import express from 'express';
import { config } from './config/default';
import { authRouter } from './routes/auth.route';

const app = express();

const PORT = config.port;

app.use(
  cors({
    origin: 'http://127.0.0.1:3000',
  })
);
app.use(express.json());

app.use('/api/auth', authRouter);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server started at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log('Start Error:', err);
  }
};

start();
