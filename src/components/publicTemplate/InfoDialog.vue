<template>
  <div v-if="show" class="modal m12 publicDialog" @click="close">
      <div class="m_content">
          <h2 class="noclose">{{typeStr}}<a></a></h2>
          <div class="content danger">
              <div>
                  <!--<img :src="'/static/frist/images/pop/'+ (typeStr || 'title_end') +'.png'">-->
                  <div class="tip_icon"><img src="/static/frist/images/page/status03.svg"></div>
              </div>
              {{content}}
          </div>
      </div>
  </div>
</template>

<script>
    import store from './../../_vuex/store'
  
export default {
  name: 'InfoDialog',
  props:['text'],
  data () {
    return {
      delay:2000,
      content:'',
      show:false,
      typeStr:'',
        // text:'请设置消息.'
    }
  },
  mounted:function(){
    this.content = this.text;
  },
  methods:{
    //打开弹窗
    open:function(text, title_tip){
        this.content = text;
        this.show = true;
        this.typeStr = title_tip;
        setTimeout(() => this.close(), this.delay);
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
    /* .publicDialog { display: block;
                    margin-top: 6rem;
                  } */

</style>