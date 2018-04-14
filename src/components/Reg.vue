<template>
    <div id="pa_con" class="so-con warp ">
        <header id="pa_head" class="new_header">
            <div class="left">
                <router-link :to="'/'" class="before-add">
                    <span class="icon icon_back"></span>
                </router-link>
                <a href="javascript:;"  class="after-add" @click="lastAction()" style="display: none ;">
                    <span class="icon icon_back"></span>
                </a>
            </div>
            <h2 class="center title_name">注册</h2>
            <div class="right"></div>
        </header>
        <div class="content pa_content">
            <div class="reg page_box">
                <div class="new_panel login_area">
                    <div class="new_panel_top"></div>
                    <div class="new_panel_center">
                        <div class="new_panel_tip"><span class="icon icon_info"></span>为了您的资金安全，请使用真实资料！</div>
                        <div class="before-add">
                            <form>
                            <!-- <fieldset>
                                    <div class="form_g account">
                                        <legend></legend>
                                        <input type="text" placeholder="请输入推荐人帐号" v-model="tjrusername" autocomplete="off" class="tjrusername" @input="checkUserName(tjrusername,'tjrusername')">
                                        <i class="close close1" @click="ClearInput('close1','tjrusername')"></i>
                                    </div>
                                    <label class="error-message "></label>
                                </fieldset>-->
                                <fieldset v-if="!!accountObj.ifView">
                                    <div class="form_g account" >
                                        <legend>帐号 </legend>
                                        <input type="text" placeholder="请输入帐号" v-model="username" autocomplete="off"
                                            class="username" @input="checkUserName(username,'username')" @blur="CheckAccount()" >
                                        <i class="close close2" @click="ClearInput('close2','username')"></i>
                                    </div>
                                    <label class="error-message "></label>
                                </fieldset>
                                <div class="" v-if="!!passwordObj.ifView">
                                    <fieldset  v-if="show">
                                        <div class="form_g password">
                                            <legend>登录密码</legend>
                                            <input type="password" placeholder="请输入密码" v-model="userPd" autocomplete="off" class="password" @input="checkpassword(userPd,'password')" >
                                            <i class="eye "  @click="showPassword('eye1')"></i>
                                        </div>
                                        <label class="error-message "></label>
                                    </fieldset>
                                    <fieldset v-if="!show">
                                        <div class="form_g password">
                                            <legend>登录密码 </legend>
                                            <input type="text" placeholder="请输入密码" v-model="userPd" autocomplete="off" class="password" @input="checkpassword(userPd,'password')" >
                                            <i class="eye active" @click="showPassword('act1')"></i>
                                        </div>
                                        <label class="error-message "></label>
                                    </fieldset>
                                </div>
                                 <div class="" v-if="!!confirmpasswordObj.ifView">
                                     <fieldset  v-if="showC">
                                         <div class="form_g password">
                                             <legend>确认密码</legend>
                                             <input type="password" placeholder="请输入确认密码" autocomplete="off" v-model="confirmpassword" class="confirmpassword" @input="checkIsEqual('.confirmpassword')" >
                                             <i class="eye " @click="showPassword('eye2')"></i>
                                         </div>
                                         <label class="error-message "></label>
                                     </fieldset>
                                     <fieldset  v-if="!showC">
                                         <div class="form_g password">
                                             <legend>确认密码</legend>
                                             <input type="text" placeholder="请输入确认密码" autocomplete="off"  v-model="confirmpassword" class="confirmpassword" @input="checkIsEqual('.confirmpassword')" >
                                             <i class="eye  active" @click="showPassword('act2')"></i>
                                         </div>
                                         <label class="error-message "></label>
                                     </fieldset>
                                 </div>
                                <div class="" v-if="withPasswordObj.ifView">
                                    <fieldset  v-if="showB">
                                        <div class="form_g password">
                                            <legend>取款密码</legend>
                                            <input type="password" placeholder="请输入4位数字取款密码" maxlength="4" v-model="withPassword" class="withPassword" @input="checkNum(withPassword,'withPassword')" >
                                            <i class="eye " @click="showPassword('eye3')"></i>
                                        </div>
                                        <label class="error-message "></label>
                                    </fieldset>
                                    <fieldset  v-if="!showB">
                                        <div class="form_g password">
                                            <legend>取款密码</legend>
                                            <input type="text" placeholder="请输入4位数字取款密码" maxlength="4" v-model="withPassword" class="withPassword" @input="checkNum(withPassword,'withPassword')" >
                                            <i class="eye  active" @click="showPassword('act3')"></i>
                                        </div>
                                        <label class="error-message "></label>
                                    </fieldset>
                                </div>

                               <fieldset v-if="!!realynameObj.ifView">
                                    <div class="form_g account">
                                        <legend>真实姓名</legend>
                                        <input type="text" placeholder="请输入真实姓名" autocomplete="off" class="realyname" v-model="realyname" @input="checkrealyName(realyname,'realyname')" >
                                        <i class="close close3" @click="ClearInput('close3','realyname')"></i>
                                    </div>
                                    <label class="error-message "></label>

                                </fieldset>


                                <fieldset v-if="!!phoneObj.ifView">
                                    <div class="form_g phone">
                                        <legend>手机号码 </legend>
                                        <input type="text" autocomplete="off" maxlength="11" placeholder="请输入手机号码" class="telephone" v-model="telephone" @input="checktelphone(telephone,'telephone')" >
                                        <i class="close close4" @click="ClearInput('close4','telephone')"></i>
                                    </div>
                                    <label class="error-message "></label>
                                </fieldset>
                                <fieldset v-if="!!bankselectObj.ifView">
                                    <div class="form_g text ">
                                        <legend style="width: 1.6rem">选择银行</legend>
                                        <select name="" v-model="bankId" class="bankselect">
                                            <option :value="bank.id" v-for="bank in bankList" :data-code="bank.bankCode" >{{bank.bankName}}</option>
                                        </select>
                                        <span class="icon icon_arrow_down"></span>
                                    </div>
                                </fieldset>
                                <fieldset v-if="!!bankAddObj.ifView">
                                    <div class="form_g ">
                                        <legend>开户行</legend>
                                        <input type="text" name="bankAdd" v-model="bankAdd"  class="bankAdd" placeholder="如:北京市海淀区中关村支行"
                                               @input="checkBankAdd(bankAdd,'bankAdd')">
                                        <i class="close close1" @click="ClearInput('close1','bankAdd')"></i>
                                    </div>
                                    <label class="error-message"></label>
                                </fieldset>
                                <fieldset v-if="!!bankNumObj.ifView">
                                    <div class="form_g ">
                                        <legend>银行卡号</legend>
                                        <input type="text" name="bankNum" v-model="bankNum" class="bankNum" placeholder="请输入取款银行卡号"
                                               @input="checkBankNum(bankNum,'bankNum')">
                                        <i class="close close3" @click="ClearInput('close3','bankNum')"></i>
                                    </div>
                                    <label class="error-message"></label>
                                </fieldset>
                                <fieldset>
                                    <div class="form_g password ">
                                        <legend>验证码</legend>
                                        <input type="text" placeholder="请输入验证码" autocomplete="off" maxlength="4"  v-model="yzmcode">
                                        <img :src="verImgCode" alt="" @click="switchYzmcode()">
                                    </div>
                                    <label class="error-message "></label>
                                </fieldset>

                                <div class="">
                                    <a class="new_btn" href="javascript:;" @click="registerAction()"><span class="big">注册</span></a>
                                </div>

                            </form>
                          <!--   <div class="">
                                <a class="new_btn" href="javascript:;" @click="nextAction()"><span class="big">下一步</span></a>
                            </div> -->
                        </div>

                        <div class="after-add" style="display: none;">
                            <fieldset>
                               <div class="form_g account">
                                    <legend>真实姓名</legend>
                                    <input type="text" placeholder="请输入真实姓名" autocomplete="off" class="realyname" v-model="realyname" @input="checkrealyName(realyname,'realyname')">
                                    <i class="close close3" @click="ClearInput('close3','realyname')"></i>
                                </div>
                                <label class="error-message "></label>

                            </fieldset>
                            <fieldset v-if="showB">
                              <!--   <div class="form_g password">
                                    <legend>支付密码</legend>
                                    <input type="password" placeholder="请输入4位数字支付密码" maxlength="4" v-model="withPassword" class="withPassword" @input="checkNum(withPassword,'withPassword')">
                                    <i class="eye active eye3" @click="showPassword('eye3')"></i>
                                </div>
                                <label class="error-message "></label> -->
                                <!--<div class="form_g password text pay_password">-->
                                    <!--<legend>取款密码</legend>-->
                                    <!--<div class="select_inline">-->
                                    <!--<select autocomplete="off" v-model="withpassword1" class="withpassword1">-->
                                        <!--<option>-</option>-->
                                        <!--<option>0</option>-->
                                        <!--<option>1</option>-->
                                        <!--<option>2</option>-->
                                        <!--<option>3</option>-->
                                        <!--<option>4</option>-->
                                        <!--<option>5</option>-->
                                        <!--<option>6</option>-->
                                        <!--<option>7</option>-->
                                        <!--<option>8</option>-->
                                        <!--<option>9</option>-->
                                    <!--</select>-->
                                    <!--</div>-->
                                    <!--<div class="select_inline">-->
                                    <!--<select  v-model="withpassword2" class="withpassword2">-->
                                        <!--<option>-</option>-->
                                        <!--<option>0</option>-->
                                        <!--<option>1</option>-->
                                        <!--<option>2</option>-->
                                        <!--<option>3</option>-->
                                        <!--<option>4</option>-->
                                        <!--<option>5</option>-->
                                        <!--<option>6</option>-->
                                        <!--<option>7</option>-->
                                        <!--<option>8</option>-->
                                        <!--<option>9</option>-->
                                    <!--</select>-->
                                    <!--</div>-->
                                    <!--<div class="select_inline">-->
                                    <!--<select v-model="withpassword3" class="withpassword3">-->
                                        <!--<option>-</option>-->
                                        <!--<option>0</option>-->
                                        <!--<option>1</option>-->
                                        <!--<option>2</option>-->
                                        <!--<option>3</option>-->
                                        <!--<option>4</option>-->
                                        <!--<option>5</option>-->
                                        <!--<option>6</option>-->
                                        <!--<option>7</option>-->
                                        <!--<option>8</option>-->
                                        <!--<option>9</option>-->
                                    <!--</select>-->
                                    <!--</div>-->
                                    <!--<div class="select_inline">-->
                                    <!--<select v-model="withpassword4" class="withpassword4">-->
                                        <!--<option>-</option>-->
                                        <!--<option>0</option>-->
                                        <!--<option>1</option>-->
                                        <!--<option>2</option>-->
                                        <!--<option>3</option>-->
                                        <!--<option>4</option>-->
                                        <!--<option>5</option>-->
                                        <!--<option>6</option>-->
                                        <!--<option>7</option>-->
                                        <!--<option>8</option>-->
                                        <!--<option>9</option>-->
                                    <!--</select>-->
                                    <!--</div>-->
                                    <!--<input type="number" maxlength="4" size="1" placeholder="请输入4位数字密码"> -->
                                <!--</div>-->
                                <!-- <label class="red">请输入4~15位帐号</label> -->
                            </fieldset>
                            <fieldset  v-if="!showB">
                                <div class="form_g password">
                                    <legend>取款密码</legend>
                                    <input type="text" placeholder="请输入4位数字取款密码" maxlength="4" v-model="withPassword" class="withPassword" @input="checkNum(withPassword,'withPassword')">
                                    <i class="eye " @click="showPassword('act3')"></i>
                                </div>
                                <label class="error-message "></label>
                            </fieldset>
                            <fieldset>
                                <div class="form_g phone">
                                    <legend>手机号码</legend>
                                    <input type="text" autocomplete="off" maxlength="11" placeholder="请输入手机号码" class="telephone" v-model="telephone" @input="checktelphone(telephone,'telephone')">
                                    <i class="close close4" @click="ClearInput('close4','telephone')"></i>
                                </div>
                                <label class="error-message "></label>
                            </fieldset>

