//引入mongoose模块
const mongoose = require('mongoose');

//创建news-artical文章集合规则
const news_articleSchame = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 30,
        minlength: 4
    },
    reading: {
        type: Number
    },
    publishDate: {
        type: String
    },
    cover: {
        type: String
    },
    content: {
        type: String
    }
});

//根据规则创建集合
const Article = mongoose.model('News-article', news_articleSchame);
// Article.create({
//         title: '一直在你身边对你好，你却没有发现。',
//         reading: 120,
//         publishDate: '2020 - 03 - 02',
//         cover: '/static/images/news_img1.jpg',
//         content: '找老婆要找爱发脾气的女人。永远不会发脾气的女人就如同一杯白开水，解渴，却无味。而发脾气的女人正如烈酒般，刺激而令人无法忘怀。'
//     }).then(() => console.log('用户创建成功'))
//     .catch(() => console.log('用户创建失败'));

//将集合对象作为模块导出
module.exports = {
    Article
}