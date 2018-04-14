<template>
    <div id="pa_con" class="so-con warp ">
        <header id="pa_head" class="new_header">
            <div class="left">
                <router-link :to="'/'" >
                    <span class="icon icon_back"></span>
                </router-link>
            </div>
            <h2 class="center title_name">{{copyTitle}}</h2>
            <div class="right"></div>
        </header>
        <div class="content">
            <div v-html="copyContent" class="about_area">
                <!--<p><strong >一、注册与登陆</strong></p>-->
                <!--<p> 为感谢广大玩家长期以来对《百乐彩》的支持，本平台特为-->
                    <!--广大玩家举行网银、微信、支付宝冲10送10活动。</p>-->
                <!--<p><strong>二、游戏玩法</strong></p>-->
                <!--<p>为感谢广大玩家长期以来对《百乐彩》的支持，本平台特为-->
                    <!--广大玩家举行移动、联通、电信充值卡、盛大卡冲10送3活-->
                    <!--动。</p>-->

                <!--<p>  活动时间：2017.12.17【00:00】~2016.12.17【24:00】</p>-->

                <!--<p>  活动内容：活动期间使用移动、联通、电信充值卡、盛大卡-->
                    <!--进行充值，充值成功后除了获得相应数量的金豆外，还会获-->
                    <!--赠额外的银豆。赠送比例30%！例：充值10元可得10金豆-->
                    <!--和额外赠送的30000银豆。</p>-->

                <!--<p>  注意：本平台为绿色休闲娱乐平台，严禁以各种方式倒卖游-->
                    <!--戏币，一旦发现将做封号处理，希望广大玩家配合监督，谢-->
                    <!--谢支持。</p>-->
                <!--<p><strong>三、开奖方式</strong></p>-->
                <!--<p>为感谢广大玩家长期以来对《百乐彩》的支持，本平台特为-->
                    <!--广大玩家举行移动、联通、电信充值卡、盛大卡冲10送3活-->
                    <!--动。</p>-->

                <!--<p> 活动时间：2017.12.17【00:00】~2016.12.17【24:00】</p>-->

                   <!--<p> 活动内容：活动期间使用移动、联通、电信充值卡、盛大卡-->
                    <!--进行充值，充值成功后除了获得相应数量的金豆外，还会获-->
                    <!--赠额外的银豆。赠送比例30%！例：充值10元可得10金豆-->
                       <!--和额外赠送的30000银豆。</p>-->

                    <!--<p>注意：本平台为绿色休闲娱乐平台，严禁以各种方式倒卖游-->
                    <!--戏币，一旦发现将做封号处理，希望广大玩家配合监督，谢谢</p>-->
            </div>
        </div>

        <FooterNav />

    </div>
</template>

<script>
// import $ from "jquery";
import Mixin from '@/Mixin'
// import AutoCloseDialog from '@/components/publicTemplate/AutoCloseDialog'
import FooterNav from '@/components/Footer'

export default {
  name: 'about',
  mixins:[Mixin],
  components: {
   // AutoCloseDialog,
      FooterNav ,
  },
    data: function() {
        return {
            copyTitle:'',
            copyContent:''
        }
    },
  mounted:function() {
      $('html,body').css('overflow-y','scroll' )  ;
      //scrollTo(0,0); // 回到顶部
      document.documentElement.scrollTop = document.body.scrollTop=0; // 回到顶部
      this. getCopyright('1','BT01')
  },
  methods: {

}

}
</script>
<style>
    strong{
        color:#b41a17;
    }
</style>