//引入express框架
const express = require('express');
//创建首页路由
const news = express.Router();
//导入分页模块
const page = require('mongoose-sex-page');
let { Article } = require('../model/news-article');

news.get('/', async(req, res) => {
    req.app.locals.currentLink = 'news';
    var pages = '';
    if (req.query.pageNum == undefined) {
        pages = 1;
    } else {
        pages = req.query.pageNum;
    };
    var curr = pages;

    let count = await Article.estimatedDocumentCount({});
    let result = await page(Article).find().page(pages).size(16).display(4).exec();

    res.render('news', {
        result: result,
        count: count,
        curr: curr
    });
});

// 将路由对象作为模块成员导出
module.exports = news;