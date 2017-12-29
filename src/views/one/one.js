/**
 * Created by lsq on 2017/10/23.
 */
require('../../static/fonts/iconfont.css');
require('./one.css');
// require('libs/util');
$(document).ready(function () {
    //config的设置是全局的
    layui.config({
        base: '/libs/extends/' //假设这是你存放拓展模块的根目录
    }).extend({ //设定模块别名
        newtable: 'newtable' //如果 mymod.js 是在根目录，也可以不用设定别名
    });

    layui.use('newtable',function () {
        // var newtable = layui.newtable;
    });

    function test() {
        var table = document.getElementById('newtable');
        var tr = table.tHead.rows;
        var ths =  table.tHead.getElementsByTagName('th');
        for(var i = 0;i < ths.length; i++){
            var colspan = ths[i].colSpan;
            var rowspan = ths[i].rowSpan;
        }
    }
    test();
});