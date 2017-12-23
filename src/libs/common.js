/**
 * Created by lsq on 2017/12/23.
 */
;(function () {
    //判断元素是否有相应的className
    function hasClass(element,cName) {
        return !!element.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
    }
    //添加className
    function addClass(element,cName) {
        if(!hasClass(element,cName)){
            element.className += " " + cName;
        }
    }
    //移除className
    function removeClass(element,cName) {
        if(hasClass(element,cName)){
            element.className = element.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
        }
    }
    //添加事件监听函数
    function addEventHandle(ele,type,handle) {
        if(ele.addEventListener){
            ele.addEventListener(type,handle,false); //dom2级
        }else if(ele.attachEvent){
            ele.attachEvent('on' + type,handle); //ie
        }else{
            ele['on' + type] = handle; //dom0
        }
    }
    //移除事件监听
    function removeEventHandle(ele,type,handle) {
        if(ele.removeEventListener){
            ele.removeEventListener(type,handle,false); //dom2级
        }else if(ele.detachEvent){
            ele.detachEvent('on' + type,handle); //ie
        }else{
            ele['on' + type] = null; //dom0
        }
    }
    //阻止元素默认行为
    function preventDefault(event) {
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    }
    //阻止事件冒泡
    function stopPropagation(event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }

    module.exports = {
        addClass,
        removeClass,
        addEventHandle,
        removeEventHandle,
        stopPropagation,
        preventDefault
    }
}());