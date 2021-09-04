import cors from 'cors';
import express from 'express';
import { config } from './config/default';

const app = express();

const PORT = config.port;

app.use(cors());

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
