<template>
    <div id="pa_con" class="so-con warp">
        <header id="pa_head" class="new_header">
            <div class="left">
                <a href="javascript:;">

                </a>
            </div>
            <h2 class="center title_name">个人中心</h2>
            <div class="right"></div>
        </header>
        <div class="pa_content">
            <div class="info_area">
                <div class="info_top">
                    <div class="account">
                        <a  href="javascript:;" @click="CheckDemoPlay('ZH')">
                            <!--<h2 class="ui header center aligned">
                                <div class="portrait">
                                     <div class="portrait_outline"></div> 
                                    <div class="user_portrait"></div>
                                </div>
                            </h2>-->
                            <div class="user_name">
                                <div class="">
                                    <span class="icon icon_user2"></span>
                                    <strong v-if="!demoName">{{userLogin}}</strong>
                                    <strong v-if="demoName">{{getCookie('username')}}</strong>
                                </div>
                                <div class="purse">
                                    <span class="icon icon_money2"></span>
                                    <div class="so-in-top-sum">
                                       {{fortMoney(roundAmt(Money), 2)}}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="info_mid">
                    <div>
                        <div class="">
                            <a class="new_btn" href="javascript:;" @click="CheckDemoPlay('TK')" ><span class="midunm">提款</span></a>
                        </div>
                        <div class="">
                            <a class="new_btn ok" href="javascript:;" @click="CheckDemoPlay('CZ')"><span class="midunm">充值</span></a>
                        </div>
                    </div>
                </div>
                <div class="info_bot">
                    <ul>
             <!--           <li>
                            <a class="btn_icon" href="./analysis">
                                <div class="icon">
                                    <div>
                                        <i class="info01"></i>
                                    </div>
                                </div>
                                盈亏分析
                            </a>
                        </li>-->
                        <li>
                            <router-link to="/lobbyTemplate/acdetial" class="btn_icon">
                                <span class="icon_account icon_info_1"></span>
                                <span>帐户明细</span>
                                <span class="icon icon_arrow_dark"></span>
                            </router-link>
                        </li>
                        <li>
                            <a class="btn_icon "  href="javascript:;" @click="CheckDemoPlay('ZH')">
                                <span class="icon_account icon_info_2"></span>
                                <span>帐户管理</span>
                                <span class="icon icon_arrow_dark"></span>
                            </a>
                        </li>
                      <!--  <li>
                            <router-link class="btn_icon" :to="'/lobbyTemplate/notification'">
                                <div class="icon">
                                    <div> <i class="info04"></i></div>
                                </div>
                                个人消息
                            </router-link>
                        </li>-->
                        <li>
                            <a class="btn_icon" :href="custUrl" target="_blank" >
                                <span class="icon_account icon_info_3"></span>
                                <span>在线客服</span>
                                <span class="icon icon_arrow_dark"></span>
                            </a>
                        </li>
                        <!--<li>-->
                            <!--<router-link class="btn_icon" :to="'/lobbyTemplate/join'">-->
                                <!--<div class="icon_account icon_info_4"></div>-->
                                <!--<span>欢迎加入</span>-->
                                <!--<span class="icon icon_arrow_dark"></span>-->
                            <!--</router-link>-->
                        <!--</li>-->
                    </ul>

                </div>
            </div>

        </div>
        <FooterNav />
        <Confirm ref="confirm" />
        <!--<AutoCloseDialog ref="autoCloseDialog" text=" " type="" />-->
    </div>
</template>

<style>
    .info_top .account >a{
         height:100%;
    }
</style>
<script>
// import $ from "jquery";
import Mixin from '@/Mixin'
import AutoCloseDialog from '@/components/publicTemplate/AutoCloseDialog'
import FooterNav from '@/components/Footer'
import Confirm from '@/components/publicTemplate/Confirm'
export default {
  name: 'info',
  mixins:[Mixin],
  components: {
    AutoCloseDialog,
      FooterNav ,
      Confirm
  },
    data: function() {
        return {
            demoName:false,
            haslogin:false ,
            Money:'',
            acType:'',
            memberId:'',
            userLogin:'',
            custUrl:''
        }
    },
    created:function () {
        var _self =this ;
            _self.ShowDemo();
            _self.haslogin = this.ifLogined();
            if (!_self.haslogin) {
                // _self.$refs.autoCloseDialog.open('请先登录！') ;
                _self.$router.push('/login')  ;
            }
            _self.getUserInfo();
    },
    mounted:function() {
      $('html,body').css('overflow-y','scroll' )  ;
//        this.getCustom()
        this.custUrl=localStorage.getItem('Url');
  },
    methods: {
      //获取用户信息
      getUserInfo: function () {
          var _self = this;
          $.ajax({
              type: 'get',
              headers: {'Authorization': 'bearer ' + _self.getAccessToken,},
              dataType: 'json',
              url: _self.action.uaa + 'api/data/member/info',
              data: {},
              success: (res) => {
                  if(res.data){
                      _self.memberId = res.data.memberId;
                      _self.acType = res.data.acType;
                      _self.userLogin=res.data.login;
                      _self.getBalance(_self.memberId, _self.acType)
                  }
              },
              error: (e) => {
                  _self.errorAction(e) ;
              }
          })
      },
      //获取用户余额
      getBalance: function (id,type) {
          var _self = this;
          var BaData = {
              memberId:id ,
              acType:type,
          };
          $.ajax({
              type: 'get',
              headers: {'Authorization': 'bearer ' + _self.getAccessToken,},
              dataType: 'json',
              url: _self.action.hermes + 'api/balance/get',
              data: BaData,
              success: (res) => {
                  if(!res.data){ // 没有数据返回
                      res.data = {
                          balance:0 ,
                          payoff:0 ,
                      }
                  }
                  _self.Money = res.data.balance;
                  _self.setCookie('membalance',  this.fortMoney(this.roundAmt(_self.Money), 2) )


              },
              error: (e) => {
              _self.errorAction(e) ;
              }
          })
      },
      //判断是否为游客,
      CheckDemoPlay:function (cla) {
          var _self =this;
          var acType=_self.getCookie('acType');
          if(acType==2){
              _self.$refs.confirm.open();
              return
          }
          if(cla=='CZ'){
              _self.$router.push('/lobbyTemplate/deposit')
          }
          if(cla=='TK'){
              _self.$router.push('/lobbyTemplate/Withdrawals')

          }
          if(cla=='ZH'){

              _self.$router.push('/lobbyTemplate/info_data')

          }
      },
      //游客显示
      ShowDemo:function () {
          var _self=this;
          var acType=_self.getCookie('acType');
          if(acType==1){
              _self.demoName=false;
          }else{
              _self.demoName=true;
          }
      }
  }
}
</script>