<!-- 
                            <fieldset>
                                <div class="form_g password ">
                                    <legend>验证码</legend>
                                    <input type="text" placeholder="请输入验证码" autocomplete="off" maxlength="4"  v-model="yzmcode">
                                    <img :src="verImgCode" alt="" @click="switchYzmcode()">
                                </div>
                                <label class="error-message "></label>
                            </fieldset>

                            <div class="">
                                <a class="new_btn" href="javascript:;" @click="registerAction()"><span class="big">注册</span></a>
                            </div> -->



                        </div>
                        <div class="other_link">
                            <span>已有帐号?</span>
                            <a class="text-yellow" href="/login">马上登录</a>
                        </div>
                    </div>
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
        name: 'Reg',
        mixins:[Mixin],
        components: {
            AutoCloseDialog,
        },
        data: function() {
            return {
                tjrusername :'',
                username :'',
                userPd :'',
                confirmpassword :'',
                realyname :'',
                telephone :'',
                yzmcode :'',
                bankId:'',
                bankAdd:"",
                bankNum:'',
                withPassword: '',
                show:true,
                showC:true,
                showB:true,
                verImgCode:'',
                client:'',
                regsubmitflage:false ,
                accountObj:{},
                passwordObj:{},
                phoneObj:{},
                realynameObj:{},
                withPasswordObj:{},
                confirmpasswordObj:{},
                bankList:{},
                bankselectObj:{},
                bankAddObj:{},
                bankNumObj:{},
                bankCode:""
            }
        },
        created:function(){
           this.switchYzmcode() ;
        },
        mounted:function(){
            document.documentElement.scrollTop = document.body.scrollTop=0; // 回到顶部
           this.getReglist('1');
            this.getBankList()


            var u = navigator.userAgent;
            console.log(u, 'uu');
            
        },
        methods:{
            //点击显示密码
            showPassword:function(cla){
                  if(cla=="eye1"){
                      this.show=false
                  }else if(cla=="eye2"){
                      this.showC=false
                  }else if(cla=='eye3'){
                      this.showB=false
                  }else if(cla=="act1"){
                      this.show=true;
                  }else if(cla=="act2"){
                      this.showC=true
                  }else if(cla=='act3'){
                      this.showB=true
                  }
                },
            //清除model数据,cl元素class
            clearVal :function (cl) {

                if(cl=='tjrusername'){
                    this.tjrusername ='';}
                if(cl=='username'){
                    this.username ='';
                }
                if(cl=='bankNum'){
                    this.bankNum='';
                }
                if(cl=='bankAdd'){
                    this.bankAdd='';
                }

                if(cl=='confirmpassword '){
                    this.confirmpassword ='';
                }
                if(cl=='realyname'){
                    this.realyname ='';
                }
                if(cl=='telephone'){
                    this.telephone ='';
                }

            },
            // 下一步
            nextAction:function () {

                document.documentElement.scrollTop = document.body.scrollTop=0; // 回到顶部

                if(!!this.accountObj.ifRequired){
                    if(this.username ==''){
                        this.$refs.autoCloseDialog.open('请输入帐号') ;
                        return false ;
                    }

                }
              if(!!this.passwordObj.ifRequired){
                  if(this.userPd ==''){
                      this.$refs.autoCloseDialog.open('请输入用户密码') ;
                      return false ;
                  }
              }
              if(!!this.confirmpasswordObj.ifRequired){
                  if(this.confirmpassword ==''){
                      this.$refs.autoCloseDialog.open('请输入确认密码') ;
                      return false ;
                  }

              }


                if(this.username==this.tjrusername){
                    this.$refs.autoCloseDialog.open('账号不能与推荐人账号相同') ;
                    return false ;
                }else if(this.confirmpassword != this.userPd){
                    this.$refs.autoCloseDialog.open('两次密码输入不一致');
                    return false ;
                }

                // var falg = $('.error-message').hasClass('red') ;  // 验证不通过，不允许提交
                // if(falg){
                //     return false ;
                // }

                // $('.before-add').hide() ;
                // $('.after-add').show() ;

                // this.registerAction()


            },

            // 返回上一步
            lastAction:function () {
                $('.before-add').show() ;
                $('.after-add').hide() ;
                document.documentElement.scrollTop = document.body.scrollTop=0; // 回到顶部

            },
            // 注册接口 ，除了推荐人，其他必填
            registerAction:function() {

                /*this.nextAction()*/

                var _self = this;
                if(!!this.accountObj.ifRequired){
                    if(this.username ==''){
                        this.$refs.autoCloseDialog.open('请输入帐号') ;
                        return false ;
                    }

                }
                if(!!this.passwordObj.ifRequired){
                    if(this.userPd ==''){
                        this.$refs.autoCloseDialog.open('请输入用户密码') ;
                        return false ;
                    }
                }
                if(!!this.confirmpasswordObj.ifRequired){
                    if(this.confirmpassword ==''){
                        this.$refs.autoCloseDialog.open('请输入确认密码') ;
                        return false ;
                    }
                    if(this.confirmpassword !== this.userPd){
                        this.$refs.autoCloseDialog.open('两次密码输入不一致');
                        return false ;
                    }

                }


               /* if(this.username==this.tjrusername){
                    this.$refs.autoCloseDialog.open('账号不能与推荐人账号相同') ;
                    return false ;
                }else if(this.confirmpassword !== this.password){
                    this.$refs.autoCloseDialog.open('两次密码输入不一致');
                    return false ;
                }*/
                if(_self.regsubmitflage){
                    return false ;
                }
                 /* console.log(!this.phoneObj.ifRequired)*/
                if(!!this.realynameObj.ifRequired){
                    if(this.realyname ==''){
                        this.$refs.autoCloseDialog.open('请输入真实姓名') ;
                        return false ;
                    }
                }
                if(!!this.withPasswordObj.ifRequired){
                    if(this.withPassword ==''|| !this.positiveNum(this.withPassword)){
                        this.$refs.autoCloseDialog.open('请输入4位数字取款密码') ;
                        return false ;
                    }
                }

                 if(!!this.phoneObj.ifRequired){
                     if(this.telephone ==''){
                         this.$refs.autoCloseDialog.open('请输入手机号码') ;
                         return false ;
                     }
                 }

                 if(!!this.bankselectObj.ifRequired){
                     if(_self.bankId==""){
                         _self.$refs.autoCloseDialog.open('请选择银行') ;
                         return false
                     }
                 }
                if (!!this.bankAddObj.ifRequired){
                    if(_self.bankAdd==""){
                        _self.$refs.autoCloseDialog.open('请输入开户行地址') ;
                        return false
                    }
                }
                if(!!this.bankNumObj.ifRequired){
                    if(_self.bankNum==""){
                        _self.$refs.autoCloseDialog.open('请输入银行卡号') ;
                        return false
                    }
                }


               if(this.yzmcode ==''){
                    this.$refs.autoCloseDialog.open('请输入验证码') ;
                    return false ;
                }

                var falg = $('.error-message').hasClass('red') ;  // 验证不通过，不允许提交
                if(falg){
                    return false ;
                }


                _self.regsubmitflage = true ;
                _self.bankCode=$('.bankselect').find("option:selected").data('code') ;
                var logindata = {
                    acType: '1',   //1真钱玩家，2试玩玩家
                    appid: 'bcappid02',    //平台商id，bcappid01 或 bcappid02
                    curType: 'CNY',  //币种，如：CNY
                    referrals: _self.tjrusername ,   // 推荐人
                    login: _self.username ,   // 帐号
                    method: 'mc',   //方法：mc创建会员
                    oddType: 'a',  //盘口，1位字符，预留
                    password: _self.userPd ,  // 用户登录密码
                    realName: _self.realyname ,  // 用户真实姓名
                    mobile: _self.telephone , // 手机号码
                    passwordPay: _self.withPassword ,   //取款密码
                    bankId:_self.bankId,
                    code: _self.yzmcode ,   // 验证码
                    bankCode:_self.bankCode, //银行卡code
                    bankAddress:_self.bankAdd,//银行卡地址
                    bankCard: _self.bankNum,//银行卡号码
                    source: 2,
                }
                $.ajax({
                    type: 'post',
                    headers: {
                        Authorization: 'Basic d2ViX2FwcDo=',
                        clientId: this.client
                    },
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    url: this.action.uaa + 'apid/data/member/checkOrCreateMemberBcbaochi',
                    data: JSON.stringify(logindata) ,
                    success: (res) => {
                        // alert(1)
                        console.log(res)
                        if(res.err =='SUCCESS'){ // 注册成功
                            _self.regsubmitflage = false ;
                            _self.$refs.autoCloseDialog.open('注册成功','','icon_check','d_check') ;
                            _self.setCookie("access_token", res.data.access_token);  // 把登录token放在cookie里面
                            _self.setCookie("acType", res.data.acType);  // 把登录 acType 放在cookie里面
                            _self.setCookie("username", _self.username);  // 把登录用户名放在cookie里面
                            setTimeout(function () {
                                // _self.$router.push('/')    
                                window.location = '/';
                                                         

                            },1000) ;
                        }else{ //code 105 验证码无效
                            // alert(2)
                            _self.regsubmitflage = false ;
                              this.switchYzmcode() ; // 更新验证码
                              this.$refs.autoCloseDialog.open(res.cnMsg) ;
                         }

                    },
                    error: function () {
                        _self.regsubmitflage = false ;
                    }
                });
            },
            switchYzmcode:function () {  //获取验证码；
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
            //自动登录
//            autoLogin :function () {
//                var _self = this ;
//                _self. switchYzmcode()
//                var logindata = {
//                    grant_type: 'password',
//                    username: 'bcappid02|'+_self.username ,
//                    password: _self.password ,
//                    code:_self.code
//                }
//                $.ajax({
//                        type: 'post',
//                        headers: {Authorization: 'Basic d2ViX2FwcDo=',clientId: this.client},
//                        url: this.action.uaa + 'apis/member/login',
//                        data: logindata ,
//                        success: function(res) {
//                        if(res.err == 'SUCCESS'){ // 登录成功
//                            _self.setCookie("access_token", res.data.access_token);  // 把登录token放在cookie里面
//                            _self.setCookie("username", _self.username);  // 把登录用户名放在cookie里面
//                            _self.$refs.autoCloseDialog.open('登录成功','','icon_check','d_check') ;
//                        setTimeout(function () {
//                            window.location = '/' ;
//                        },300)
//                    }else{
//                        _self.$refs.autoCloseDialog.open(res.cnMsg) ;
//                    }
//
//                this.$nextTick(function () {
//
//                })
//            },
//                error: function () {
//
//                }
//            });
//            },
            //验证账户是否存在
            CheckAccount:function () {
                let _self=this;
                let AccData={
                          appid:'bcappid02',
                          login:_self.username
                }
                $.ajax({
                    type: 'post',
                    headers: {Authorization: 'Basic d2ViX2FwcDo='},
                    url: this.action.uaa + 'apid/data/member/check_account',
                    data: AccData ,
                    success:(res)=>{
                        if(res.data==true){
                            _self.$refs.autoCloseDialog.open('用户名重复') ;
                            return false
                        }
                    }
                })
            },


        }


    }
</script>