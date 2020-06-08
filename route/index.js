//引入express框架
const express = require('express');
//创建首页路由
const index = express.Router();
//导入分页模块
const page = require('mongoose-sex-page');
let { Article } = require('../model/index-article');

index.get('/', async(req, res) => {
    let result = await page(Article).find().exec();
    res.render('index', {
        result: result
    });
});

// 将路由对象作为模块成员导出
module.exports = index;