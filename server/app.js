var express = require('express');
var nunjucks = require('nunjucks')
var path = require('path');
var app = express();
var router = express.Router();
var proxy = require('http-proxy-middleware');
var compression = require('compression')

app.use(compression())

// 根据请求转发
app.use('/api*', proxy({
	target: 'https://stargate.cosmos.network',
	changeOrigin: true,
	pathRewrite: {
		['^/api']: ''
	},
	router: function(req) {
		return req.headers.server;
	}
}))

nunjucks.configure('h5', {
  autoescape: true,
  express: app
});

router.get('/', function (req, res, next) {
  res.render('index.html');
});


app.use('/', router);

app.use(express.static(path.join(__dirname, 'h5'), {
	maxAge: '1y',
	expires: '1y',
	Etag: false,
	lastModified: false
}));

var server = app.listen(80, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('app listening at http://%s:%s', host, port);
});
