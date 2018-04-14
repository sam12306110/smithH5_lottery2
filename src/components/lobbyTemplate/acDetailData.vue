
<template>
    <div id="pa_con" class="so-con warp body_bg">
        <header id="pa_head" class="new_header">
            <div class="left">
                <a href="#" @click.prevent="goBack">
                    <span class="icon icon_back"></span>
                </a>
            </div>
            <h2 class="center title_name">{{moneyType[model.dealType] || '-'}}详情</h2>
            <div class="right"></div>
        </header>
        <div class="pa_content">
            <div class="deposit_area page_box">
                <div class="pay_content">
                    <div class="new_panel success">
                        <div class="new_panel_top"></div>
                        <div class="new_panel_center bank_account deposit_success">
                            <div class="print_data">
                                <table>
                                    <thead>
                                        <tr>
                                            <th> 
                                                <li>时间</li>
                                            </th>
                                           <!-- <td>{{(model && dateFormat(model.createTime, 'yyyy/mm/dd HH:mm')) || '1990/1/1 00:00'}}/td>-->
                                            <td>{{ model && formatTimeUnlix(model.createTime,'0') }} </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <li>编号</li>
                                            </th>
                                            <td>{{model.orderNo || '0'}}<!-- 123456123456123456 --></td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <li>帐变方式</li>
                                            </th>
                                            <td>{{model.dealType=='2'?model.actionTypeName:parentData.tradeTypeConfig[model.tradeType].name}}<!-- 重庆时时彩 --></td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <li>状态</li>
                                            </th>
                                            <td>
                                                <!-- class="sta sta03" -->
                                                <label  :class="'sta '+ (parentData.statusConfig[model.state] && parentData.statusConfig[model.state].class)">{{model.stateName}}<!-- 失败 --></label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <li>交易金额</li>
                                            </th>
                                            <td class="text-yellow">{{formatNumber(roundAmt(model.tradeAmount))}}<!-- 100.00 --></td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <li>账户余额</li>
                                            </th>
                                            <td class="text-yellow">{{formatNumber(roundAmt(model.balance))}}<!-- 666.00 --></td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <li>备注</li>
                                            </th>
                                            <td>{{model.remark || '-'}}<!-- - --></td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <FooterNav />
    </div>
</template>

<script>
// import $ from "jquery";
import Mixin from '@/Mixin'
import FooterNav from '@/components/Footer'

export default {
    name: 'acDetialData',
    mixins:[Mixin],
    components: {
        FooterNav ,
    },
    data: function() {
        return {
            parentData:{},
            model:{},
            moneyType:{
                '0':'充值',
                '1':'提款',
                '2':'优惠'
            },
        }
    },

    created:function() {
        this.parentData = this.$route.params.data;
        this.model = this.$route.params.model;
    }, 
    methods:{

    }

}
</script>

