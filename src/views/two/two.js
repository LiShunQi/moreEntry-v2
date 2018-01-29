/**
 * Created by lsq on 2017/10/23.
 */
// require('../../fonts/iconfont.css')
// require('libs/util');
require('./two.css');
let common = require('libs/common.js');
$(document).ready(function () {
    document.getElementById('test').onclick = function () {
        common.addClass(document.querySelectorAll('.two')[0],'aa')
    };

    let [a,...b] = [1,2,3,4];
    let func = (x=1,y=1) => {
        return x + y;
    };
});
