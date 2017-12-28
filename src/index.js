/**
 * Created by lsq on 2017/10/30.
 */
// var layui = require('node_modules/layui-src');
// require('static/fonts/iconfont.css');
// require('static/font/css/font-awesome.min.css');
// require('libs/util');
require('static/css/index.css');
layui.use('layer',function () {
    var layer = layui.layer;
    $('#test').on('click',function () {
        layer.alert('index')
    });

    var string = 'xxxyyyybb'; //3x4y2b
    var reg = /(x+)(y+)(b+)/;
    string.replace(reg,function (a,b,c,d) {
        console.log(b.length+b[0]+c.length+c[0]+d.length+d[0]);
    });
    console.log(string.match(reg));
});