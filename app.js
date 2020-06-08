//引用express框架
const express = require('express');
//引入path模块（处理路径）
const path = require('path');
//创建网站服务器
const app = express();
//导入art-template模块
const template = require('art-template');
//导入dateformat第三方模块
const dateFormat = require('dateformat');
//数据库连接
require('./model/connect');
require('./model/index-article');
require('./model/news-article');
require('./model/case-article');

//告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'views'));
//告诉express框架模板的默认后缀
app.set('view engine', 'art');
//当渲染后缀为art的模板时 所使用的模板引擎
app.engine('art', require('express-art-template'));
//向模板内部导入dateFormat变量 
template.defaults.imports.dateFormat = dateFormat;
//开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));

//引入路由对象
const index = require('./route/index');
const cases = require('./route/case');
const product = require('./route/product');
const news = require('./route/news');
const about = require('./route/about');

//匹配路由请求路径
app.use('/index', index);
app.use('/case', cases);
app.use('/product', product);
app.use('/news', news);
app.use('/about', about);

//监听端口
app.listen(80);
console.log('网站服务器已启动');