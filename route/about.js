//引入express框架
const express = require('express');
//创建关于路由
const about = express.Router();

about.get('/', (req, res) => {
    req.app.locals.currentLink = 'about';
    res.render('about')
});

// 将路由对象作为模块成员导出
module.exports = about;