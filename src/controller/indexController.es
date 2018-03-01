import indexModel from '../models/indexModel';

const controllerIndex = {
	index() {
		return async(ctx, next) => {
			ctx.body = await ctx.render('index.html', {
				title: '大拇指点赞功能'
			});
		}
	},
	update(){
		return async(ctx, next) => {
			const indexM = new indexModel();
			ctx.body = await indexM.updateNum();
		}
	}
}
export default controllerIndex;