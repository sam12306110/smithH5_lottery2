
// import $ from "jquery";
// import DateFormat from "dateformat";

//mixin.js
// var  API_ROOT ='http://api.88bccp.com';

var MyMixin = {
    data:function(){
        return {
            action:{
                // picurl: 'https://img.will888.cn/photo/pic/',  // 图片地址
                picurl: 'http://admin.baochiapi.com/photo/pic/',
                //
                forseti: 'http://121.58.234.210:19093/forseti/',  // 测试环境
                uaa:  'http://121.58.234.210:19093/uaa/',   // 测试环境
                hermes:  'http://121.58.234.210:19093/hermes/', // 测试环境

                // forseti: 'https://api.88bccp.com/forseti/',   // 线上环境
                // uaa:'https://api.88bccp.com/uaa/',  // 线上环境
                // hermes:'https://api.88bccp.com/hermes/',   // 线上环境
            },

            rootBalance:{
                rootBalance:'',
            },
            playTreeList:[], //玩法树
            testPriodDataNewlyData:{
              "data" : [ {
                "version" : 0,
                "cid" : 22225,
                "lotteryId" : 2,
                "pcode" : 20171030083,
                "startTime" : 1509363600000,
                "endTime" : 1509364200000,
                "status" : 0,
                "pdate" : 20171030,
                "prizeCloseTime" : 1509364155000,
                "nextInterval" : 600,
                "doubleData" : {
                  "doubler" : "-",
                  "longer" : "-",
                  "sizer" : "-",
                  "total" : "-"
                }
              }, {
                "version" : 0,
                "cid" : 22224,
                "lotteryId" : 2,
                "pcode" : 20171030082,
                "startTime" : 1509363000000,
                "endTime" : 1509363559999,      //1509363700000
                "status" : 0,
                "pdate" : 20171030,
                "prizeCloseTime" : 1509363555000,
                "nextInterval" : 600,
                "doubleData" : {
                  "doubler" : "-",
                  "longer" : "-",
                  "sizer" : "-",
                  "total" : "-"
                }
              }, {
                "version" : 0,
                "cid" : 22223,
                "lotteryId" : 2,
                "pcode" : 20171030081,
                "startTime" : 1509362400000,
                "endTime" : 1509363000000,
                "status" : 0,
                "pdate" : 20171030,
                "prizeCloseTime" : 1509362955000,
                "nextInterval" : 600,
                "winNumber" : "3,9,5,0,2",
                "doubleData" : {
                  "doubler" : "单",
                  "longer" : "虎",
                  "sizer" : "小",
                  "total" : "19"
                }
              } ],
              "err" : "SUCCESS",
              "msg" : "",
              "maxUpdateTime" : 1509363282484
            }
        }
    },
    computed:{
        // token 处理
        getAccessToken:function() {
            return this.getCookie("access_token");
        },
    },

    methods:{
        // 退出函数
        loginOut:function (type) {
            var _self = this ;
            var actoken =  _self.getCookie('access_token') ; // token
            $.ajax({
                type: 'get',
                headers: {
                    "Authorization": "bearer  "+actoken ,
                },
                url: _self.action.uaa + 'oauth/logout',
                data: {} ,
                success: (res) => {
                    if(res.err == 'SUCCESS'){
                        _self.clearAllCookie() ; // 清除全部 cookie
                        if(!type){ // 普通退出需要跳转
                            _self.$refs.autoCloseDialog.open('用户已退出','','icon_check','d_check') ;
                            setTimeout(function () {
                                window.location = '/' ;
                            },1000)
                        }

                    }
                    _self.$nextTick(function () {

                    })
                },
                error: function () {

                }
            });
        },
        // 返回上一步
        goBack:function(){
            this.$router.back();
        },
        // 打开游戏判断是否登录
        gotoGame:function (has) {
            var _self = this ;
            if(!has){
                _self.$refs.autoCloseDialog.open('请先登录！') ;
                setTimeout(function () {
                    _self.$router.push('/login') ;
                },1000) ;
                return false ;
            }
        },
          //  下拉回弹效果
        setScroll: function() {
            this.navScroll = new iScroll("nav-wrapper",{ // 侧边栏
                hScrollbar:false,
                vScrollbar:false,
                click: true ,
            });
            this.conScroll = new iScroll("content-wrapper",{  // 投注区域
                onScrollEnd: function(){
                    this.refresh() ;
                },
               /* onBeforeScrollMove:function(e){
                    e.preventDefault();
                },*/
                vScroll:true,
                mouseWheel: true ,
                hScrollbar:false ,
                vScrollbar:false ,
                click: true ,
               // momentum: false ,

                useTransform: false ,
                useTransition: false ,
                // snapThreshold:0.5
            });
           // $('.so-con-left').find('ul li:first-child').click() ; // 解决k3 滑动问题

        },
        // 初始化滚动高度
        setInitHeight:function (lotteryid) {
            var conth = $('.so-con-right .item_one').height() ;
           this.setClickHeight(conth) ;
            if(lotteryid == '6'){
                /* var div = document.getElementById("k3-item0");
                div.ontouchmove = function(e){
                    //事件的touches属性是一个数组，其中一个元素代表同一时刻的一个触控点，从而可以通过touches获取多点触控的每个触控点
                    //由于我们只有一点触控，所以直接指向[0]
                  //  var touch = e.touches[0];
                    //获取当前触控点的坐标，等同于MouseEvent事件的clientX/clientY
                  /!*  var x = touch.clientX;
                    var y = touch.clientY;*!/
               var csstr =  $('.so-con-right').css('transform').replace(/[^0-9\-,]/g,'').split(',')[5] ;
               if(-csstr>30){

               }

                };*/
            }

            window.PointerEvent = undefined ;

        },
        // 点击切换 设置球区域高度
        setClickHeight:function (val) {
            var winw = window.screen.width || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; // 获取屏幕宽度
            if(winw >413){ // 大屏幕
                $('.so-con-right').css('height',(val-380)+'px') ;
            }else if(winw>300 && winw<375){ // 小屏幕
                $('.so-con-right').css('height',(val-270)+'px') ;
            }else{
                $('.so-con-right').css('height',(val-310)+'px') ;
            }
        },

        ajax:function(userConfig){
            var _self = this ;
            let config = {
                type: 'get',
                headers: {
                    "Authorization": "bearer  " + this.getAccessToken,
                },
                error: function (e) {
                    _self.errorAction(e) ;
                    reject(e);
                }
            }
            config = Object.assign(config, userConfig);
            $.ajax(config);

        },
        // 接口异常处理
        errorAction:function (e) {
            var _self = this ;
            if(e.responseJSON.error == 'Conflict' || e.responseJSON.error == 'Unauthorized'){ // 帐号重复登录   帐号注销
                _self.$refs.autoCloseDialog.open(e.responseJSON.message) ;
                _self.clearAllCookie() ;
                setTimeout(function () {
                    window.location = '/login' ;
                },300)
                return false ;
            }else  if(e.responseJSON.error == 'invalid_token'){  // token 过期
                _self.clearAllCookie() ;
                setTimeout(function () {
                    window.location = '/login' ;
                },300)
                return false ;
            }
        },

        // 玩法树
        loadPlayTree:function(gameid) {
            var _self = this ;
            return new Promise((resolve, reject)=>{
                $.ajax({
                    type: 'get',
                    headers: {
                        "Authorization": "bearer  " + _self.getAccessToken,
                    },
                    url: this.action.forseti + 'api/playsTree',
                    data: {lotteryId: gameid,}, // 当前彩种id
                    success: (res) => {
                        this.playTreeList = res.data ? res.data.childrens :[];
                     setTimeout(function () {
                         _self.setInitHeight(gameid) ;
                     },200) ;
                   // $('.so-con-left').find('ul li:first-child').click() ; // 解决k3 滑动问题

                        resolve(this.playTreeList);
                    },
                    error: function (e) {
                        _self.errorAction(e) ;
                        reject(e);
                    }
                });
            });

        },

        // 最新开奖期数
        priodDataNewly:function(gameid, sys_time) {
            var _self = this ;
            return new Promise((resolve, reject)=>{
                $.ajax({
                    type: 'get',
                    headers: {
                        "Authorization": "bearer  " + _self.getAccessToken,
                    },
                    url: this.action.forseti + 'api/priodDataNewly',
                    data: {lotteryId: gameid,},
                    success: (function(res) {
                        if(res.data){
                            setTimeout(()=>{
                                resolve(res);

                            },200)

                        }
                    }).bind(this),
                    error: function (e) {
                        _self.errorAction(e) ;
                        reject(e);
                    }
                });
            });

        },

        // 获取用户余额
        getMemberBalance:function (lotteryid) {
            var _self = this ;
            return new Promise((resolve, reject)=>{
                $.ajax({
                    type: 'GET',
                    headers: {
                        "Authorization": "bearer  " + this.getAccessToken,
                    },
                    // dataType:'json',
                    // contentType:"application/json; charset=utf-8",  // json格式传给后端
                    url: this.action.hermes + 'api/balance/get',
                    data: { lotteryId: lotteryid },
                    success: (res) => {
                        // console.log(res)
                        this.balanceData = res.data;
                        // console.log( res.data ) 
                        // _self.rootBalance.rootBalance = res.data.balance;
                        // console.log( _self.rootBalance.rootBalance )
                        var mom = this.fortMoney(this.roundAmt(res.data.balance), 2);  // 用户余额
                        this.setCookie("membalance", mom);  // 把登录余额放在cookie里面
                        this.setCookie("balancePublic", mom);  // 把登录余额放在cookie里面
                        
                        resolve();
                    },
                    error: function (e) {
                        console.log(e) ;
                        _self.errorAction(e) ;
                        reject(e);
                    }
                });

            })
        },

        /* 获取系统时间，lotteryid 彩种id moved to /src/Maxin.js
            调用方式
                this.getSystemTime().then((sys_time)=>{
                    //代码
                })
        */
        getSystemTime:function(nochange) {
            var _self = this ;
            return new Promise((resolve, reject)=>{
                $.ajax({
                    type: 'get',
                    headers: {
                        "Authorization": "bearer  " + _self.getAccessToken,
                    },
                    url: this.action.forseti + 'apid/serverCurrentTime',
                    data: {},
                    success: (res) => {
                        if(nochange =='0'){
                            var sys_time = res.data;
                        }else{
                           // var sys_time = _self.formatTimeUnlix(res.data);
                            var sys_time = res.data ;
                        }

                        resolve(sys_time);
                    },
                    error: function (e) {
                        _self.errorAction(e) ;
                        reject(e);
                    }
                });

            })
        },

        // 此方法用来初始化页面高度
        initViewHeight :function() {
            var viewHeight = $(window).height();
            var topHeight = $('.so-in-top').height();
            var mainHeight = $('.so-in-main').height();
            var rightConHeight = 0;
            var leftConHeight = 0;
            rightConHeight = viewHeight - topHeight - mainHeight;
           // $('.so-con-right').height(rightConHeight + 'px');
            // $('.so-con-left').height(leftConHeight + 'px');

            // 六合彩左側選單高度
            leftConHeight = viewHeight - topHeight - mainHeight;
            // 左边菜单玩法框高度初始化
            var leftTopHeight = $('.so-l-c-top').height();
            $('.so-l-c-con').height((viewHeight - leftTopHeight) + 'px');
        },

        //禁止遮罩层以下屏幕滑动
        touchmove :function(){
            $(document).on("touchmove", function (e) {
                var e = e || event,
                    target = e.target || e.srcElement;
                if (e.target.className.indexOf("so-shade") >= 0) { //className為弹窗的蒙层的类名
                    e.preventDefault();
                }
            });
        },
        
        //格式化赔率
        payoffFormat:function(val){
            return (Number(val)/10000).toFixed(3);
        },
        // 美东时间设置
        setAmerTime :function (el) {
            var today = new Date();
          //  today.setHours(today.getHours() - 12);  // 不需要转成美东时间
            var y = today.getFullYear();
            var m = today.getMonth() + 1;
            var d = today.getDate();
            var h = today.getHours();
            var mm = today.getMinutes();
            var s = today.getSeconds();
            m =  this.checkTime(m);
            d = this.checkTime(d);
            h = this.checkTime(h);
            mm = this.checkTime(mm);
            s = this.checkTime(s);
            if(el =='#paydate'){
                $(el).val(y+"/"+m+"/"+d+" "+h+":"+mm); // 只到分
            }else{
                $(el).val(y+"/"+m+"/"+d+" "+h+":"+mm+":"+s);
            }

       },
        /**
         * 1位数补0为2位数
         * @param i
         * @returns {*}
         */
         checkTime:function(i) {
            if (i<10)
            {i="0" + i}
            return i
        } ,
        // 时间戳转换
        formatTimeUnlix:function (v,type) {
            if (v == null) {
                return '';
            }
            var date = new Date(v);
            var year = date.getFullYear();
            var month = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
            var day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
            var hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
            var minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
            var seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
            if(type =='0'){
                return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes ;
            }else{
                return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
            }

        },
        // 倒计时处理
        formatTime:function(second, type) {
            var bk;
            if (type == 0) {
                var h = parseInt(second / 3600);
               // var h = Math.floor(second / 3600);
                var f = parseInt(second % 3600 / 60);
               // var f = Math.floor((second - (h * 60 * 60)) / 60);
                var s = parseInt(second % 60);
              //  var s = (second - (h * 60 * 60) - (f * 60));
              // second --;
              bk = (h < 10 ? "0" + h : h)+ ":" + (f < 10 ? "0" + f : f) + ":" + (s < 10 ? "0" + s : s)
              // bk = h + ":" + (f < 10 ? "0" + f : f) + ":" + (s < 10 ? "0" + s : s)
            } else {
                bk = second.split(":");
                bk = parseInt(bk[0] * 3600) + parseInt(bk[1] * 60) + parseInt(bk[2])
            }
            return bk
        },
        fftimeWithHour:function (n) {
            var sec_num = parseInt(n, 10); // don't forget the second param
            var hours   = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours   < 10) {hours   = "0"+hours;}
            if (minutes < 10) {minutes = "0"+minutes;}
            if (seconds < 10) {seconds = "0"+seconds;}
            return parseInt(hours)>0 ? hours+':'+minutes+':'+seconds : minutes+':'+seconds;
        },
        fftime:function (n) {
            return Number(n) < 10 ? '' + 0 + Number(n) : Number(n);
        },

        format:function(dateStr) {  //格式化时间
           return new Date(dateStr.replace(/[\-\u4e00-\u9fa5]/g, '/'));
        },
        diff:function (t) {  //根据时间差返回相隔时间
            return t > 0 ? {
                day: Math.floor(t / 86400),
                hour: Math.floor(t % 86400 / 3600),
                minute: Math.floor(t % 3600 / 60),
                second: Math.floor(t % 60)
            } : {day: 0, hour: 0, minute: 0, second: 0};
        },

        /*
         * 数字转千分位
         * */
        formatNumber:function (num) {
            return (num + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
        },

        /*
         * 还原金额，去除逗号
         * */
        returnMoney:function(s) {
            return parseFloat(s.replace(/[^\d\.-]/g, ""));
        },


        /**
         * 解析URL参数
         */
        getStrParam :function() {
            var url = location.search; //获取url中"?"符后的字串
            var param = {};
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    param[strs[i].split("=")[0]]= decodeURIComponent(strs[i].split("=")[1]);
                }
            }
            return param;
        },
         openGameOnline: function(url) {
           
            this.openGame('https://static.meiqia.com/dist/standalone.html?_=t&eid=89999')
        },
        // 打开新窗口
       /* openGame: function(url) {
            if (url) {
                return window.open(url,  "_blank", 'toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, depended=no, width=600, height=800');
            }
          // return window.open('', 'game', 'width=1200, height=800');
            return window.open("",  "_blank", 'toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, depended=no, width=600, height=800') ;
        },*/
        openGame: function(url) {
            if (url) {
                return window.open(url, 'game', 'width=800, height=1200') ;
            }
            // return window.open('', 'game', 'width=1200, height=800').document.write(loadStr);
            return window.open('', 'game', 'width=800, height=1200') ;
        },
        // 设置cookie
        setCookie :function(name, value, expire, path) {
            var curdate = new Date();
            var cookie = name + '=' + encodeURIComponent(value) + '; ';
            if (expire != undefined || expire == 0) {
                if (expire == -1) {
                    expire = 366 * 86400 * 1000;// 保存一年
                } else {
                    expire = parseInt(expire);
                }
                curdate.setTime(curdate.getTime() + expire);
                cookie += 'expires=' + curdate.toUTCString() + '; ';
            }
            path = path || '/';
            cookie += 'path=' + path;
            document.cookie = cookie;
        },

        // 获取cookie
        getCookie :function(name) {
            var re = '(?:; )?' + encodeURIComponent(name) + '=([^;]*);?';
            re = new RegExp(re);
            if (re.test(document.cookie)) {
                return decodeURIComponent(RegExp.$1);
            }
            return '';
        },
        //清除所有cookie函数
         clearAllCookie:function() {
            console.log('清除cookie') ;
             this.setCookie("access_token", '');  // 登录token
             this.setCookie("username", '');  //  登录用户名
             this.setCookie('acType','');   // 玩家类型
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if(keys) {
                for(var i = keys.length; i--;)
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
            }
        },
        getName:function(){
            return this.name;
        },
        // 金额转换,分转成元
        roundAmt:function(v) {
            return isNaN(v) ? '0.00' : (v / 100).toFixed(2);
        },

        // 金额转换，支持实数, 元转成分
        monAmt :function(v) {
            return /^[-+]?\d+(\.\d*)?$/.test(v) ? v * 100 : '';
        },

        /*
         * 数字转换，显示千位符，s 要转换的数字，n 保留n位小数
         * */
        fortMoney:function (s, n) {
            n = n > 0 && n <= 20 ? n : 2;
            s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
            var l = s.split(".")[0].split("").reverse(),
                r = s.split(".")[1];
            let t = "";
            for(let i = 0; i < l.length; i ++ ){
                t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
            }
            return t.split("").reverse().join("") + "." + r;
        },
         ifLogined: function() { // 判断是否登录
            if (this.getCookie('username') && this.getCookie('access_token')) {
                return /\S/g.test(this.getCookie('username')) && /\S/g.test(this.getCookie('access_token'));
            }
            return false;

        },
        /*
         *  正整数判断，不包含零
         * */

        isPositiveNum:function(num) {
            //  var re = /^[0-9]*[1-9][0-9]*|0$/ ;
            var re=/^[0-9]*$/;
            return re.test(num);
        },

        positiveNum :function(num) { // 验证数字，正整数判断，包含零
            //  var re = /^[0-9]*[1-9][0-9]*$/;
            var re = /^[0-9]*$/;
            return re.test(num);
        },

        positiveEngNum:function (val) { // 验证英文与数字或者下划线，帐号验证和密码验证
            var re = /^[A-Za-z0-9|_|]+$/;
            return re.test(val);
        },
        trueName :function(val) { // 验证真实姓名，中文字符
            var re = /^[\u4e00-\u9fa5]+$/;
            return re.test(val);
        },
        phoneNum :function(num) { // 验证手机号码
            var re = /^1[3|4|5|7|8|][0-9]{9}$/;
            return re.test(num);
        },
        checkEmail:function (val) { // 验证邮箱
            var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
            return re.test(val);
        },
        checkWechat :function(val) { // 验证微信
            var re = /^[a-zA-Z\d_]{5,}$/;
            return re.test(val);
        },
        checkqq :function(val) { // 验证qq
            var re = /^[1-9][0-9]{4,}$/;
            return re.test(val);
        },
        // 用户名，验证 ，val输入框值，el 输入框class content 提示内容
        checkUserName:function (val,el) {
            var content = '请输入4~15位英数帐号' ;
            if( (val && !this.positiveEngNum(val) ) || val.length<4 || val.length>15 ){
                $('.'+el).parent('.form_g').next('.error-message').addClass('red').text(content) ;
            }else{
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
            if(val ==''){
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
        },
        // 密码
        checkpassword:function (val,el) {
            var content = '请输入6~20位英数密码' ;
            if( (val && !this.positiveEngNum(val) ) || val.length<6 || val.length>20 ){
                $('.'+el).parent('.form_g').next('.error-message').addClass('red').text(content) ;
            }else{
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
            if(val ==''){
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
        },
        // 真实姓名 验证，val输入框值，el 输入框class content 提示内容
        checkrealyName:function (val,el) {
            var content = '请输入真实姓名' ;
            if( (val && !this.trueName(val) ) || val.length<2 || val.length>8 ){
                $('.'+el).parent('.form_g').next('.error-message').addClass('red').text(content) ;
            }else{
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
            if(val ==''){
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }

        },
        //电话号码 验证，val输入框值，el 输入框class content 提示内容
        checktelphone :function(val,el) {
            var content= '请输入正确的手机号码' ;
            if( (val && !this.phoneNum(val) ) || val.length != 11){
                $('.'+el).parent('.form_g').next('.error-message').addClass('red').text(content) ;
            }else{
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
            if(val ==''){
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
        },
        //验证开户行地址
        checkBankAdd  :function(val,el){
           var content = '请输入开户行地址（如:北京市海淀区xx分行' ;
             if(val==''){
                 $('.'+el).parent('.form_g').next('.error-message').addClass('red').text(content) ;
             }else{
                 $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
             }
             },
         //验证银行卡号
        checkBankNum: function (val,el) {
            var content = '请输入正确银行卡' ;
            if(val &&!this.positiveNum(val)||val.length<=15||val.length>20){
                $('.'+el).parent('.form_g').next('.error-message').addClass('red').text(content) ;
            }
            else{
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
            if(val ==''){
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
        },
        //验证支付密码
        checkNum: function (val,el) {
            var content = '请输入4位数字取款密码' ;
            if(val &&!this.positiveNum(val) ||val.length<4){
                $('.'+el).parent('.form_g').next('.error-message').addClass('red').text(content) ;
            }
            else{
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
            if(val ==''){
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
        },
        //验证确认密码
        checkIsEqual:function (el) {
            if(this.confirmpassword != this.userPd){
                $(el).parent('.form_g').next('.error-message').addClass('red').text('两次密码输入不一致') ;

            }else if((this.confirmpassword && !this.positiveEngNum(this.confirmpassword) ) || this.confirmpassword.length<6 || this.confirmpassword.length>20){
                $(el).parent('.form_g').next('.error-message').addClass('red').text('请输入6~20位英数密码') ;
            }else{
                $(el).parent('.form_g').next('.error-message').removeClass('red').text('');
            }
        },
        // 输入框清除数据,el当前元素class,cl是input的class
        //验证邮箱
        checkeMail:function (val,el) {
            var content = '请输入正确邮箱地址' ;
            if(val &&!this.checkEmail(val)){
                $('.'+el).parent('.form_g').next('.error-message').addClass('red').text(content) ;
            }
            else{
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
            if(val ==''){
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
        },
        checkQQ:function (val,el) {
            var content = '请输入正确QQ号' ;
            if(val &&!this.checkqq(val)){
                $('.'+el).parent('.form_g').next('.error-message').addClass('red').text(content) ;
            }
            else{
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
            if(val ==''){
                $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
            }
        },
        checkWx:function (val,el) {
            var content = '请输入正确微信账号' ;
             if(val &&!this. checkWechat(val)){
                $('.'+el).parent('.form_g').next('.error-message').addClass('red').text(content) ;
              }
            else{
               $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
             }
             if(val ==''){
              $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
               }
        },
        ClearInput:function(el,cl){
             $('.'+el).prev().val('');
              $('.'+el).parent('.form_g').next('.error-message').removeClass('red').text('') ;
              this.clearVal(cl) ;
        },
        //获取银行列表
        getBankList:function(){
            var _self=this;
            $.ajax({
                type:'get',
//              headers: {"Authorization": "bearer  " + this.getAccessToken },
                url: _self.action.forseti + 'apid/payment/banks',
                data:{},
                success: function(res){
                    _self.bankList=res.data;
                },
                error: function (err) {

                }
            })
        },

        //客服接口
        getCustom:function () {
            var _self=this;


            if (!sessionStorage.customLink) {
                $.ajax({
                    type: 'get',
                    url: _self.action.forseti + 'apid/config/custConfig',
                    data: {},
                    success: (res) => {
                        sessionStorage.customLink = res.data.h5CustUrl;
                        if (res.data) {

                            _self.custUrl = res.data.h5CustUrl;
                            localStorage.setItem('Url', _self.custUrl)
                        }
                    },
                    err: (res) => {

                    }
                })
            } else {
                _self.custUrl = sessionStorage.customLink;
                localStorage.setItem('Url', _self.custUrl)
            }
        },
        //网站说明文案
        getCopyright:function (type,code) {
            var _self=this;
            var senddata={
                type:type,
                code:code};
            $.ajax({
                type: 'get',
                url: _self.action.forseti + 'apid/cms/copyright',
                data: senddata ,
                success: function(res){
                    if(res.data){
                        if(res.err=="SUCCESS"){
                            _self.copyTitle=res.data[0].title;
                            _self.copyContent=res.data[0].content;
                        }
                    }
                },
                error: function (res) {

                }
            })
        },
        //试玩
        demoPlay :function () {
            var _self=this;
            $.ajax({
                type: 'post',
                headers: {Authorization: 'Basic d2ViX2FwcDo='},
                url: _self.action.uaa + 'apid/member/testLogin',
                data:{},
                success:(res)=>{
                    if(res.err == 'SUCCESS'){ // 登录成功
                        _self.setCookie("access_token", res.data.access_token);  // 把登录token放在cookie里面
                        _self.setCookie("username", res.data.username);  // 把登录用户名放在cookie里面
                        _self.setCookie('acType',res.data.acType);   //把玩家类型放在cookie里面
                        _self.$refs.autoCloseDialog.open('登录成功','','icon_check','d_check') ;
                        setTimeout(function () {
                            window.location = '/' ;
                        },1000)
                    }else{
                        this.$refs.autoCloseDialog.open(res.cnMsg) ;
                    }
                }
            })
        },
        //注册配置
        getReglist (type) {
            var _self=this;
            $.ajax({
                type: 'GET',
                url:  _self.action.forseti + 'apid/config/registerConfig?regType='+type,
                data:{},
                success:(res)=>{
                    //console.log(res)
                    if(!res.data){
                        return false
                    }
                    for(let i=0;i<res.data.length;i++){
                        switch (res.data[i].item) {
                            case "帐号" :
                                _self.accountObj=res.data[i];
                                break;
                            case "登录密码" :
                                _self.passwordObj=res.data[i];
                                break;
                            case "确认密码" :
                                _self.confirmpasswordObj=res.data[i];
                                break;
                            case "真实名称" :
                                _self.realynameObj=res.data[i];
                                break;
                            case "支付密码" :
                                _self.withPasswordObj=res.data[i];
                                break;
                            case "手机号码" :
                                _self.phoneObj=res.data[i];
                                break;
                            case "选择银行" :
                                _self.bankselectObj=res.data[i];
                                break;
                            case "开户行" :
                                _self.bankAddObj=res.data[i];
                                break;
                            case "银行卡号" :
                                _self.bankNumObj=res.data[i];
                                break;
                            case "电子邮箱" :
                                _self.eMailObj=res.data[i];
                                break;
                            case "QQ" :
                                _self.QQObj=res.data[i];
                                break;
                            case "微信" :
                                _self.weiChatObj=res.data[i];
                                break;

                        }
                    }


                }
            })


        }
    }
};
export default MyMixin;
