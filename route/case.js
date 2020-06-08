//引入express框架
const express = require('express');
//创建首页路由
const cases = express.Router();
//引入 路由详情
const detail = require('./admin/detail');
//导入分页模块
const page = require('mongoose-sex-page');
let { Article } = require('../model/case-article');

// 匹配路由请求路径
cases.use('/detail', detail);

cases.get('/', async(req, res) => {
    req.app.locals.currentLink = 'case';
    var pages = '';
    if (req.query.pageNum == undefined) {
        pages = 1;
    } else {
        pages = req.query.pageNum;
    };
    var curr = pages;
    let count = await Article.estimatedDocumentCount({});

    let result = await page(Article).find().page(pages).size(9).display(4).exec();

    res.render('case', {
        result: result,
        count: count,
        curr: curr
    });
});
// 将路由对象作为模块成员导出
module.exports = cases;