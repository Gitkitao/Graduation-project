//引入mongoose模块
const mongoose = require('mongoose');

//创建news-artical文章集合规则
const case_articleSchame = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 10,
        minlength: 2
    },
    cover: {
        type: String
    },
    content: {
        type: String
    }
});

//根据规则创建集合
const Article = mongoose.model('Case-article', case_articleSchame);
// Article2.create({
//         title: '名牌工厂店',
//         cover: '/static/images/case1.jpg',
//         content: '一家工厂企业的商品展示网站，主要以卖高端服饰为主。主要以卖高端服饰为主。主要以卖高端服饰为主。'
//     }).then(() => console.log('用户创建成功'))
//     .catch(() => console.log('用户创建失败'));

//将集合对象作为模块导出
module.exports = {
    Article
}