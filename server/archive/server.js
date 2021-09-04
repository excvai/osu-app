const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
	const code = req.body.code;

	fetch('https://osu.ppy.sh/oauth/token', {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			grant_type: 'authorization_code',
			client_id: 6010,
			client_secret: 'rqwhIzcPoKY2BsRbl7J8X72761OV1i0oFlwRes2e',
			redirect_uri: 'http://127.0.0.1:5500/',
			code,
		}),
	})
		.then(x => x.json())
		.then(data => {
			// console.log('data:', data);

			const token = data.access_token;
			requestTo('https://osu.ppy.sh/api/v2/me/osu', token);

			res.json(data);
		})
		.catch(err => {
			console.log(err);
			res.status(400).json({ message: 'Error:' + err });
		});
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});

async function requestTo(apiUrl, token) {
	const url = new URL(apiUrl);

	let headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	};

	fetch(url, {
		method: 'GET',
		headers: headers,
	})
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(err => {
			console.log(err);
		});
}
