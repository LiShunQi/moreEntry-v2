/**
 * Created by lsq on 2017/12/24.
 */
require('static/css/base.css');
require('static/fonts/iconfont.css');
require('./drag.scss');

;(function () {
   let login = document.querySelector('#modal')
       ,close = document.querySelector('.close')
       ,drag = document.querySelector('.content-header')
       ,content = document.querySelector('.content')
       ,modal = document.querySelector('.shade')
       ,move = false
       ,modalWidth
       ,modalHeight
       ,screenWidth
       ,screenHeight
       ,x,y,offsetX,offsetY;

   login.onclick = function () {
       modal.style.display = 'block';
       modal.style.cssText = '';
   };
   close.onclick  = function () {
       modal.style.display = 'none';
   };

   function getEvent(e) {
       return e? e : window.event;
   }
   drag.onmousedown = function (e) {
       move = true;
       let event = getEvent(e);
       // debugger;

       modalWidth = content.offsetWidth;
       modalHeight = content.offsetHeight;
       screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
       screenHeight = document.documentElement.clientHeight || document.body.clientHeight;

       offsetX = event.offsetX;
       offsetY = event.offsetY;

   };
    drag.onmousemove = function (e) {
        if(!move){
            return;
        }
        // debugger;
        let event = getEvent(e)
            ,left,top;

        x = event.clientX;
        y = event.clientY;

        left = x - offsetX;
        top = y - offsetY;

        left = Math.min(Math.max(0,left),screenWidth - modalWidth);
        top = Math.min(Math.max(0,top),screenHeight - modalHeight);

        content.style.top = top + 'px';
        content.style.left = left + 'px';

    };
    document.onmouseup = function (e) {
        move = false;
    }
}());
