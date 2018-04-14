<template>
    <div id="pa_con" class="so-con warp ">
        <header id="pa_head" class="new_header">
            <div class="left">
                <a href="javascript:;" @click="goBack">
                    <span class="icon icon_back"></span>
                </a>
            </div>
            <h2 class="center title_name">欢迎加入</h2>
            <div class="right"></div>
        </header>
        <div class="pa_content">
            <div class="info_area">
                <div class="info_top">
                    <div class="account">
                        <a href="javascript:;">
                            <!-- <h2 class="ui header center aligned">
                                <div class="portrait">
                                    <div class="portrait_outline"></div>
                                    <div class="user_portrait"></div>
                                </div>
                            </h2>-->
                            <div class="user_name">
                                <span class="icon icon_user2"></span>
                                <strong>{{getCookie('username')}}</strong>
                                <div class="purse">
                                    <span class="icon icon_money2"></span>
                                    <div class="so-in-top-sum">
                                        {{getCookie('membalance')}}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="info_mid">
                    <div>
                        <div class="">
                            <a class="new_btn" href="javascript:;" @click="CheckDemoPlay('TK')"><span class="midunm">提款</span></a>
                        </div>
                        <div class="">
                            <a class="new_btn ok" href="javascript:;" @click="CheckDemoPlay('CZ')"><span class="midunm">充值</span></a>
                        </div>
                    </div>
                </div>
                <div class="info_bot">
                    <ul>
                        <li>
                            <router-link class="btn_icon" to="/lobbyTemplate/agent">
                                <span class="icon_account icon_join_1"></span>
                                <span>代理加盟</span>
                                <span class="icon icon_arrow_dark"></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link class="btn_icon" to="/lobbyTemplate/tutorial">
                                <span class="icon_account icon_join_2"></span>
                                <span>新手教程</span>
                                <span class="icon icon_arrow_dark"></span>
                            </router-link>
                        </li>
                        <li>
                            <router-link class="btn_icon" to="/lobbyTemplate/about">
                                <span class="icon_account icon_join_3"></span>
                                <span>关于我们</span>
                                <span class="icon icon_arrow_dark"></span>
                            </router-link>
                        </li>
                    </ul>

                </div>
            </div>


        </div>
        <Confirm ref="confirm" />
        <FooterNav/>
    </div>
</template>

<script>
// import $ from "jquery";
import Mixin from '@/Mixin'
// import AutoCloseDialog from '@/components/publicTemplate/AutoCloseDialog'
import FooterNav from '@/components/Footer'
import Confirm from '@/components/publicTemplate/Confirm'

export default {
  name: 'join',
  mixins:[Mixin],
  components: {
   // AutoCloseDialog,
      FooterNav ,
      Confirm
  },
    data: function() {
        return {

        }
    },
  mounted:function() {
      $('html,body').css('overflow-y','scroll' )  ;
      //scrollTo(0,0); // 回到顶部
      document.documentElement.scrollTop = document.body.scrollTop=0; // 回到顶部
  },
  methods: {
      //判断是否为游客,
      CheckDemoPlay:function (cla) {
          var _self =this;
          var acType=_self.getCookie('acType');
          if(acType==2){
              _self.$refs.confirm.open();
              return
          }
          if(cla=='CZ'){
              // window.location = '/lobbyTemplate/deposit' ;
              _self.$router.push('/lobbyTemplate/deposit')
          }
          if(cla=='TK'){

              _self.$router.push('/lobbyTemplate/Withdrawals')

              // window.location = '/lobbyTemplate/Withdrawals' ;
          }
      },
}

}
</script>