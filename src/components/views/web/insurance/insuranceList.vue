<template>
    <!--投保清单-->
    <div>
        <div class="bthBox">
            <el-button type="danger" round @click="is_icon = 0;tiggerGroductType()" size="small">全部 <i v-if="is_icon == 0" class="el-icon-check"></i></el-button>
            <el-button type="danger" round @click="is_icon = 20;tiggerGroductType()" size="small">商标综合保险 <i v-if="is_icon == 20" class="el-icon-check"></i></el-button>
            <el-button v-if="user != '亚太'" type="danger" round @click="is_icon = 4;tiggerGroductType()" size="small">果保专利保险 <i v-if="is_icon == 4" class="el-icon-check"></i></el-button>
            <el-button type="danger" round @click="is_icon = 1;tiggerGroductType()" size="small">盲查保险 <i v-if="is_icon == 1" class="el-icon-check"></i></el-button>
        </div>
        <div class="searchCondition">
            <el-form :model="searchForm" ref="searchForm" :inline="true" class="demo-form-inline" label-width="110px">
                <el-row>
                    <el-col :span="4">
                        <el-form-item label="申请号：">
                          <el-input v-model="searchForm.applyCode" placeholder="申请号" class="w130" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="订单编号：">
                          <el-input v-model="searchForm.ordercode" placeholder="订单编号" class="w130" size="small"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="4">
                      <el-form-item label="被保险人名称：">
                        <el-input v-model="searchForm.bodyName" placeholder="被保险人名称" class="w130" size="small"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="订单状态：">
                        <el-select v-model="searchForm.status" placeholder="订单状态" class="w130" size="small">
                            <el-option label="全部" value=""></el-option>
                            <el-option label="已退款" value="-1"></el-option>
                            <!--<el-option label="已支付" value="1"></el-option>-->
                            <!--<el-option label="已报件" value="2"></el-option>-->
                            <el-option label="投保成功" value="3"></el-option>
                            <!--<el-option label="收到驳回" value="4"></el-option>-->
                            <el-option label="待报案" value="20"></el-option>
                            <el-option label="待理赔" value="6"></el-option>
                            <!--<el-option label="理赔未通过" value="7"></el-option>-->
                            <el-option label="待支付" value="8"></el-option>
                            <!--<el-option label="支付失败" value="9"></el-option>-->
                            <el-option label="理赔完成" value="10"></el-option>
                            <el-option label="不予理赔" value="11"></el-option>
                        </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <!--<div class="block">
                        <span class="demonstration">投保日期：</span>
                        <el-date-picker
                          v-model="searchForm.devoteInsuStartTime"
                          placeholder="选择日期时间"
                          format="yyyy - MM - dd"
                          value-format="yyyy-MM-dd 00:00:00"
                          class="w180">
                        </el-date-picker>
                        ~
                        <el-date-picker
                          v-model="searchForm.devoteInsuEndTime"
                          placeholder="选择日期时间"
                          format="yyyy - MM - dd"
                          value-format="yyyy-MM-dd 00:00:00"
                          class="w180">
                        </el-date-picker>
                      </div>-->
                      <div class="block">
                        <span class="demonstration">投保日期：</span>
                        <el-date-picker
                          v-model="devoteInsuTime"
                          type="daterange"
                          :clearable="false"
                          size="small"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
                        </el-date-picker>
                      </div>
                    </el-col>
                </el-row>
                <el-row class="text_right" style="margin-top:20px;">
                  <el-col :span="12" class="text-left">
                    <el-button plain icon="el-icon-upload2"  @click="exportExcel()" size="small">导出订单</el-button>
                    <el-checkbox v-model="is_import" size="small">过滤掉已导出订单</el-checkbox>
                  </el-col>
                  <el-col :span="12" style="text-align: right;">
                    <el-button class="searchBtn" @click="onSubmit()" size="small">查询</el-button>
                    <el-button class="reset" @click="resetForm()" size="small">重置</el-button>
                  </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="tableBox">
            <el-table
                    :data="tableData"
                    stripe
                    border
                    height="550"
                    size="small"
                    style="width: 100%">
                    <el-table-column
                            header-align="center"
                            label="保险编号">
                        <template slot-scope="scope">

                            <router-link class="text_ellipsis" :to="{path:'/webIndex/Details/' + scope.row.id }"><el-badge is-dot v-if="scope.row.info == 1"></el-badge>{{ scope.row.inseCode }}</router-link>
                        </template>
                    </el-table-column>

                <el-table-column
                        width="140"
                        header-align="center"
                        prop="ordercode"
                        label="订单编号">
                </el-table-column>
                <el-table-column
                        header-align="center"
                        prop="applyCode"
                        label="申请号">
                </el-table-column>
                <el-table-column
                        header-align="center"
                        prop="devoteInsuTime"
                        width="160px"
                        label="投保日期">
                </el-table-column>
                <el-table-column
                        width="160px"
                        header-align="center"
                        prop="reportCaseTime"
                        label="报案日期">
                </el-table-column>
                <el-table-column
                        header-align="center"
                        prop="bodyName"
                        label="被保险人名称">
                </el-table-column>

                <el-table-column
                        header-align="center"
                        prop="productType"
                        :formatter="formatProductType"
                        label="保险类型">
                </el-table-column>
                <el-table-column
                        header-align="center"
                        prop="status"
                        :formatter="formatStatus"
                        label="订单状态">
                </el-table-column>
                <el-table-column
                        header-align="center"
                        prop="insuMoney"
                        label="保费">
                </el-table-column>
                <el-table-column
                        header-align="center"
                        prop="amendsMoney"
                        label="理赔金额">
                </el-table-column>
            </el-table>
            <div class="block"  v-show="totalCount>10">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="searchForm.pageParam.pageNo"
                        :page-size="searchForm.pageParam.pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalCount">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/css/table_batch.css';
    import moment from 'moment'
    export default {
        name: 'homeList',
        data () {
            return {
                user:null,
                is_icon : 0,  //顶部四个按钮切换状态
                tableData: [],  //表格数据
                checked:'true', // 过滤掉已导出选框的状态
                searchForm:{
                    ordercode:'',	//否	string	原订单号
                    applyCode:'',	//否	string	申请号
                    productType:'',	//否	int	保险类型：1.盲查保 2.果保商标 3.全程保 4.果保专利 5.双享保 6.复审保 7.果保复审
                    devoteInsuStartTime: '',	//否	date	投保开始时间
                    devoteInsuEndTime:'',	//否	date	投保结束时间
                    status:'',	//否	int	订单状态：1:已支付、2:已报件、3:已投保、4:收到驳回、5:待报案、6:待理赔、7:理赔未通过、8:待支付、9:支付失败、10:理赔完成、11:不予理赔
                    isInsu:2,	//否	int	是否投保 1：否 2：是
                    pageParam:{
                        "pageNo":1,
                        "pageSize":10
                    },

                },
                totalCount:null,
                totalPage:null,
                is_import:false,
                exporeExcelObject:{
                    insuOrderVO:{//搜索条件
                    },
                    chArray:['保险编号','订单编号','申请号','投保日期','报案日期','被保险人名称','保险类型','订单状态','保费','理赔金额'],
                    enArray:['inseCode','ordercode','applyCode','devoteInsuTime','reportCaseTime','bodyName','productType','status','insuMoney','amendsMoney'],
                    importFlag:true
                },
                devoteInsuTime:[],
            }
        },
        created (){
            if(typeof this.$Cookies.get('user') == 'undefined'){
                this.$router.push({path:'/'});
            }else {
                this.user = JSON.parse(this.$Cookies.get('user')).nikename;
            }
            this.devoteInsuTime[0] = moment(moment().add(-30, 'days')).format('YYYY-MM-DD')
            this.devoteInsuTime[1] = moment(moment(new Date())).format('YYYY-MM-DD')
            this.searchForm.company = JSON.parse(this.$Cookies.get('user')).nikename;
            this.loadlist();


        },
        methods:{
            //事件
            //初始化加载数据列表
            loadlist (){
                let self = this;
                let num = 0;
                self.searchForm.devoteInsuStartTime = self.devoteInsuTime ? moment(self.devoteInsuTime[0]).format('YYYY-MM-DD 00:00:00') : '' ;
                self.searchForm.devoteInsuEndTime = self.devoteInsuTime ? moment(self.devoteInsuTime[1]).format('YYYY-MM-DD 00:00:00') : '' ;
                //列表数据
                this.$post(this.$api + 'insuOrder/getInsuOrderListByPage',self.searchForm, {headers: this.$gateway.insurance}).then((res) => {
                    if(res.success && res.code == 0){
                        num = num + 1;
                        if(res.data.list.length == 0 && num == 1 && self.searchForm.pageParam.pageNo != 1){
                            self.searchForm.pageParam.pageNo = 1;
                            self.loadlist()
                        }
                        self.tableData = res.data.list;
                        self.tableData.map( (item) => {
                            item.devoteInsuTime = item.devoteInsuTime ? moment(item.devoteInsuTime).format('YYYY-MM-DD') : '';
                            item.reportCaseTime = item.reportCaseTime ? moment(item.reportCaseTime).format('YYYY-MM-DD') : '';
                        })
                        self.totalCount = res.data.totalCount;
                        self.totalPage = res.data.totalPage;

                    }else{
                        this.$message(res.message);
                    }
                },(err) => {
                    this.$message(err);
                })
            },
            //提交查询
            onSubmit() {
                this.loadlist()
            },
            resetForm() {
                this.searchForm = {
                  ordercode:'',	//否	string	原订单号
                  applyCode:'',	//否	string	申请号
                  productType:'',	//否	int	保险类型：1.盲查保 2.果保商标 3.全程保 4.果保专利 5.双享保 6.复审保 7.果保复审
                  devoteInsuStartTime: '',	//否	date	投保开始时间
                  devoteInsuEndTime:'',	//否	date	投保结束时间
                  status:'',	//否	int	订单状态：1:已支付、2:已报件、3:已投保、4:收到驳回、5:待报案、6:待理赔、7:理赔未通过、8:待支付、9:支付失败、10:理赔完成、11:不予理赔
                  isInsu:2,	//否	int	是否投保 1：否 2：是
                  pageParam:{
                    "pageNo":1,
                    "pageSize":10
                  },
                };
                this.searchForm.company = JSON.parse(this.$Cookies.get('user')).nikename;
                this.is_icon = 0;
                this.devoteInsuTime[0] = moment(moment().add(-30, 'days')).format('YYYY-MM-DD')
                this.devoteInsuTime[1] = moment(moment(new Date())).format('YYYY-MM-DD')
            },
            tiggerGroductType () {
                this.searchForm.productType = this.is_icon == 0 ? '' : this.is_icon;
                this.loadlist()
            },
            //下面两个事件可以考虑放到common里面
            formatProductType (row, column) {
                if(row.productType == 1){
                    return '盲查保'
                }else if(row.productType == 2){
                    return '果保商标'
                }else if(row.productType == 3){
                    return '全程保'
                }else if(row.productType == 4){
                    return '果保专利'
                }else if(row.productType == 5){
                     return '双享保'
                 }else if(row.productType == 6){
                      return '复审保'
                  }else if(row.productType == 7){
                     return '果保复审'
                 }
            },
            formatStatus (row, column) {
                if(row.status == 1){
                    return '已支付'
                }else if(row.status == 2){
                    return '已报件'
                }else if(row.status == 3){
                    return '已投保'
                }else if(row.status == 4){
                    return '收到驳回'
                }else if(row.status == 5){
                    return '待报案'
                }else if(row.status == 6){
                    return '待理赔'
                }else if(row.status == 7){
                    return '理赔未通过'
                }else if(row.status == 8){
                    return '待支付'
                }else if(row.status == 9){
                    return '支付失败'
                }else if(row.status == 10){
                    return '理赔完成'
                }else if(row.status == 11){
                    return '不予理赔'
                }
            },
            //分页开始
            handleSizeChange(val) {
                //每页显示val条
                this.searchForm.pageParam.pageSize = val;
                this.loadlist();
            },
            handleCurrentChange(val) {
                //当前显示val页
                this.searchForm.pageParam.pageNo = val;
                this.loadlist();
            },//分页结束
            exportExcel(){
                this.exporeExcelObject.insuOrderVO = this.searchForm;
                this.exporeExcelObject.insuOrderVO.isImport = this.is_import == true ? 1 : "";
                this.$exportExcel(`${this.$api}insuOrder/importInsuOrderExcel`,this.exporeExcelObject, this.$gateway.insurance).then(
                    (res) => {
                        this.$message({
                            type:'success',
                            message:'导出成功'
                        })
                    }
                )
            },
        }
    }
</script>

<style scoped>
.bthBox {
    text-align: left;
    margin-bottom: 25px;
}
.el-button+.el-button {
    margin-left: 30px;
}
.searchCondition {
    margin-bottom: 18px;
}
.el-col {
    text-align: left;
}
.searchBtn {
  color: #fff;
  background: #9a98e4;
}
.searchBtn:hover {
  color: #fff;
  background: #9a98e4;
}
.reset:hover {
  color: #fff;
  background: #c6cad0;
}
.reset {
  color: #fff;
  background: #c6cad0;
}
.el-pagination {
    text-align: right;
}
.w130 {
    width: 140px;
}
.w180 {
    width: 180px;
}
.text_ellipsis{
    max-width: 150px;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
}
.el-form--inline .el-form-item{
  margin-right:0;
  margin-bottom:0;
}
.el-date-editor--daterange.el-input__inner{
  width:246px;
  margin-top:4px;
}
</style>
