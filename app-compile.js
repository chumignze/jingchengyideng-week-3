'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _configCompile = require('./config/config-compile');

var _configCompile2 = _interopRequireDefault(_configCompile);

var _initControllerCompile = require('./controller/initController-compile');

var _initControllerCompile2 = _interopRequireDefault(_initControllerCompile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//实例化
var app = new _koa2.default();
//初始化，并建立路由
//引入包
_initControllerCompile2.default.init(app, _koaSimpleRouter2.default);

// app.use(ctx => {
// 	ctx.body = 'Hello Koa!';
// });
//配置页面模板
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
	root: _configCompile2.default.get('viewsDic'),
	autoescape: true,
	cache: 'memory',
	ext: 'html'
}));
//配置静态资源
app.use((0, _koaStatic2.default)(_configCompile2.default.get('staticDic')));
//监听端口
app.listen(_configCompile2.default.get('port'));

exports.default = app;
