<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />


  </div>
</template>

<script>
// import FastClick from 'fastclick'
import '../static/frist/css/page.css'
import Mixin from '@/Mixin'

const FastClick = require('fastclick');

export default {
  name: 'app',
    mixins: [Mixin],
  data:function(){
    return {
        //帐户明细
        acDetail:{ 
            tabs:[
                { title:'全部', value:'1', days:[], active:true },
                { title:'充值', value:'2', days:[], active:false },
                { title:'提款', value:'3', days:[], active:false },
                { title: '优惠', value: '4', days: [], active: false},
                // {title: '返水', value: '5', days: [], active: false},
            ] 
        },
        navScroll:{}, // 左侧选单
        conScroll:{}, // 右侧选单
    }
  },
  mounted:function(){
      var _self = this ;
    FastClick.attach(document.body);
      document.documentElement.scrollTop = document.body.scrollTop=0;

      window.onload=function () { // ios 禁止用户双击放大，缩放等
          document.addEventListener('touchstart',function (event) {
              if(event.touches.length>1){
                  event.preventDefault();
              }
          })
          var lastTouchEnd=0;
          document.addEventListener('touchend',function (event) {
              var now=(new Date()).getTime();
              if(now-lastTouchEnd<=300){
                  event.preventDefault();
              }
              lastTouchEnd=now;
          },false)
      }

      this.appService()//一分钟调一次的服务
      // $('html, body').height($(window).height()); // 防止浏览器全屏显示

  },
    methods: {
        appService: function () {
            // console.log( this.getCookie( 'haslogin' )  ,'all-getlogin'  )
            var _self = this;
            var actoken = _self.getCookie('access_token'); // token\
            var appHaslogin = this.getCookie('haslogin', 'token');
            if (appHaslogin == 'true') {
                this.serviceTimer = setInterval(function () {
                    $.ajax({
                        type: 'GET',
                        headers: {
                            "Authorization": "bearer  " + actoken,
                        },
                        async: false,
                        url: _self.action.uaa + 'api/server/ping',
                        success: (res) => {
                            // console.log(res,'sevice')
                        },
                        error: function () {

                        }
                    });
                }, 60000)
            } else {
                // console.log('err')
            }
        }
    }

}
</script>
<style scoped>

</style>
