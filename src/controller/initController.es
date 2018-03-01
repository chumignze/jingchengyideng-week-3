//引入
import controllerIndex from './indexController';
//设置路由
const controllerInit = {
	init(app, router) {
		app.use(router(_ => {
			_.get('/index/index', controllerIndex.index());
			_.get('/index/update', controllerIndex.update());
		}));
	}
}
//导出
export default controllerInit;