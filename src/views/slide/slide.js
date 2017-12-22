/**
 * Created by lsq on 2017/12/22.
 */
require('static/css/base.css');
require('static/fonts/iconfont.css');
require('./slide.scss');

// var reg = /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/g;
// var str = 'jsjjfsj2017.2.1sjfjddddddddfj';
//
// console.log(reg.test(str));
// console.log(reg.lastIndex);
(function () {
    let slides = document.querySelectorAll('.gg-slides')[0]
        ,next = document.querySelectorAll('.slide-next')[0]
        ,pre = document.querySelectorAll('.slide-pre')[0]
        ,left = 0
        ,index = 1;
        
        next.addEventListener('click',function () {
            if(index < 3){
                index++;
                left = -(index - 1)*500;
                slides.style.left = left + 'px';
            }else{
                index = 1;
            }
        },false);

    pre.addEventListener('click',function () {
        if(left < 1000){
            left -= 500;
        }else{
            left = 0;
        }
        slides.style.left = left + 'px';
    },false)
})();