import requestPromise from 'request-promise';

class indexModel{
	constructor(ctx){
		this.ctx = ctx;
	}
	updateNum(){
		const options = {
			uri: 'http://localhost/DBConn.php',
			method: 'GET',
		}
		return new Promise((resolve, reject) => {
			requestPromise(options).then(function(result){
				console.log(result);
				const info = JSON.parse(result);
				if(info){
					resolve({
						data: info.result
					});
				}else{
					reject({});
				}
			})
		});
	}
}

export default indexModel;