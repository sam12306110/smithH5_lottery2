<template>
    <div id="pa_con" class="so-con warp ">
        <header id="pa_head" class="new_header">
            <div class="left">
                <router-link :to="'/'">
                    
    <span class="icon icon_back"></span>

                </router-link>
            </div>
            <h2 class="center title_name">代理申请</h2>
            <div class="right"></div>
        </header>
        <div class="pa_content">
            <div class="agent_area page_box">
                <div class="agent">
                    <div class="tabset">
                        <!-- Tab 1 -->
                        <input type="radio" name="tabset" id="tab1" aria-controls="agent" checked @click="gotoTop('dljm')">
                        <label for="tab1" class="tab1">代理加盟</label>
                        <!-- Tab 2 -->
                        <input type="radio" name="tabset" id="tab2" aria-controls="commission" @click="gotoTop('yjfa')">
                        <label for="tab2" class="tab2">佣金方案</label>
                        <!-- Tab 3 -->
                        <input type="radio" name="tabset" id="tab3" aria-controls="commission" @click="gotoTop()">
                        <label for="tab3" class="tab3">代理注册</label>

                        <div class="tab-panels">
                            <section id="agent" class="tab-panel" v-html="copyContent">
                                <!--<p>-->
                                    <!--如今，网上博彩娱乐已经成为一个极具市场发展前景的热门产业。本公司凭借多年的博彩运营经验，目前已拥有极高的行业知名度和大批忠实用户，具有绝对的品牌优势。合作方式简单，零投资零风险，坐享高额佣金回报。如果您身边有对博彩感兴趣的朋友，请您不要犹豫，赶快加入这个一本万利的行业，充分利用您身边的人脉及网络资源！我们有专业的客服团队全年无休为您提供帮助。-->
                                <!--</p>-->
                                <!--<br/>-->
                                <!--<p>·高佣金（代理佣金），让你轻松月入百万</p>-->
                                <!--<p>·零风险，高回报，按时出佣</p>-->
                                <!--<p>·全年度优惠不断，满足各种类型玩家需求</p>-->
                                <!--<p>·取款快速，实力雄厚资金有保障</p>-->
                                <!--<p>·营运多年，深受百万玩家信赖</p>-->
                                <!--<p>·拥有线上赌场执照，信誉保证</p>-->
                                <!--<p>·多年大力推广，品牌热度十足，代理可坐享广告品牌效应</p>-->
                                <!--<p><br />还等什么？马上加盟吧。点击这里注册加入，开始推广，赚取佣金，简单三步开始成就梦想之旅。</p>-->
                            </section>
                            <section id="commission" class="tab-panel" v-html="copyContent">
                                <!--<table class="data">-->
                                  <!---->
                                        <!--<thead>-->
                                            <!--<tr>-->
                                                <!--<th rowspan="2">当月营利</th>-->
                                                <!--<th rowspan="2">当月最低-->
                                                    <!--<br/>有效会员</th>-->
                                                <!--<th colspan="2">-->
                                                    <!--当月退佣比例-->
                                                <!--</th>-->
                                            <!--</tr>-->
                                            <!--<tr>-->
                                                <!--<th class="grey">-->
                                                    <!--真人视频-->
                                                <!--</th>-->
                                                <!--<th class="grey">-->
                                                    <!--电子游艺-->
                                                <!--</th>-->
                                            <!--</tr>-->
                                        <!--</thead>-->
                                        <!--<tr>-->
                                            <!--<td>1-5万</td>-->
                                            <!--<td>5或以上</td>-->
                                            <!--<td>25%</td>-->
                                            <!--<td>25%</td>-->
                                        <!--</tr>-->
                                        <!--<tr>-->
                                            <!--<td>5-30万</td>-->
                                            <!--<td>10或以上</td>-->
                                            <!--<td>30%</td>-->
                                            <!--<td>30%</td>-->
                                        <!--</tr>-->
                                        <!--<tr>-->
                                            <!--<td>30万-80万</td>-->
                                            <!--<td>50或以上</td>-->
                                            <!--<td>35%</td>-->
                                            <!--<td>35%</td>-->
                                        <!--</tr>-->
                                        <!--<tr>-->
                                            <!--<td>80万-120万</td>-->
                                            <!--<td>100或以上</td>-->
                                            <!--<td>40%</td>-->
                                            <!--<td>40%</td>-->
                                        <!--</tr>-->
                                        <!--<tr>-->
                                            <!--<td>120万以上</td>-->
                                            <!--<td>200或以上</td>-->
                                            <!--<td>50%</td>-->
                                            <!--<td>50%</td>-->
                                        <!--</tr>-->
                                   <!---->
                                <!--</table>-->
                                <!--<p>-->
                                    <!--佣金以每月第一个礼拜至下月第一个礼拜一前的周日为统计期间，以联盟方案分红公式计算，由于代理部于每个月的第一礼拜三开始与代理确认金额后，在3个工作日内将佣金直接汇入申请代理登记之银行帐号。-->
                                <!--</p>-->
                                <!--<h4>代理说明</h4>-->
                                <!--<p>-->
                                    <!--合作伙伴佣金=下线会员净输值X当月佣金比例（同时需满足当月最低活跃玩家数） 如果当月有效合作伙伴的下线会员净输值为负数，那么当月佣金为零，当月盈利有公司负担。 合作伙伴的佣金比例以合作伙伴下线会员净输值与合作伙伴下线有效活跃玩家而定。合作伙伴比例升级必须同时满足合作伙伴下线会员净输值和有效活跃玩家人数两个条件。如果合作伙伴下线会员净输值和有效活跃玩家人数只有其以达到升级标准，那幺将按照低一级的佣金比例发放佣金。如有效活跃玩家人数不足2人将不能获得佣金。-->
                                <!--</p>-->
                                <!--<p>-->
                                    <!--1.）有效会员：在月结区间内，总存款达到500RMB及以上的会员。-->
                                    <!--<br/> 2.）佣金：真人视讯、电子游艺项目的【派彩】金额扣除相应费用后，乘以相应退佣比例（以扣除相应费用后的净盈利为准）。-->
                                    <!--<br/> 3.）合作伙伴获得的支付费用，其中优惠和市场费用将会累计并在每月的佣金中扣除。这些费用包括：-->
                                    <!--<br/> 转账费用-包括所有代理会员的存款和提款费用。-->
                                    <!--<br/> 行政费用-任何费用支出（为支出或协助代理而产生的促销或营销活动支出）。-->
                                    <!--<br/> 优惠红利-给予代理会员的现金红利或是折扣。若本月可获得佣金为负数，负盈利及费用将会带到下个月继续累计至可获得佣金为正数即可领取。-->
                                    <!--<br/>-->
                                <!--</p>-->
                                <!--<p>-->
                                    <!--例如： 联盟体系当月最低活动会员达6人，当月派彩：真人视讯￥200000，电子游艺￥20000。如联盟体系当月产生相应费用统计为￥100000，则当月佣金计算方式为：（￥200000+￥20000）X30%-（相应产生的费用￥100000*30%）=￥36000总退佣金额-->
                                <!--</p>-->
                            </section>
                            <section id="agentApply" class="tab-panel">
                                <div class="new_panel formlist_area">
                                    <div class="new_panel_top"></div>
                                    <div class="new_panel_center">
                                        <form>
                                            <!-- <fieldset>
                                                <div class="form_g account">
                                                    <legend></legend>
                                                    <input type="text" v-model="refereeNum"  placeholder="请输入推荐人帐号">
                                                    <i class="close cs1" @click=" ClearInput('cs1','reNum')"></i>
                                                </div>
                                            </fieldset> -->
                                            <fieldset v-if="!!accountObj.ifView">
                                                <div class="form_g account">
                                                    <legend>帐号</legend>
                                                    <input type="text" v-model="userNumber" class="username" autocomplete="off" @input="checkUserName(userNumber,'username')" placeholder="请输入4~15位帐号" @blur="CheckAccount()">
                                                    <i class="close cs2" @click=" ClearInput('cs2','userNum')"></i>
                                                </div>
                                                <label class="error-message"></label>
                                            </fieldset>
                                            <div v-if="!!passwordObj.ifView">
                                                <fieldset v-if="showPd">
                                                    <div class="form_g password">
                                                        <legend>密码</legend>
                                                        <input type="password" v-model="userPd" placeholder="请输入6~20位密码"  autocomplete="off" class="password" @input="checkpassword(userPd,'password')" >
                                                        <i class="eye " @click="show('eye1')"></i>
                                                    </div>
                                                    <label class="error-message"></label>
                                                </fieldset>
                                                <fieldset v-if="!showPd">
                                                    <div class="form_g password">
                                                        <legend>密码</legend>
                                                        <input type="text" v-model="userPd" placeholder="请输入6~20位密码" autocomplete="off" class="password" @input="checkpassword(userPd,'password')">
                                                        <i class="eye active" @click="show('act')"></i>
                                                    </div>
                                                    <label class="error-message"></label>
                                                </fieldset>
                                            </div>
                                            <div v-if="!!confirmpasswordObj.ifView">
                                                <fieldset  v-if="showC">
                                                    <div class="form_g password">
                                                        <legend>确认密码</legend>
                                                        <input type="password" placeholder="请输入6~20位密码" v-model="confirmpassword"  autocomplete="off" class="confirmpassword" @input="checkIsEqual('.confirmpassword')">
                                                        <i class="eye " @click="show('eye2')"></i>
                                                    </div>
                                                    <label class="error-message"></label>
                                                </fieldset>
                                                <fieldset  v-if="!showC">
                                                    <div class="form_g password">
                                                        <legend>确认密码</legend>
                                                        <input type="text" placeholder="请输入6~20位密码" v-model="confirmpassword"  autocomplete="off" class="confirmpassword" @input="checkIsEqual('.confirmpassword')">
                                                        <i class="eye active" @click="show('act2')"></i>
                                                    </div>
                                                    <label class="error-message"></label>
                                                </fieldset>
                                            </div>

                                            <fieldset  v-if="!!realynameObj.ifView">
                                                <div class="form_g account">
                                                    <legend>真实姓名</legend>
                                                    <input type="text" placeholder="请输入您的真实姓名" v-model="relName" class="relName"  @input="checkrealyName(relName,'relName')">
                                                    <i class="close cs3" @click="ClearInput('cs3','relName')"></i>
                                                </div>
                                                <label class="error-message"></label>
                                            </fieldset>
                                            <fieldset  v-if="!!phoneObj.ifView">
                                                <div class="form_g account">
                                                    <legend>手机号码</legend>
                                                    <input type="tel" placeholder="请输入11位手机号码" v-model="phoneNumber"  class="telephone"  @input="checktelphone(phoneNumber,'telephone')"  maxlength="11">
                                                    <i class="close cs6" @click="ClearInput('cs6','phoneNumber')"></i>
                                                </div>
                                                <label class="error-message"></label>
                                            </fieldset>
                                            <fieldset v-if="!!bankselectObj.ifView">
                                                <div class="form_g text">
                                                    <legend>银行名称</legend>
                                                    <select  class="bankselect"  v-model="bankName">
                                                        <option :value="banks.id" :data-code="banks.bankName" v-for="banks in bankList">{{banks.bankName}}</option>
                                                    </select>
                                                    <span class="icon icon_arrow_down"></span>
                                                </div>
                                                <label class="error-message"></label>
                                            </fieldset>
                                            <fieldset v-if="!!bankAddObj.ifView">
                                                <div class="form_g account">
                                                    <legend>开户行</legend>
                                                    <input type="text" placeholder="如:北京市海淀区中关村支行" v-model="bankAdd" class="bankAdd" @input="checkBankAdd(bankAdd,'bankAdd')">
                                                    <i class="close cs5" @click="ClearInput('cs5','bankAdd')"></i>
                                                </div>
                                                <label class="error-message"></label>
                                            </fieldset>
                                            <fieldset v-if="!!bankNumObj.ifView">
                                                <div class="form_g account">
                                                    <legend>银行卡号</legend>
                                                    <input type="tel" placeholder="请输入取款银行卡号" v-model="bankNum" class="bankNum" @input="checkBankNum(bankNum,'bankNum')">
                                                    <i class="close cs4" @click="ClearInput('cs4','bankNum')"></i>
                                                </div>
                                                <label class="error-message"></label>
                                            </fieldset>
                                            <fieldset v-if="!!eMailObj.ifView">
                                                <div class="form_g account">
                                                    <legend>电子邮箱</legend>
                                                    <input type="text" placeholder="请输入电子邮箱" v-model="eMail"
                                                           class="eMail" @input="checkeMail(eMail,'eMail')">
                                                    <i class="close cs5" @click="ClearInput('cs5','eMail')"></i>
                                                </div>
                                                <label class="error-message"></label>
                                            </fieldset>
                                            <fieldset v-if="!!QQObj.ifView">
                                                <div class="form_g account">
                                                    <legend>QQ</legend>
                                                    <input type="tel" placeholder="请输入QQ号" v-model="QQ" class="QQ" @input="checkQQ(QQ,'QQ')">
                                                    <i class="close cs6" @click="ClearInput('cs6','QQ')"></i>
                                                </div>
                                                <label class="error-message"></label>
                                            </fieldset>
                                            <fieldset v-if="!!weiChatObj.ifView">
                                                <div class="form_g account">
                                                    <legend>微信</legend>
                                                    <input type="tel" placeholder="请输入微信号" v-model="weiChat" class="weiChat" @input="checkWx(weiChat,'weiChat')">
                                                    <i class="close cs7" @click="ClearInput('cs7','weiChat')"></i>
                                                </div>
                                                <label class="error-message"></label>
                                            </fieldset>
                                            <fieldset>
                                                <div class="form_g password">
                                                    <legend>验证码</legend>
                                                    <input type="text" v-model="identifyCode" class="identifyCode" placeholder="请输入验证码" maxlength="4">
                                                    <img :src="verImgCode" alt="" @click="switchYzmcode()">
                                                </div>
                                                <label class="error-message"></label>
                                            </fieldset>
                                        </form>
                                        <div class="agent_check">
                                            <input type="checkbox" id="cbox1" value="first_checkbox" checked v-model="checked">
                                            <label for="cbox1">我已届满合法博彩年龄，且已阅读并同意<a class="agent_modal" href="javascript:;" @click="show('ag')">《代理注册协议》</a></label>
                                        </div>
                                        <div class="btn btn_blue">
                                            <a class="new_btn" href="javascript:;" @click="agentReg()"><span class="big">立即申请</span></a>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                  <!--  <div class="btn btn_blue">
                        <router-link to="/lobbyTemplate/agentApply">立即申请</router-link>
                    </div>-->
                </div>
            </div>
        </div>

        <div id="agent_modal"  class="so-pop-wanfa modal" v-if="!showModel">
            <div class="m_content">
                <h2>代理注册协议<a href="javascript:;" @click="show('h2')"></a></h2>
                <div class="content">
                    <div class="playtext">
                        <h3>一. 注册规约</h3>
                        <p>1. 为有效防止非诚信合作商滥用本网站所提供的代理优惠制度，公司审查部门将严格审核每位代理商注册时提供的个人资料（包括姓名，邮件及电话等）若经审核发现代理商有任何不良营利企图，或与其他代理商、会员进行合谋套利等不诚信行为，本网站将关闭该合作代理商之账户并收回该代理商的所有佣金与优惠。</p>
                        <p>2. 同一IP/同一姓名/同一收款账号的会员只能是一个合作商的下线，合作商自已不能成为自已及其他合作商的下线会员。同一IP/同一姓名/同一收款账号只能申请一个合作伙伴账号。</p>
                        <h3>二、权责条款</h3>
                        <strong>1.合作伙伴的权利和义务</strong>
                        <p>1.1. 合作伙伴需尽其责任积极销售及推广本网站以求双方利润最大化。合作伙伴必须在不违反法律的前提下，进行正面宣传、销售及推广本网站。由此产生的宣传、销售及推广时所产生的费用需由合作伙伴自行承担。</p>
                        <p>1.2. 合作伙伴不得私自转载、公开、分发包括主页、域名、logo、报表、游戏画面、图文等在内的相关资料。另外，在推广时，合作伙伴要保障本网站的利益，任何有损公司声誉的行为，一经发现立即终止合作关系。</p>
                        <strong>2.本网站对合作伙伴的权利与义务</strong>
                        <p> 2.1. 本网站的客服代表将会协助合作伙伴给下线办理开户业务并观察其投注状况。代理商及会员皆须同意并遵守本网站的会员条例、政策及操作进程。合作伙伴可随时登录管理后台了解其下线会员的账户报表。</p>
                        <p>2.2. 本网站保留所有对合作代理商或会员之账户加以拒绝或冻结的权利。</p>
                        <p>2.3. 在某些情况下经过认真审查本网站保留单方面修改合作协议上的任何条款的权利，本网站会在网站刊登修改情况告知合作伙伴。修改内容可能包括：佣金范围、付款进程、及其它条例。如合作伙伴对于修改表示反对，合作伙伴可终止合约。修改后合作伙伴不作任何异议，便视作默认接受和对新协议表示认可。</p>
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
import FooterNav from '@/components/Footer'

