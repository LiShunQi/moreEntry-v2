require('./clock.scss');

(() => {
    let canvas = document.getElementById('clock')
        ,cxt = canvas.getContext('2d')
        ,widht = cxt.canvas.width
        ,height = cxt.canvas.height
        ,r = widht/2
        ,rem = widht/200 //缩放比例
        ,num = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]
        ,canvasClock = {};

    canvasClock.drawBackground = () => {
        let lineWidth = 10 * rem;

        cxt.save();
        cxt.translate(r,r);
        cxt.beginPath();
        cxt.lineWidth = lineWidth;
        cxt.arc(0, 0, r - lineWidth/2, 0, 2 * Math.PI, false);
        cxt.stroke();
        //填充数字
        for(let i = 0; i < num.length; i++){
            let rad = 2 * Math.PI / 12 * i
                ,r1 = r - 30 * rem
                ,x = Math.cos(rad) * r1
                ,y = Math.sin(rad) * r1;

            cxt.font = 16 * rem + 'px Arial';
            cxt.textAlign = 'center';
            cxt.textBaseline = 'middle';
            cxt.fillText(num[i], x, y,);
        }
        //内圆虚线
        for(let i = 0; i < 60; i++){
            let rad = 2 * Math.PI / 60 * i
                ,r2 = r - 16 * rem
                ,x = Math.cos(rad) * r2
                ,y = Math.sin(rad) * r2;

            cxt.beginPath();
            if(i % 5 === 0){
                cxt.fillStyle = '#000';
                cxt.arc(x, y, 3 * rem, 0, 2 * Math.PI, false);
            }else{
                cxt.fillStyle = '#ccc';
                cxt.arc(x, y, 3 * rem, 0, 2 * Math.PI, false);
            }
            cxt.fill();
        }
    };
    //时钟刻度
    canvasClock.drawHour = (hour,minute) => {
        let rad = 2 * Math.PI / 12 * hour
            ,mad = 2 * Math.PI / 12 / 60 * minute;

        cxt.save();
        cxt.beginPath();
        cxt.rotate(rad + mad);
        cxt.lineCap = 'round';
        cxt.lineWidth = 6 * rem;
        cxt.moveTo(0, 10 * rem);
        cxt.lineTo(0, -r / 2);
        cxt.stroke();
        cxt.restore();
    };
    //分钟刻度
    canvasClock.drawMinute = (minute) => {
        let rad = 2 * Math.PI / 60 * minute;

        cxt.save();
        cxt.beginPath();
        cxt.rotate(rad);
        cxt.lineCap = 'round';
        cxt.lineWidth = 4 * rem;
        cxt.moveTo(0, 10 * rem);
        cxt.lineTo(0, -r + 25 * rem);
        cxt.stroke();
        cxt.restore();
    };
    //秒钟刻度
    canvasClock.drawSecond = (second) => {
        let rad = 2 * Math.PI / 60 * second;

        cxt.save();
        cxt.beginPath();
        cxt.rotate(rad);
        cxt.fillStyle = 'red';
        // cxt.lineWidth = 4;
        cxt.moveTo(-2, 10 * rem);
        cxt.lineTo(2, 10 * rem);
        cxt.lineTo(1, -r + 16 * rem);
        cxt.lineTo(-1, -r + 16 * rem);
        cxt.fill();
        cxt.restore();
    };
    //钉钉
    canvasClock.drawDot = () => {
        cxt.save();
        cxt.beginPath();
        cxt.fillStyle = 'white';
        cxt.arc(0, 0, 3 * rem, 0, 2 * Math.PI, false);
        cxt.fill();
        cxt.restore();
    };
    canvasClock.draw = () => {
        let time = new Date()
            ,hour = time.getHours()
            ,minute = time.getMinutes()
            ,second = time.getSeconds();

        cxt.clearRect(0, 0, widht, height);
        canvasClock.drawBackground();
        canvasClock.drawHour(hour,minute);
        canvasClock.drawMinute(minute);
        canvasClock.drawSecond(second);
        canvasClock.drawDot();
        cxt.restore();
    };

    setInterval(canvasClock.draw, 1000);
})();