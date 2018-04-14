
<template>
    <div v-if="show" class="modal m09 publicDialog" @click="close">
        <div class="m_content">
            <!-- <img class="bet_ok" src="/static/frist/images/pop/ok_light.png"> -->
            <h2 class="noclose">下注成功<a></a></h2>
            <div class="content check">
                <div>
                    <!--<img src="/static/frist/images/pop/title_bet_ok.png">-->
                    <div class="tip_icon"><img src="/static/frist/images/icon_check.svg"></div>
                </div>
                您已成功支付<br/>请随时关注开奖信息！
                
            </div>
        </div>
    </div>

</template>


<script>

    import store from './../../_vuex/store'

export default {
  name: 'BetSuccessfulDialog',
  data () {
    return {
      show:false,
    }
  },
  methods:{
    //打开弹窗
    open:function(){
      this.show = true;
        setTimeout(() => this.close(), 3000);
    },
    //关闭弹窗
    close:function(e){
      this.show = false;
        this.$store.commit('Number')
      
    }
  }
}
</script>
<style scope>
    /* .publicDialog { display: block; } */
</style>