export default {
    name: 'agent',
    mixins:[Mixin],
    components: {
     AutoCloseDialog,
        FooterNav ,
    },
    data: function() {
        return {
            copyTitle:'',
            copyContent:'',
            showModel :  true,
            showPd:true,
            showC:true,
            bankList:'',
            refereeNum:'',//推荐人账号
            userNumber:'',//用户帐号
            userPd:'',//用户密码
            identifyCode:'',//验证码;
            verImgCode  :'',
            client:'',
            relName:'',
            bankNum:'',
            bankAdd:'',
            bankName:'',
            phoneNumber:'',
            confirmpassword:'',
            weiChat:'',
            QQ:'',
            eMail:'',
            regsubmitflage:false ,
            checked:true,
            accountObj:{},
            passwordObj:{},
            phoneObj:{},
            realynameObj:{},
            confirmpasswordObj:{},
            bankselectObj:{},
            bankAddObj:{},
            bankNumObj:{},
            eMailObj:{},
            QQObj:{},
            weiChatObj:{},
            bankCode:""
        }
    },
    created:function () {
        var _self=this;
        _self.switchYzmcode();
    },
    mounted:function() {
        $('html,body').css('overflow-y','scroll' )  ;
        //scrollTo(0,0); // 回到顶部
        document.documentElement.scrollTop = document.body.scrollTop=0; // 回到顶部
        this.getCopyright('1','BT02')
        this.getBankList()
        this.getReglist('2');
    },
    methods: {
        // 回到顶部
        gotoTop:function (name) {
            //scrollTo(0,0);
            if(name=='dljm'){
                this.getCopyright('1','BT02')
            }
            if(name=='yjfa'){
                this.getCopyright('1','BT03')
            }
            document.documentElement.scrollTop = document.body.scrollTop=0; // 回到顶部
        },
        //清除model数据,cl元素class
        clearVal :function (cl) {
            if(cl=='reNum'){
                this.refereeNum='';
            }
            if(cl=='userNum'){
                this.userNumber='';
            }
            if(cl=='relName'){
                this.relName=''
            }
            if(cl=='bankNum'){
                this.bankNum=''
            }
            if(cl=='bankAdd'){
                this.bankAdd=''
            }
            if(cl=='phoneNumber'){
                this.phoneNumber=''
            }
            if(cl=='weiChat'){
                this.weiChat=''
            }
            if(cl=='QQ'){
                this.QQ=''
            }
            if(cl=='eMail'){
                this.eMail=''
            }
        },
        //点击显示隐藏
        show:function(cla){
            var _self=this
            if(cla=='eye1'){
                _self.showPd=false
            }
            if(cla=='act'){
                _self.showPd=true
            }
            if(cla=='eye2'){
                _self.showC=false
            }
            if(cla=='act2'){
                _self.showC=true
            }
            if(cla=='ag'){
                _self.showModel=false
            }
            if(cla=='h2'){
                _self.showModel=true
            }
        },
        //获取验证码
        switchYzmcode:function () {
            let _self =this ;
            let url= _self.action.uaa + 'apid/member/code/get?time='+ Math.random();
            $.ajax({
                type:"GET",
                url:url,
                success: (data) => {
                    _self.verImgCode = data.data && 'data:image/png;base64,' + data.data.code || '';
                    _self.client = data.data && data.data.clientId || '';
                }
            })
        },
        //代理注册接口
        agentReg:function () {
            var _self=this;
            if(!!this.accountObj.ifRequired){
                if(this.userNumber ==''){
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
            if(_self.regsubmitflage){
                return false ;
            }
//       console.log(!this.phoneObj.ifRequired)
            if(!!this.realynameObj.ifRequired){
                if(this.relName ==''){
                    this.$refs.autoCloseDialog.open('请输入真实姓名') ;
                    return false ;
                }
            }
            if(!!this.phoneObj.ifRequired){
                if(this.phoneNumber ==''){
                    this.$refs.autoCloseDialog.open('请输入手机号码') ;
                    return false ;
                }
            }

            if(!!this.bankselectObj.ifRequired){
                if(_self.bankName==""){
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
            if(!!this.eMailObj.ifRequired){
                if(_self.eMail==""){
                    _self.$refs.autoCloseDialog.open('请输入电子邮箱') ;
                    return false
                }
            }
            if(!!this.QQObj.ifRequired){
                if(_self.QQ==""){
                    _self.$refs.autoCloseDialog.open('请输入QQ号') ;
                    return false
                }
            }
            if(!!this.weiChatObj.ifRequired){
                if(_self.weiChat==""){
                    _self.$refs.autoCloseDialog.open('请输入微信号') ;
                    return false
                }
            }

            if(this.identifyCode ==''){
                this.$refs.autoCloseDialog.open('请输入验证码') ;
                return false ;
            }

            var falg = $('.error-message').hasClass('red') ;  // 验证不通过，不允许提交
            if(falg){
                return false ;
            }
            if(!_self.checked){
                this.$refs.autoCloseDialog.open('请阅读并同意注册协议') ;
                 return false ;
            }
            _self.regsubmitflage = true ;
            _self.bankCode=$('.bankselect').find("option:selected").data('code') ;
            var logindata = {
                agentAccount: _self.userNumber ,   // 帐号
//                method: 'mc',   //方法：mc创建会员
//                oddType: 'a',  //盘口，1位字符，预留
                 loginPwd: _self.userPd ,  // 用户登录密码
                 reLoginPwd:_self. confirmpassword, //确认密码
                 agentName: _self.relName ,  // 用户真实姓名
                 phone: _self.phoneNumber , // 手机号码
                 bankName:_self.bankCode, //银行名称
                 bank:_self.bankAdd,//开户地址
                 bankNo:_self.bankNum, //银行卡号码
                 wechat:_self.weiChat,  //微信
                 qq:_self.QQ,
                 email:_self.eMail,
                 sourceType:'2',//来源
                 code: _self.identifyCode ,   // 验证码
            }
              $.ajax({
                  type: 'post',
                  headers: {
                      Authorization: 'Basic d2ViX2FwcDo=',
                      clientId: this.client
                  },
                  dataType: 'json',
                  contentType: 'application/json; charset=utf-8',
                  url: this.action.uaa + 'apid/plat/agent/registerAgent',
                  data: JSON.stringify(logindata) ,
                  success: (res) => {
                      if(res.err =='SUCCESS'){ // 注册成功
                          _self.regsubmitflage = false ;
                          _self.$refs.autoCloseDialog.open('注册成功','','icon_check','d_check') ;
//                          _self.setCookie("access_token", res.data.access_token);  // 把登录token放在cookie里面
//                          _self.setCookie("acType", res.data.acType);  // 把登录 acType 放在cookie里面
//                          _self.setCookie("username", _self.username);  // 把登录用户名放在cookie里面
                          setTimeout(function () {
                              // _self.$router.push('/')

                              window.location = '/';

                          },1000) ;
                      }else if(res.cnMsg){
                          _self.regsubmitflage = false ;
                          _self.$refs.autoCloseDialog.open(res.cnMsg);
                          _self.switchYzmcode() ;

                      }
                      else{ //code 105 验证码无效
                          _self.regsubmitflage = false ;
                          this.switchYzmcode() ; // 更新验证码
                          this.$refs.autoCloseDialog.open(res.msg);
                      }

                  },
                  error: function () {
                      _self.regsubmitflage = false ;
                  }
              })
        },
        //验证账户是否存在
        CheckAccount:function () {
            let _self=this;
            console.log($())
            let AccData={
                agentAccount:_self.userNumber
            }
            $.ajax({
                type: 'get',
//                headers: {Authorization: 'Basic d2ViX2FwcDo='},
                url: this.action.uaa + 'apid/plat/agent/check_account',
                data: AccData ,
                success:(res)=>{
                    if(res.data=='-1'){
                        _self.$refs.autoCloseDialog.open('用户名重复') ;
                        return false
                    }
                }
            })
        },
    }

}
</script>


<style scope>
    .so-pop-wanfa { display: block;}
</style>