import css from '../style_sheets/index.css';

class PraiseButton {
	constructor() {
	}
	thumbClickAction() {
		axios.get('/index/update')
			.then(function(response){
				console.log(response);
			})
			.catch(function(error){
				console.log(error);
			});
	}
}
export default PraiseButton;