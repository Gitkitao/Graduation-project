layui.define(['jquery', 'element', 'carousel', 'laypage', 'flow'], function(exports) {
    var $ = layui.jquery,
        element = layui.element,
        carousel = layui.carousel,
        laypage = layui.laypage,
        flow = layui.flow;


    // 流加载
    layui.use('flow', function() {
        flow.load({
            elem: '#main-ser', //指定列表容器
            isAuto: false,
            isLazyimg: true,
            done: function(page, next) { //到达临界点（默认滚动触发），触发下一页
                setTimeout(function() {
                    var divs = [];
                    for (var i = 0; i < 4; i++) {
                        divs.push('<div class="layui-col-lg6"><div class="content"><div class="content-left"><img lay-src="../res/static/images/home_img1.jpg?v=' + ((page - 1) * 6 + i + 1) + '"><div class="content-right"><p class="label">数据可视化</p><span></span><p>数据可视化，是关于数据视觉表现形式的科学技术研究。其中，这种数据的视觉表现形式被定义为，一种以某种概要形式抽提出来的信息，包括相应信息单位的各种属性和变量。</p></div></div></div></div></div>')
                    }
                    next(divs.join(''), page < 4); //假设总页数为 4
                }, 500);
            }
        });
    });
    //轮播渲染
    carousel.render({
        elem: '#banner',
        width: '100%',
        height: '898px',
        arrow: 'always'
    });

    //滚动监听
    $(window).scroll(function() {
        var scr = $(document).scrollTop();
        scr > 0 ? $(".nav").addClass('scroll') : $(".nav").removeClass('scroll');
    });

    //轮播文字
    $(function() {
        $('.banner').children('.title').addClass('active');
    })

    //导航切换
    // var btn = $('.nav').find('.nav-list').children('button'),
    //     spa = btn.children('span'),
    //     ul = $('.nav').find('.nav-list').children('.layui-nav');
    // btn.on('click', function() {
    //     if (!$(spa[0]).hasClass('spa1')) {
    //         spa[0].className = 'spa1';
    //         spa[1].style.display = 'none';
    //         spa[2].className = 'spa3';
    //         $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
    //     } else {
    //         spa[0].className = '';
    //         spa[1].style.display = 'block';
    //         spa[2].className = '';
    //         $('.nav')[0].style.height = 80 + 'px';
    //     }
    // });

    //关于内容
    $('.main-about').find('.aboutab').children('li').each(function(index) {
        $(this).on('click', function() {
            $(this).addClass('layui-this').siblings().removeClass('layui-this');
            $('.aboutab').siblings().fadeOut("fast");
            $('.aboutab').siblings().eq(index).fadeIn("");
        });
    });

    //动态分页
    laypage.render({
        elem: 'newsPage',
        count: 50,
        theme: '#2db5a3',
        layout: ['prev', 'page', 'next']
    });

    //案例分页
    laypage.render({
        elem: 'casePage',
        count: 50,
        theme: '#2db5a3',
        layout: ['prev', 'page', 'next']
    });

    exports('firm', {});
});