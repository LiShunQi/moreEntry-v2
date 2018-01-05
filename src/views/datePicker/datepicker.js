/**
 * Created by lsq on 2018/1/4.
 */
require('./datepicker.scss');

(function () {
    let datePicker = {};

    if (!Array.indexOf) {
        Array.prototype.indexOf = function (obj) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === obj) {
                    return i;
                }
            }
            return -1;
        }
    }

    //获取month数据
    datePicker.getMonthDate = function (year, month) {
        let ret = []
            ,monthData = {}
            ,today;

        if(!year || !month){
            today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }

        let now = (new Date()).getDate(); //今天几号

        today = new Date(year, month - 1, 1);

        let prevMonthCount = today.getDay(); //上个月有几天

        let prevMonthLastDay = (new Date(year, month - 1, 0)).getDate(); //山个月最后一天

        let thisMothLastDay = (new Date(year, month, 0)).getDate(); //这个月最后一天

        for(let i = 0; i < 6*7; i++){
            let date = i + 1 - prevMonthCount;
            let showDate,thisMonth,thisYear,isToday,isThisMonth;

            if(date <= 0){
                isThisMonth = false;
                isToday = false;
                thisMonth = month -1;
                showDate = date + prevMonthLastDay;
            }else if(date > thisMothLastDay){
                isThisMonth = false;
                isToday = false;
                thisMonth = month + 1;
                showDate = date - thisMothLastDay;
            }else {
                if(date === now){
                    isToday = true;
                }
                isThisMonth = true;
                showDate = date;
                thisMonth = month;
            }

            if(thisMonth === 0){
                thisYear = year - 1;
                thisMonth = 12;
            }else if(thisMonth === 13){
                thisYear = year + 1;
                thisMonth = 1;
            }else{
                thisYear = year;
            }
            ret.push({
                isThisMonth: isThisMonth,
                isToday: isToday,
                showDate: showDate,
                month: thisMonth,
                year: thisYear
            })
        }

        monthData.ret = ret;
        monthData.thisYear = year;
        monthData.thisMonth = month;

        return monthData;
    };

    //构建html结构
    datePicker.buildHtml = function (year, month) {
      let monthDate = datePicker.getMonthDate(year, month)
          ,html = '';

      html += '<div class="dd-datepicker-header">' +
            '<a class="dd-datepicker-btn dd-datepicker-btn-prev" href="javascript:;">&lt;</a>' +
            '<a class="dd-datepicker-btn dd-datepicker-btn-next" href="javascript:;">&gt;</a>' +
            '<span class="dd-datepicker-month">'+ monthDate.thisYear+ "-" + monthDate.thisMonth +'</span>' +
            '</div>' +
            '<div class="dd-datepicker-body">' +
            '<table class="dd-datepicker-table">' +
            '<thead>' +
            '<th>日</th>' +
            '<th>一</th>' +
            '<th>二</th>' +
            '<th>三</th>' +
            '<th>四</th>' +
            '<th>五</th>' +
            '<th>六</th>' +
            '</thead>' +
            '<tbody>' ;

        for(let i = 0;i < monthDate.ret.length; i++){
            let time = monthDate.ret[i].year+"-"+monthDate.ret[i].month+"-"+monthDate.ret[i].showDate;

            if(i % 7 === 0){
                html += '<tr>'
            }

            if(monthDate.ret[i].isThisMonth){
                if(monthDate.ret[i].isToday){
                    html += '<td class="active" data-time="'+ time + '">'+ monthDate.ret[i].showDate +'</td>';
                }else{
                    html += '<td data-time="'+ time + '">'+ monthDate.ret[i].showDate +'</td>';
                }
            }else{
                html += '<td class="not-thisMonth" data-time="'+ time + '">'+ monthDate.ret[i].showDate +'</td>';
            }

            if(i % 7 === 6){
                html += '</tr>'
            }
        }

        html += '</tbody>' +
            '</table>' +
            '</div>';

        return html;
    };

    //初始化方法
    datePicker.init = function (target) {
        let $dom =  datePicker.buildHtml()
            ,$domWrap = document.createElement('div')
            ,$target = document.getElementById(target)
            ,year = (new Date()).getFullYear()
            ,month = (new Date()).getMonth() + 1;

        $domWrap.className = 'dd-datepicker-wrap';
        $domWrap.innerHTML = $dom;
        document.body.appendChild($domWrap);

        $domWrap.style.left = $target.getBoundingClientRect().left + 'px';
        $domWrap.style.top = $target.getBoundingClientRect().top + $target.offsetHeight + 1 + 'px';

        $target.onfocus = function () {
            $domWrap.style.display = 'block';
        };

        //body 时间委托日历各种事件
        document.body.onclick = function (e) {
            let wrap = document.querySelectorAll('.dd-datepicker-table tbody td')
                ,event = e || window.event
                ,target = event.target;

            if(Array.prototype.indexOf.call(wrap,target) > -1){
                //日期点选
               $target.value =  target.getAttribute('data-time');
                $domWrap.style.display = 'none';
            }else if(target.className.indexOf('dd-datepicker-btn-prev') > -1){
                //上一月
                month--;
                if(month < 1){
                    month = 12;
                    year -= 1;
                }
                $dom = datePicker.buildHtml(year, month);
                $domWrap.innerHTML = $dom;
            }else if(target.className.indexOf('dd-datepicker-btn-next') > -1){
                //下一月
                month++;
                if(month > 12){
                    month = 1;
                    year += 1;
                }
                $dom = datePicker.buildHtml(year, month);
                $domWrap.innerHTML = $dom;
            }
        }
    };

    window.datePicker = datePicker;

})(window);
datePicker.init('datepicker-test');