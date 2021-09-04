const url = new URL('https://osu.ppy.sh/oauth/authorize');

const params = {
	client_id: 6010,
	redirect_uri: 'http://127.0.0.1:5500/',
	response_type: 'code',
	scope: 'public',
};
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

const loginLink = document.querySelector('#login a');
loginLink.href = url;

const code = new URLSearchParams(window.location.search).get('code');
console.log(code);

async function start() {
	if (code) {
		let token = null;

		await axios
			.post('http://localhost:3000/login', {
				code,
			})
			.then(res => {
				console.log(res.data);
				token = res.data.access_token;
				window.history.pushState({}, null, '/');
			})
			.catch(err => {
				window.location = '/';
				console.log(err);
			});
	}
}

start();
