var webpackDev = require('./configs/webpack.dev');
var webpackProd = require('./configs/webpack.prod');

switch(process.env.NODE_ENV){
	case 'dev': 
		module.exports = webpackDev;
		break;
	case 'prod':
		module.exports = webpackProd;
		break;
	default:
		module.exports = webpackDev;
}