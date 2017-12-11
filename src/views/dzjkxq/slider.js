/**
 * Created by lsq on 2017/12/11.
 */
require('./slider.css');
require('libs/amazeUI/js/amazeui.min.js');
$(function () {
    $('.am-slider').flexslider({
        animationLoop: false,            // Boolean: 是否循环播放
        directionNav: false,             // Boolean: 是否创建上/下一个按钮（previous/next）
        slideshow: false,                // Boolean: 是否自动播放
    });
});