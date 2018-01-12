/**
 * Created by lsq on 2018/1/12.
 */
require('./ball.scss');

(function () {
    let $controlStyle = $('<style id="ball-stop">' +
        '.css-load-ball:before,.css-load-ball:after{animation-play-state: paused}' +
        '</style>');
   setTimeout(function () {
       $('head').append($controlStyle)
   },7000);

    setTimeout(function () {
        $controlStyle.remove();
    },9000);
})();