import helmet from "helmet";
import path from "path";

export const configuredHelmet = () =>
	helmet({
		contentSecurityPolicy: {
			directives: {
				defaultSrc: ["'self'"],
				objectSrc: ["'none'"],
				scriptSrc: ["'self'", "unpkg.com", "polyfill.io", "http://maxcdn.bootstrapcdn.com/", "https://code.jquery.com/jquery-3.2.1.slim.min.js", "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" ],
				styleSrc: ["'self'", "https: 'unsafe-inline'"],
				fontSrc: [
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-brands-400.woff2",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-brands-400.woff",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-brands-400.ttf",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-regular-400.woff2",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-regular-400.woff",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-regular-400.ttf",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-solid-900.woff2",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-solid-900.woff",
					"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-solid-900.woff"
				],
				upgradeInsecureRequests: [],
			},
		},
	});

export const httpsOnly = () => (req, res, next) => {
	if (!req.secure) {
		return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
	}
	next();
};

export const logErrors = () => (err, _, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	console.error(err);
	res.sendStatus(500);
};

export const pushStateRouting = (apiRoot, staticDir) => (req, res, next) => {
	if (req.method === "GET" && !req.url.startsWith(apiRoot)) {
		return res.sendFile(path.join(staticDir, "index.html"));
	}
	next();
};
