//引入express框架
const express = require('express');
//创建首页路由
const detail = express.Router();

detail.get('/', (req, res) => {
    req.app.locals.currentLink = 'case';
    res.render('detail');
});

// 将路由对象作为模块成员导出
module.exports = detail;

// module.exports = (req, res) => {
//     res.render('detail');
// }