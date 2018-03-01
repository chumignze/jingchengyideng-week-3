//引入包
import Koa from 'koa';
import KoaRouter from 'koa-simple-router';
import KoaSwig from 'koa-swig';
import co from 'co';
import KoaStatic from 'koa-static';
import config from './config/config';
import controllerInit from './controller/initController';
//实例化
const app = new Koa();
//初始化，并建立路由
controllerInit.init(app, KoaRouter);

// app.use(ctx => {
// 	ctx.body = 'Hello Koa!';
// });
//配置页面模板
app.context.render = co.wrap(KoaSwig({
	root: config.get('viewsDic'),
	autoescape: true,
	cache: 'memory',
	ext: 'html'
}));
//配置静态资源
app.use(KoaStatic(config.get('staticDic')));
//监听端口
app.listen(config.get('port'));

export default app;