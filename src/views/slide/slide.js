/**
 * Created by lsq on 2017/12/22.
 */
require('static/css/base.css');
require('static/fonts/iconfont.css');
require('./slide.scss');

!(function () {
    let list = document.querySelectorAll('.gg-slides')[0]
        ,container = document.querySelectorAll('.gg-slider')[0]
        ,buttons = document.querySelectorAll('.gg-dot')[0].querySelectorAll('li a')
        ,next = document.querySelectorAll('.slide-next')[0]
        ,prev = document.querySelectorAll('.slide-pre')[0]
        ,animated = false
        ,index = 1;

        //切换
        function animate(offset) {
            animated  = true;
            let newLeft =  parseInt(list.style.left) + offset
                ,time = 3000
                ,interval = 10
                ,spend = offset/(time/interval);

            function go() {
                if((spend < 0 && parseInt(list.style.left) > newLeft) || (spend > 0 && parseInt(list.style.left) < newLeft)){
                    list.style.left = parseInt(list.style.left) + spend + 'px';
                    setTimeout(go,interval);
                }else{
                    animated = false;
                    list.style.left = newLeft + 'px';
                    if(newLeft > 0){
                        list.style.left = -2000 + 'px';
                    }else if(newLeft < -2000){
                        list.style.left = 0 + 'px';
                    }
                }
            }
            go();
        }
        //下一张
        next.onclick = function () {
            if(!animated){
                index += 1;
                if(index > 5){
                    index = 1;
                }
                showBotton();
                animate(-500);
            }
        };
        //上一张
        prev.onclick = function () {
            if(!animated){
                index--;
                if(index < 1){
                    index = 5;
                }
                showBotton();
                animate(500);
            }
        };
        //圆点切换
        function showBotton() {
            for(let i = 0;i < buttons.length; i++){
                if(buttons[i].className === 'active'){
                    buttons[i].className = '';
                    break;
                }
            }
            buttons[index - 1].className = 'active';
        }
        //按钮切换
        for(let i = 0;i < buttons.length; i++){
           buttons[i].onclick = function () {
               if(this.className === 'active'){
                   return;
               }
               let curIndex = parseInt(this.getAttribute('data-index'));
               let offset = -500*(curIndex - index);
               index = curIndex;
               showBotton();
               if(!animated){
                   animate(offset);
               }
           }
        }
})();