<template>
    <div id="pa_con" class="so-con warp page_login">
        <!--<header id="pa_head" class="login">
            <img src="static/frist/images/login_logo.png" alt="">
        </header>-->
        <div class="login_title">
          <!-- <img   src="static/frist/images/login_logo.png">              -->
        </div>

        <div class="new_panel login_area">
            <div class="new_panel_top"></div>
            <div class="new_panel_center">
                <form>
                    <fieldset>
                        <div class="form_g account">
                            <legend>帐号</legend>
                            <input type="text" placeholder="请输入帐号" v-model="username" autocomplete="off" class="user-name" @input="checkUserName(username,'user-name')" >
                            <i class="close close1" @click="ClearInput('close1','user-name')"></i>
                        </div>
                        <label class="error-message "></label>
                    </fieldset>
                    <fieldset>
                        <div class="form_g password">
                            <legend>密码</legend>
                            <input type="text" placeholder="请输入密码" v-model="password" onfocus="this.type='password'" autocomplete="off" class="pass-word"  @input="checkpassword(password,'pass-word')">
                            <i class="close close2" @click="ClearInput('close2','pass-word')"></i>
                        </div>
                        <label class="error-message"> </label>
                    </fieldset>
                    <fieldset>
                        <div class="form_g password ">
                            <legend>验证码</legend>
                            <input type="text" placeholder="请输入验证码" autocomplete="off"  maxlength="4" v-model="yzmcode">
                            <img :src="verImgCode" alt="" @click="switchYzmcode()">
                        </div>
                        <label class="error-message "></label>
                    </fieldset>
                </form>
                <div class="btn btn_blue">
                    <a class="new_btn" href="javascript:;" @click="LoginAction()"><span class="big">登录</span></a>
                </div>
                <div class="other_link">
                    <a href="/reg">马上注册</a>
                    <a href="javascript:;" @click="demoPlay()">免费试玩</a>
                    <!-- <a href="javascript:;" @click="openGame('http://www.providesupport.com?messenger=0bxg1rx3vv8lc036lt4a265vdi')">在线客服</a> -->
                    <!--<a href="javascript:;" @click="openGameOnline()">在线客服</a>-->
                    <a :href="custUrl" target="_blank">在线客服</a>
                </div>
            </div>
        </div>
        <AutoCloseDialog ref="autoCloseDialog" text=" " type="" />
    </div>
</template>

<script>
// import $ from "jquery";
import Mixin from '@/Mixin'
import AutoCloseDialog from '@/components/publicTemplate/AutoCloseDialog'

export default {
  name: 'Login',
  mixins:[Mixin],
  components: {
    AutoCloseDialog,
  },
    data: function() {
        return {
            username :'',
            password :'',
            verImgCode:'',
            yzmcode:'',
            client:'',
            submitflage: false ,
            custUrl:''
        }
    },
  created:function () {
      this.switchYzmcode()
  },
  mounted:function() {
       // this.username = 'admin' ;
      document.documentElement.scrollTop = document.body.scrollTop=0; // 回到顶部
      this.custUrl=localStorage.getItem('Url');

  },
  methods: {
      //清除model数据,cl元素class
      clearVal :function (cl) {
          if(cl=='pass-word'){
              this.password ='';}
          if(cl=='user-name'){
              this.username ='';
          }
      },
    //获取验证码；
    switchYzmcode:function () {
          let _self =this ;
          let url= this.action.uaa + 'apid/member/code/get?time='+ Math.random();
          $.ajax({
              type:"GET",
              url:url,
              success: (data) => {
                  _self.verImgCode = data.data && 'data:image/png;base64,' + data.data.code || '';
                  _self.client = data.data && data.data.clientId || '';
              }
          })
      },
    // 登录接口 moved to 主页/index.vue
    LoginAction:function() {
          var _self = this ;
          if(_self.submitflage){
              return false ;
          }
        if(this.username ==''){
            this.$refs.autoCloseDialog.open('请输入用户名') ;
            return false ;
        }
        if(this.password ==''){
            this.$refs.autoCloseDialog.open('请输入登录密码') ;
            return false ;
        }
        if(this.yzmcode==''){
            this.$refs.autoCloseDialog.open('请输入验证码') ;
            return false ;
        }
        var falg = $('.error-message').hasClass('red') ;  // 验证不通过，不允许提交
        if(falg){
            return false ;
        }
        _self.submitflage = true ;
        var logindata = {  // grant_type: 'password', username: 'bcappid02|admin', password: 'admin'
            grant_type: 'password',
            username: 'bcappid02|'+this.username ,
            password: this.password ,
            code: this.yzmcode ,  // 验证码
            source: 2,
        }
        $.ajax({
            type: 'post',
            headers: {clientId:this.client,Authorization: 'Basic d2ViX2FwcDo='},
           // url: this.action.uaa + 'oauth/token',
            url: this.action.uaa + 'apid/member/login',
            data: logindata ,
            success: (res) => {
                if(res.err == 'SUCCESS'){ // 登录成功
                    _self.submitflage = false ;
                    this.setCookie("access_token", res.data.access_token);  // 把登录token放在cookie里面
                    // this.setCookie("username", this.username);  // 把登录用户名放在cookie里面
                    this.setCookie("username", res.data.username);  // 把登录用户名放在cookie里面
                    this.setCookie('acType',res.data.acType);   //把玩家类型放在cookie里面
                    this.$refs.autoCloseDialog.open('登录成功','','icon_check','d_check') ;
                      setTimeout(function () {
                          window.location = '/';
                          // _self.$router.push('');
                       },300)
                }else{
                    _self.submitflage = false ;
                    this.$refs.autoCloseDialog.open(res.cnMsg) ;
                    this.switchYzmcode()
                }

               this.$nextTick(function () {

               })
            },
            error: function () {
                _self.submitflage = false ;
            }
        });
    },
  }

}
</script>
<style type="text/css">
  

</style>