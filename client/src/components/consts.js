const PORT = 80;
const PLAYING = false;
const BACK_END_URL = PLAYING
	? "https://4ac2ebd57efe.ngrok.io"
	: `http://localhost:${PORT}`;

console.log(`Using ${BACK_END_URL}`);
const POST_HEADER = {
	Accept: "application/json, text/plain, */*",
	"Content-Type": "application/json",
};

const AUTH_REQUISITES = {
	email: { has: ["@", "."], len: 10 },
	username: { len: 5 },
	password: { len: 8 },
};

module.exports = { BACK_END_URL, POST_HEADER, AUTH_REQUISITES };
