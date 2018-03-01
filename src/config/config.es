import path from 'path';

const configMap = new Map();

configMap.set('port', 3000);
configMap.set('staticDic', path.join(__dirname, '..'));
configMap.set('viewsDic', path.join(__dirname, '..', 'views'));

export default configMap;