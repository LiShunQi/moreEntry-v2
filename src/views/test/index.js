/**
 * Created by lsq on 2017/12/8.
 */
require('static/css/base.css');
require('static/fonts/iconfont.css');
require('./index.scss');

$(function () {
    function getWindowHeight() {
        return document.documentElement.clientHeight || document.body.clientHeight;
    }
    function getClientHeight() {
        return document.documentElement.scrollHeight || document.body.scrollHeight;
    }
    function getScrollTop() {
        return document.documentElement.scrollTop || document.body.scrollTop;
    }
    function getOffset(element) {
        var ele = document.querySelectorAll(element)[0];
        return ele.getBoundingClientRect();
    }
    function throttle(fn, delay) {
        let timer = null;
        return function () {
            let context = this,
                args = arguments;
            timer = setTimeout(function () {
                clearTimeout(timer);
                fn.apply(context,args);
                timer = null;
            },delay || 300);
        }
    }

    const windowHeight =  getWindowHeight();
    const clientHeight = getClientHeight();
    const line = document.querySelectorAll('.flexbox')[0];
    function handleScroll() {
        line.style.width = Math.abs(getOffset('body').top)/(clientHeight-windowHeight)*100 + '%';
    }
    window.onscroll = throttle(handleScroll,500);
});

