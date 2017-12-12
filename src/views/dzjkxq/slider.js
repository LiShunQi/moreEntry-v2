/**
 * Created by lsq on 2017/12/11.
 */
require('libs/amazeUI/css/amazeui.min.css');
require('./slider.css');
require('libs/amazeUI/js/amazeui.min.js');
// $(function ($) {
    $('.test-btn').click(function () {
        $('.dzjkxq-wrap').fadeIn();
            $('.am-slider').flexslider({
                animationLoop: false,            // Boolean: 是否循环播放
                directionNav: false,             // Boolean: 是否创建上/下一个按钮（previous/next）
                slideshow: false               // Boolean: 是否自动播放
            });
    });
    $('.dzjkxq-close-icon').click(function () {
        $('.dzjkxq-wrap').fadeOut();
    });
// });

