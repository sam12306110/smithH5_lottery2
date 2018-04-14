<template>
    <div v-if="show" class="modal m14">
        <div class="m_content">
            <h2>提示<a href="javascript:;" @click="close()"></a></h2>
            <div class="content danger">
                <div>
                    <img src="/static/frist/images/page/status03.svg">
                </div>游客不能访问该功能，是否注册会员？
            </div>
            <div class="action">
                <a class="new_btn" href="javascript:;" @click="close()"><span>取消</span></a><a class="new_btn ok" href="javascript:;"  @click="goReg()"><span>确定</span></a>
            </div>
        </div>
    </div>
</template>

<style>
    .modal{
        display: block;
        z-index: 1000;
    }
</style>

<script>
import Mixin from '@/Mixin'
// import $ from "jquery";

export default {
    name: 'Confirm',
    mixins:[Mixin],
    data () {
        return {
            show:false,
        }
    },
    methods:{
       open:function () {
           this.show=true
       },
        //关闭弹窗
        close:function(e){
            this.show = false;
        },
        goReg:function () {
            var _self = this;
            this.loginOut('test');
            setTimeout(function(){
                _self.$router.push('/reg')
                // window.location = '/reg' 

            },500)
        },

    }
}
</script>

<style scoped>
</style>