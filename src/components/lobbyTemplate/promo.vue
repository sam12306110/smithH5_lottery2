<template>
    <div id="pa_con" class="so-con warp body_bg">
        <header id="pa_head" class="new_header">
            <div class="left">
                <router-link :to="'/'">
                    <span class="icon icon_back" id='propBack'></span>
                </router-link>
            </div>
            <h2 class="center title_name">优惠活动</h2>
            <div class="right"></div>
        </header>
        <div class="pa_content">
            <div class="promo_area">
                <ul class="promo_list" v-for="list in banner" @click="setClass($event,list.cid)" >
                    <li>
                        <h3>{{list.title}}</h3>
                        <img :src="list.titlePic">
                        <!--20171220 新增优惠详情-->
                        <div class="promo_detail" v-html="content">

                            <!--<p>静态测试文字</p>-->
                            <!--<p>银行转账充值100元起，可获1%存款优惠。</p>-->
                            <!--<p>存1000元赠10元，次次存次次送。</p>-->

                        </div>
                        <p class="btn_detail"><a href="javascript:;"><span>查看详情</span></a></p>
                        <!--<p class="btn_detail"><a href="javascript:;" @click="setCid($event)" class="" :data-val="list.cid" ><span>查看详情</span></a></p>-->
                        <!--end 20171220 新增优惠详情-->
                    </li>
                </ul>
                <!--<ul class="promo_list">-->
                    <!--<li>-->
                        <!--<img src="../../../static/frist/images/banner/promo-1.jpg">-->
                        <!--<h3>更多热门彩种 即将上线</h3>-->
                        <!--<p><a href="promo_content" class="new_btn"><span>查看详情</span></a></p>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<img src="../../../static/frist/images/banner/promo-2.jpg">-->
                        <!--<h3>支付系统 火爆升级</h3>-->
                        <!--<p><a href="promo_content" class="new_btn"><span>查看详情</span></a></p>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<img src="../../../static/frist/images/banner/promo-3.jpg">-->
                        <!--<h3>权威信誉担保 公平公正公开</h3>-->
                        <!--<p><a href="promo_content" class="new_btn"><span>查看详情</span></a></p>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<img src="../../../static/frist/images/banner/promo-4.jpg">-->
                        <!--<h3>彩球掉线 领取补偿金</h3>-->
                        <!--<p><a href="promo_content" class="new_btn"><span>查看详情</span></a></p>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<img src="../../../static/frist/images/banner/promo-5.jpg">-->
                        <!--<h3>完成有效投注 存款赠送100%</h3>-->
                        <!--<p><a href="promo_content" class="new_btn"><span>查看详情</span></a></p>-->
                    <!--</li>-->
                <!--</ul>-->
            </div>


        </div>

    </div>
</template>
<style>

</style>
<script>
// import $ from "jquery";
import Mixin from '@/Mixin'


export default {
  name: 'promo',
  mixins:[Mixin],
  components: {

  },
  data: function() {
        return {
            banner:[],
            cid:'',
            content:'',
            title:'' ,
            titlePic:''
        }
    },
  created: function() {
    },
  mounted:function() {
      $('html,body').css('overflow-y','scroll' );
      document.documentElement.scrollTop = document.body.scrollTop=0; // 回到顶部

      this.getActivity();
     // this.setCid();
  },
  methods: {
      //获得优惠活动接口
      getActivity : function () {
          var _self=this;
          $.ajax({
              type:'get',
              url: _self.action.forseti + 'apid/cms/activity',
              data:{},
              success:(res)=>{
                 if(res.data.rows){
                     var len=res.data.rows.length;
                     var listWe=[];
                     for(var i=0;i<len;i++){
                         res.data.rows[i].titlePic=_self.action.picurl+ res.data.rows[i].titlePic+'/0';

                     }
                     _self.banner=res.data.rows;
                 }
              },
              err:(res)=>{

              }
          })
      },
      //选取详情传递cid;
//      setCid:function (e) {
//              var $src = $(e.currentTarget);
//              var val = $src.data('val');
//              if(val){
//              localStorage.setItem('Cid',val);
//              window.location = '/lobbyTemplate/promo_content' ;
//             }
//      },
      setClass:function (e,cid) {
          var $src = $(e.currentTarget);
          $src.toggleClass('active')
              .siblings()
              .removeClass('active');
          this.getContent(cid)
      },
      getContent:function (cid) {
          var _self=this;
          $.ajax({
              type:'get',
              url: _self.action.forseti + 'apid/cms/activityInfo',
              data:{cid:cid},
              success:(res)=>{
                  if(res){
                      _self.titlePic=_self.action.picurl+ res.data.titlePic+'/0';
                      _self.title=res.data.title;
                      _self.content=res.data.content;
                  }
              }
          })

      }
  }
}
</script>
<style scoped>

    #propBack {
        display: inline-block;
        padding-right: 1rem;
    }


</style>