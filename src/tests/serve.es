import superTest from 'supertest';
import app from '../app-compile';

describe('接口测试', function(){
	it('大拇指点赞+1测试', function(done){
		superTest(app.listen())
		.get('/index/update')
		.expect(200)
		.end(function(err, res){
			if(res.data == 1){
				return done(err);
			}
			done();
		})
	});
	it('大拇指点赞首页	', function(done){
		superTest(app.listen())
		.get('/index/index')
		.expect(200)
		.end(function(err, res){
			if(res.data == 1){
				return done(err);
			}
			done();
		})
	})
});