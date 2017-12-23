/**
 * Created by lsq on 2017/10/23.
 */
// require('../../fonts/iconfont.css')
// require('libs/util');
require('./two.css');
var common = require('libs/common.js');
$(document).ready(function () {
    document.getElementById('test').onclick = function () {
        common.addClass(document.querySelectorAll('.two')[0],'aa')
    };
});
