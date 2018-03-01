'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configMap = new Map();

configMap.set('port', 3000);
configMap.set('staticDic', _path2.default.join(__dirname, '..'));
configMap.set('viewsDic', _path2.default.join(__dirname, '..', 'views'));

exports.default = configMap;