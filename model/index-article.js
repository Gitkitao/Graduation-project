//引入mongoose模块
const mongoose = require('mongoose');

//创建news-artical文章集合规则
const index_articleSchame = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 30,
        minlength: 4
    },
    cover: {
        type: String
    },
    content: {
        type: String
    }
});

//根据规则创建集合
const Article = mongoose.model('Index-article', index_articleSchame);
// Article.create({
//         title: '数据可视化',
//         cover: '/static/images/home_img1.jpg',
//         content: '数据可视化，是关于数据视觉表现形式的科学技术研究。其中，这种数据的视觉表现形式被定义为，一种以某种概要形式抽提出来的信息，包括相应信息单位的各种属性和变量。'
//     }).then(() => console.log('用户创建成功'))
//     .catch(() => console.log('用户创建失败'));

//将集合对象作为模块导出
module.exports = {
    Article
}