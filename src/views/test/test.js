/**
 * Created by lsq on 2017/12/8.
 */
require('static/css/base.css');
require('static/fonts/iconfont.css');
require('./test.css');

$('.test-btn').click(function () {
    // $('.progress').css({'width':'10%'});
    var $lis =  $('.body ul li');
    var i = 0;
    // $lis.each(function (index,el) {
    //     (function (i) {
    //         setTimeout(function () {
    //             $(el).addClass('rotate');
    //         },3000)
    //     })(i);
    // });
    for(i;i<$lis.length;i++){
        (function (i) {
            setTimeout(function () {
                $lis.eq(i).addClass('rotate');
            },3000)
        })(i);
    }

});