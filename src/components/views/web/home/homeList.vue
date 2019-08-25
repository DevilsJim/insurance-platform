<template>
    <div>
        <el-row type="flex" class="row-bg" justify="space-around">
            <router-link to="/webIndex/InsuranceList">
                <div class="grid-content bg-purple">
                    <h2>{{tbOrderCont}}条</h2>
                    <p>今日新增投保</p>
                </div>
            </router-link>

            <router-link to="/webIndex/claimList">
                <div class="grid-content bg-purple">
                    <h2>{{lpOrderCont}}条</h2>
                    <p>今日新增待理赔</p>
                </div>
            </router-link>

            <router-link to="/webIndex/paymentList">
                <div class="grid-content bg-purple">
                    <h2>{{payOrderCont}}条</h2>
                    <p>今日新增待支付</p>
                </div>
            </router-link>

        </el-row>
       <!-- <el-row class="row_info">
            <div class="title_box"><h2>最新消息</h2></div>
            <div class="info_box">
                <div v-for="item in tableData" class="info_list">
                    <el-col :span="20">{{item.info}}</el-col>
                    <el-col :span="4">{{item.date}}</el-col>
                </div>
            </div>
            <div class="block">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="10"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="6">
                </el-pagination>
            </div>
        </el-row>-->
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data () {
            return {
                currentPage4 : 1,
                tbOrderCont : 0, // Integer | 投保订单统计
                lpOrderCont : 0, // Integer | 理赔订单统计
                payOrderCont : 0, // Integer | 待支付订单统计
                tableData : [
                    {
                        "info":'这是一个很重要的新闻列表',
                        "date":'2018-03-15'
                    },{
                        "info":'这是一个很重要的新闻列表',
                        "date":'2018-03-15'
                    },{
                        "info":'这是一个很重要的新闻列表',
                        "date":'2018-03-15'
                    },{
                        "info":'这是一个很重要的新闻列表',
                        "date":'2018-03-15'
                    },{
                        "info":'这是一个很重要的新闻列表',
                        "date":'2018-03-15'
                    },{
                        "info":'这是一个很重要的新闻列表',
                        "date":'2018-03-15'
                    },
                ],
                pageParam : {
                    "pageParam" : {
                        "pageNo" : 1,
                        "pageSize" : 100
                    }
                },
            }
        },
        created () {
            let self = this;
            this.$post( this.$api + 'insuOrder/getInsuOrderCont', {company:JSON.parse(this.$Cookies.get('user')).nikename}, {headers: this.$gateway.insurance}).then(
                (res) => {
                    if(res.success && res.code == 0) {
                        self.tbOrderCont = res.data.tbOrderCont;
                        self.lpOrderCont = res.data.lpOrderCont;
                        self.payOrderCont = res.data.payOrderCont;
                    }else {
                        this.$message({
                            type : 'error',
                            message : res.message
                        })
                    }
                },
                (err) => {
                    this.$message({
                        type : 'error',
                        message : '网络错误'
                    })
                },
            )
        },
        methods:{
            //事件
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>
.bg-purple {
    cursor: pointer;
    padding-top: 10px;
}
.bg-purple {
    width: 380px;
    height: 160px;
    border-radius: 10px!important;
    background-color: #ffffff !important;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.12);
}
.bg-purple:hover {
    width: 380px;
    height: 160px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
}
.bg-purple > h2 {
    width: 100%;
    height: 40px;
    font-family: MicrosoftYaHei;
    font-size: 30px;
    text-align: center;
    color: #f96e75;
    margin: 37px 0 22px;
}
.bg-purple > p{
    width: 100%;
    height: 24px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    text-align: center;
    color: #9695a3;
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 100px 185px 95px 95px;
}
.title_box {
    font-size: 18px;
    text-align: left;
    color: #9695a3;
}
.row_info {
    padding:0 125px 0 ;
}
.info_list {
    line-height: 66px;
    height: 66px;
    color: #2a2a44;
    border-bottom: 1px solid #d8d8d8;
}
.info_box {
    margin-top: 10px;
    margin-bottom: 10px;
}
.info_list .el-col-20 {
    text-align: left;
}
.el-pagination {
    text-align: right;
}
</style>
