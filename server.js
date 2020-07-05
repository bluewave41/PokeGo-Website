// server.js
const { createServer } = require('https');
const http = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const fs = require('fs');

if(dev) {
	app.prepare().then(() => {
		http.createServer((req, res) => {
			// Be sure to pass `true` as the second argument to `url.parse`.
			// This tells it to parse the query portion of the URL.
			const parsedUrl = parse(req.url, true);
			const { pathname, query } = parsedUrl;
			console.log(parsedUrl);
			handle(req, res, parsedUrl)
		}).listen(process.env.port, (err) => {
		if (err) throw err
			console.log(`> Ready on http://localhost:${process.env.port}`)
		})
	})
}
else {
	const httpsOptions = {
		key: fs.readFileSync(process.env.key),
		cert: fs.readFileSync(process.env.cert)
	};
	
	app.prepare().then(() => {
		createServer(httpsOptions, (req, res) => {
			// Be sure to pass `true` as the second argument to `url.parse`.
			// This tells it to parse the query portion of the URL.
			const parsedUrl = parse(req.url, true);
			const { pathname, query } = parsedUrl;
			handle(req, res, parsedUrl)
		}).listen(process.env.port, (err) => {
		if (err) throw err
			console.log(`> Ready on http://localhost:${process.env.port}`)
		})
	});
	
	const httpServer = http.createServer((req, res) => {
		res.writeHead(301, {Location: 'https://' + req.headers.host + req.url});
		res.end();
	});
	
	httpServer.listenn(80);
}