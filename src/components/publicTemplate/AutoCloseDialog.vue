<template>
    <div v-if="show" class="modal publicDialog" @click="close">
        <div class="m_content">
            <!--<img :src="'/static/frist/images/pop/'+ (typeStr ||'title_tip') +'.png'">-->
            <h2>提示</h2>
            <div class="tip_icon"><img :src="'/static/frist/images/page/'+(typelogo || 'status03')+'.svg'"></div>
            <p :class="(contenclas || 'd_danger')">{{content}}</p>
        </div>
    </div>

</template>


<script>
    import store from './../../_vuex/store'


export default {
  name: 'AutoCloseDialog',
  props:['text', 'type'],
  data () {
    return {
      delay:2000,
      show:false,
      content:'',
      typeStr:'',
      typelogo:'',
      contenclas:'',
    }
  },
  mounted:function() {
    this.typeStr = this.type;
  },
  methods:{
    //打开弹窗 text 提示文案，title_tip 提示背景标题 , typelogo 提示logo ,对应的类 cla
    open:function(text, title_tip,typelogo,cla){
      this.content = text;
      this.typeStr = title_tip;
      this.typelogo = typelogo;
      this.contenclas = cla;
      this.show = true;
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
    .publicDialog { display: block;
                    position: fixed;
                    z-index: 1000;
                  }
    /* .so-tip-pop > div{
                    border:none;
                    width: 8.5rem;
                    height: 5rem;
                  } */
    /* .so-tip-pop img{
                    width: 6.5rem;
                    margin-top: 1rem;
    } */
    /* .so-tip-pop img:nth-child(2){
                    max-width: 1rem;
                    margin-top:-.3rem;
                  } */

</style>