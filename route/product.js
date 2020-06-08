//引入express框架
const express = require('express');
//创建首页路由
const product = express.Router();

product.get('/', (req, res) => {
    req.app.locals.currentLink = 'product';
    res.render('product');
});

// 将路由对象作为模块成员导出
module.exports = product;