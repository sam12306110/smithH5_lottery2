<template>
    <div id="pa_con" class="so-con warp ">
        <header id="pa_head" class="new_header">
            <div class="left">
                <router-link :to="'/lobbyTemplate/info'">
                    <span class="icon icon_back"></span>
                </router-link>
            </div>
            <h2 class="center title_name">提款</h2>
            <div class="right"></div>
        </header>
        <div class="pa_content">
            <div class="page_box">
                <div class="new_panel">
                    <div class="new_panel_top"></div>
                    <div class="new_panel_center">
                        <form class="withdrawals_area">
                            <div class="print_data">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>
                                            <li>真实姓名</li>
                                        </th>
                                        <td>{{realName}}</td>
                                    </tr>
                                    <tr>
                                        <th class="bank_card_num">
                                            <li>银行卡号</li>
                                        </th>
                                        <td>
                                            {{bankName}}
                                            <br/> {{bankCard}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <li>余额</li>
                                        </th>
                                        <td class="text-yellow">{{fortMoney(roundAmt(memBalance), 2)}}</td>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                            <fieldset>
                                <div class="form_g text">
                                    <legend>取款金额</legend>
                                    <input type="text" v-model="userMoney"  class="money" :placeholder = 'placeholderLimit' @input = 'checkWithdrawMoneyNow(userMoney,"money")' >
                                    <i class="close close1" @click="ClearInput('close1','money')"></i>
                                </div>
                                <div  v-if = 'showHint' class="withdrawlHint" id="withdrawlHint"> {{hintWord}} </div>

                            </fieldset>
                            <fieldset>
                                <div class="form_g text">
                                    <legend>取款密码</legend>
                                    <input type="text" v-model="cashPassword" class="password" onfocus="this.type='password'" maxlength="4" placeholder="4位数字密码">
                                    <i class="close close2" @click="ClearInput('close1','password')"></i>
                                </div>
                            </fieldset>
                            <div class="">
                                <a class="new_btn" href="javascript:;" @click="WithdrawalsAction()" ><span class="big">确定</span></a>
                            </div>

                        </form>
                    </div>
                </div>
              
            </div>
        </div>
        <FooterNav></FooterNav>
        <AutoCloseDialog ref="autoCloseDialog" text=" " type="" />
    </div>
</template>
<style>

</style>
<script>
// import $ from "jquery";
import Mixin from '@/Mixin'
import FooterNav from '@/components/Footer'
import AutoCloseDialog from '@/components/publicTemplate/AutoCloseDialog'

export default {
  name: 'withdrawals',
  mixins:[Mixin],
  components: {
      AutoCloseDialog,
      FooterNav ,
  },
    data: function() {
        return {
             userMoney:'',
             cashPassword:'',
             memBalance:'',
             realName:'',
             bankName:'',
             bankCard:'',
             bankCode:'',
             bankId:'',
             acType:'',
             memberId:'',
             showHint:false,
             hintWord:'',
             drawMinMoney:'',
             drawMaxMoney:'',
             PaySubmit:false ,//重复提交
             inCorrectMessage:'提款金额必须在范围内',
             placeholderLimit:'提款金额必须在范围内',

        }
    },
    created: function() {
        this.getUserInfo1();
        this.getUserInfo();
    },
  mounted:function() {

      $('html,body').css('overflow-y','scroll' )  ;
      this.getLimit()
  },
  methods: {
      // 检查提款数据并提示

      checkWithdrawMoneyNow:function(userMoney,el){

          var ifInCorrect = this.isPositiveNum( userMoney )
          var defi = ( userMoney<this.drawMinMoney  ||  userMoney> this.drawMaxMoney)
          // var notEnough = (userMoney > 3000000 )
          var notEnough = (userMoney > this.memBalance )

          if(!ifInCorrect){
             this.hintWord = "请输入正确的存款金额"
             this.showHint = true;
          }else{
            this.showHint = false;
            if( notEnough){
                this.showHint = true;
                this.hintWord = '余额不足,请重新输入';
            }else{
                this.showHint = false;
                if(defi){
                  this.showHint = true;
                  this.hintWord = this.inCorrectMessage;
                }else{
                  this.showHint = false;
                }
            }
          }
          if( userMoney == ''  ){
            this.showHint = false;
          }
      },

      //获取限额
    getLimit:function () {
          var _self = this ;
          $.ajax({
              type: 'get',
              headers: {
                  "Authorization": "bearer  " + this.getAccessToken ,
              },
              url: _self.action.uaa + 'api/data/member/discount',
              data: { },
              success: function(res){
                // console.log(res.data.dispCapped)
                // console.log(res.data.dispLower)
                // console.log(!!res)
                _self.drawMaxMoney = Number(res.data.dispCapped)/100;
                _self.drawMinMoney = Number(res.data.dispLower)/100;

                 _self.placeholderLimit = "取款范围"+_self.drawMinMoney+"元~"+_self.drawMaxMoney+"元"

              },
              error: function (e) {
                  _self.errorAction(e) ;
              }
          });
      },

      //清除model数据,cl元素class
      clearVal :function (cl) {

          if(cl=='money'){
              this.userMoney ='';}
          if(cl=='password'){
              this.cashPassword='';
          }

      },
      //获取用户银行账户信息
      getUserInfo: function() {
          var _self = this;
          $.ajax({
              type:'get',
              headers: { 'Authorization': 'bearer ' + _self.getAccessToken ,},
              dataType: 'json',
              url: _self.action.forseti + 'api/payment/memberBank',
              data: { },
              success: (res) => {
                  if(res.data.bindType==null||res.data.bindType==1){
                      window.location = '/lobbyTemplate/withdrawals_bind' ;
                  }
                    _self.realName=res.data.realName;
                    _self.bankName=res.data.bankName;
                    _self.bankCard=res.data.bankCard;
                    _self.bankCode=res.data.bankCode;
                    _self.bankId  =res.data.bankId;
              },
              error: (err) =>{

             }
            })

      },
      //获取用户信息
      getUserInfo1: function () {
          var _self = this;
          $.ajax({
              type: 'get',
              headers: {'Authorization': 'bearer ' + _self.getAccessToken,},
              dataType: 'json',
              url: _self.action.uaa + 'api/data/member/info',
              data: {},
              success: (res) => {

                  _self.memberId = res.data.memberId;
                  _self.acType = res.data.acType;
                  _self.getBalance(_self.memberId, _self.acType)
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
                  _self.memBalance = res.data.balance;
              },
              error: (e) => {
              _self.errorAction(e) ;
              }
          })
      },
      //提款接口
      WithdrawalsAction: function () {
                  var _self=this;

                  if(_self.PaySubmit){
                       return  false;
                  }

                  if(_self.userMoney*100>_self.memBalance){
                      _self.$refs.autoCloseDialog.open('提款余额不足');
                      return
                  }

                  if(_self.userMoney>_self.drawMaxMoney){
                      _self.$refs.autoCloseDialog.open('提款金额必须在范围内');
                      return
                  }

                  if(_self.userMoney< _self.drawMinMoney){
                      _self.$refs.autoCloseDialog.open('提款最低金额为'+_self.drawMinMoney+'元');
                      return
                  }

                  if (_self.userMoney == '' || !_self.positiveNum(_self.userMoney)||_self.userMoney == 0) {
                      _self.$refs.autoCloseDialog.open('请输入正确金额');
                      return false
                  }

                  if(_self.cashPassword==''||! _self.positiveNum(_self.cashPassword)||_self.cashPassword.length!=4){
                      _self.$refs.autoCloseDialog.open('请输入4位数字密码');
                      return false
                  }
                  _self.PaySubmit = true ;
                  var Withdrawalsdata = {
                      applyAmount: _self.userMoney*100,//金额
                      tradePassword: _self.cashPassword, //密码
                      bankCode:_self.bankCode,//银行code
                      bankId:_self.bankId,  //银行Id
                      bankCard:_self.bankCard, //银行卡号
                      realName:_self.realName,//真实姓名
                      source:2 //H5
                  };
                  $.ajax({
                      type: 'post',
                      headers: { 'Authorization': 'bearer ' + _self.getAccessToken ,},
                      dataType: 'json',
                      url: _self.action.forseti + 'api/pay/drawOrder',
                      data: Withdrawalsdata,
                      success: (res) => {;
                          //取款密码错误
                          if(res.err=='SUCCESS'){
                              _self.PaySubmit = true
                              _self.$refs.autoCloseDialog.open('提款成功','','icon_check','d_check') ;
                              setTimeout(function(){
                                  window.location = '/lobbyTemplate/info' ;
                              },100)
                          }else {
                              _self.PaySubmit = false ;
                              _self.$refs.autoCloseDialog.open(res.msg) ;
                              return false
                          }

                      },
                      error: (err) =>{
                          _self.PaySubmit = false ;
                          _self.$refs.autoCloseDialog.open('请输入正确提款信息') ;
                      }

                  })

      },

  }
}
</script>
<style type="text/css">
  .withdrawlHint{
      display: block;
        padding-left: 2.444rem;
        color: red;
        font-size: 0.34rem;
        height: 0.6rem;
        line-height: 0.6rem;
        /*background-color: rgba(0, 0, 0, 0.5);*/
        margin-top: 0.185rem;
  }
</style>