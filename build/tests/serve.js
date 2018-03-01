'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _appCompile = require('../app-compile');

var _appCompile2 = _interopRequireDefault(_appCompile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('接口测试', function () {
	it('大拇指点赞+1测试', function (done) {
		(0, _supertest2.default)(_appCompile2.default.listen()).get('/index/update').expect(200).end(function (err, res) {
			if (res.data == 1) {
				return done(err);
			}
			done();
		});
	});
	it('大拇指点赞首页	', function (done) {
		(0, _supertest2.default)(_appCompile2.default.listen()).get('/index/index').expect(200).end(function (err, res) {
			if (res.data == 1) {
				return done(err);
			}
			done();
		});
	});
});