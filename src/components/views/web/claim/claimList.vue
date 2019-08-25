<template>
    <!--待理赔-->
    <div>
        <div class="bthBox">
            <el-button type="danger" round v-for="item in tabData" :value="item.id" :key="item.name" size="small"
                       @click="formInline.productType=item.id;loadlist();">{{item.name}}
                <i v-if="item.id == formInline.productType" class="el-icon-check"></i>
            </el-button>
        </div>
        <div class="searchCondition">
            <el-form :model="formInline" ref="formInline" :inline="true" class="demo-form-inline" label-width="110px">
                <el-row>
                    <el-col :span="5">
                        <el-form-item label="申请号：">
                            <el-input v-model="formInline.applyCode" placeholder="申请号" class="w130" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="订单编号：">
                          <el-input v-model="formInline.ordercode" placeholder="订单编号" class="w130" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                      <el-form-item label="被保险人名称：">
                        <el-input v-model="formInline.bodyName" placeholder="被保险人名称" class="w130" size="small"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
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
                      <!--<div class="block">
                        <span class="demonstration">投保日期：</span>
                        <el-date-picker
                          v-model="formInline.devoteInsuStartTime"
                          class="w130"
                          placeholder="选择日期时间">
                        </el-date-picker>
                        ~
                        <el-date-picker
                          v-model="formInline.devoteInsuEndTime"
                          placeholder="选择日期时间"
                          class="w130">
                        </el-date-picker>
                      </div>-->
                    </el-col>
                </el-row>
                <el-row style="margin-top:20px;">
                    <el-col :span="12">
                      <el-button plain icon="el-icon-upload2" :disabled="checkedCities.length === 0" @click="throughClaims" size="small">
                        理赔通过
                      </el-button>
                      <el-button plain icon="el-icon-upload2" :disabled="tableData.length === 0" @click="exportExcel()" size="small">导出订单</el-button>
                      <el-checkbox v-model="is_import" size="small">过滤掉已导出订单</el-checkbox>
                      <el-button plain icon="el-icon-upload2" :disabled="checkedCities.length === 0" @click="exportOne()" size="small">导出理赔资料</el-button>
                    </el-col>
                    <el-col :span="11" style="text-align:right;">
                        <el-button plain @click="loadlist();currentPage=1;" class="searchBtn" size="small">查询</el-button>
                        <el-button plain @click="resetData" class="reset" size="small">重置</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="tableBox">
            <el-table
              :data="tableData"
              size="small"
              border
              style="width: 100%"
              @select="checkOne"
              @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="50" header-align="center"></el-table-column>
              <el-table-column label="保险编号" prop="inseCode" header-align="center" width="230">
                <template slot-scope="scope">
                  <p class="batchList" v-for="val in returnData(scope.row,'inseCode')">
                    <router-link class="text_ellipsis" :to="{path:'/webIndex/Details/' + val.id }">
                    <el-badge is-dot v-if="val.info==1"></el-badge>&nbsp;{{val.inseCode}}
                    </router-link>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="ordercode" label="订单编号" header-align="center" width="220">
                <template slot-scope="scope">
                  <p class="batchList" v-for="val in returnData(scope.row,'ordercode')">{{val.ordercode}}</p>
                </template>
              </el-table-column>
              <el-table-column prop="productType" label="保险类型" header-align="center">
                <template slot-scope="scope">
                  <p class="batchList" v-for="val in returnData(scope.row,'productType')">
                    <span v-if="val.productType == 1">盲查保</span>
                    <span v-if="val.productType == 2">果保商标</span>
                    <span v-if="val.productType == 3">全程保</span>
                    <span v-if="val.productType == 4">果保专利</span>
                    <span v-if="val.productType == 5">双享保</span>
                    <span v-if="val.productType == 6">复审保</span>
                    <span v-if="val.productType == 7">果保复审</span>
                  </p>
                </template>
              </el-table-column>
              <el-table-column prop="insuMoney" label="保费" header-align="center" width="220">
                <template slot-scope="scope">
                  <p class="batchList" v-for="val in returnData(scope.row,'insuMoney')">{{val.insuMoney}}</p>
                </template>
              </el-table-column>
              <el-table-column prop="bodyName" label="被保险人名称" header-align="center" width="220">
                <template slot-scope="scope">
                  <p class="batchList" v-for="val in returnData(scope.row,'bodyName')">{{val.bodyName}}</p>
                </template>
              </el-table-column>
              <el-table-column prop="applyCode" label="申请号" header-align="center" width="220">
                <template slot-scope="scope">
                  <p class="batchList" v-for="val in returnData(scope.row,'applyCode')">{{val.applyCode}}</p>
                </template>
              </el-table-column>
              <el-table-column prop="defaultAmendsMoney" label="理赔金额" header-align="center" width="220">
                <template slot-scope="scope">
                  <p class="batchList" v-for="val in returnData(scope.row,'defaultAmendsMoney')">{{val.amendsMoney}}</p>
                </template>
              </el-table-column>
            </el-table>
            <div class="block" v-show="formInline.totalCount>10" style="clear:both;margin-top:10px;">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="formInline.pageParam.pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="formInline.totalCount">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/css/table_batch.css';
    import moment from 'moment';

    export default {
        name: 'homeList',
        delimiters: ['${', '}'],
        data() {
            return {
                checkAll: false,
                isIndeterminate: false,
                currentPage: 1,
                tableData: [],
                checkedCities: [],
                tabData: [{"name": "全部", "id": ""}, {"name": "商标综合保险", "id": "20"}, {
                    "name": "果保专利保险",
                    "id": "4"
                }, {"name": "盲查保险", "id": "1"},],
                formInline: {
                    "status": 6,//	是	string	订单状态
                    "bodyName": "",	//否	string	主体名称
                    "applyCode": "",	//否	string	申请号
                    "ordercode": "",//	否	string	订单号
                    "devoteInsuStartTime": "",	//否	string	报件开始时间
                    "devoteInsuEndTime": "",//	否	string	报件结束时间
                    "company": JSON.parse(this.$Cookies.get('user')).nikename,  //	是	string	保险公司（现在固定传：平安或亚太）
                    "productType": "",//	是	string	保险产品类型  20 商标综合保险     4 果保专利保险       1 盲查保险
                    "pageParam": {
                        "pageNo": 1,
                        "pageSize": 10
                    },
                },
                is_import:false,
                exporeExcelObject: {
                    insuOrderVO: {//搜索条件
                    },
                    chArray: ["订单号","商品名称","注册类别","商标超项数","申请日期","申请号","驳回类型","申请人","领款人名称","证件类型","证件号码","省份名称","城市名称","银行名称","开户行","银行账户","领款人手机号","理赔金额","理赔限额","备注", "报案时间 "],
                    enArray: ["ordercode", "applyName", "category", "itermNum", "applyTime","applyCode","rejectType","bodyName","drawerName","identType","identCode","province","city","bankAddress","bankName","bankAccount","drawerTel","amendsMoney","defaultAmendsMoney","info","reportCaseTime"],
                    importFlag: true
                },
                devoteInsuTime: null,
            }
        },
        created: function () {
            if(typeof this.$Cookies.get('user') == 'undefined'){
                this.$router.push({path:'/'});
            }else {
                this.user = JSON.parse(this.$Cookies.get('user')).nikename;
                if(this.user == '亚太'){
                    this.tabData.splice(2,1)
                }
            }
            /*this.devoteInsuTime[0] = moment(moment().add(-30, 'days')).format('YYYY-MM-DD')
            this.devoteInsuTime[1] = moment(moment(new Date())).format('YYYY-MM-DD')*/
            this.loadlist();
        },
        methods: {
            returnData(data,strType){
              var arrData = [],str = '';
              Object.keys(data).forEach(function(key){
                arrData = data[key]
                /*data[key].forEach(function (item) {
                  switch(strType)
                  {
                    case 'inseCode':
                      arrData.push(item.inseCode)
                      break;
                    case 'ordercode':
                      arrData.push(item.ordercode)
                      break;
                    case 'productType':
                      arrData.push(item.productType)
                      break;
                    case 'insuMoney':
                      arrData.push(item.insuMoney)
                      break;
                    case 'bodyName':
                      arrData.push(item.bodyName)
                      break;
                    case 'applyCode':
                      arrData.push(item.applyCode)
                      break;
                    case 'defaultAmendsMoney':
                      arrData.push(item.defaultAmendsMoney)
                      break;
                  }
                })*/
              });
              return arrData;
            },
            //初始化页面加载
            loadlist() {
                let self = this;
                let num = 0;
                self.formInline.devoteInsuStartTime = self.devoteInsuTime ? moment(self.devoteInsuTime[0]).format('YYYY-MM-DD 00:00:00') : '' ;
                self.formInline.devoteInsuEndTime = self.devoteInsuTime ? moment(self.devoteInsuTime[1]).format('YYYY-MM-DD 00:00:00') : '' ;
                //列表数据
                this.$post(this.$api + '/insuOrder/getInsuOrderListByPageAndAmendsForInsu', self.formInline, {headers: this.$gateway.insurance}).then((res) => {
                    if (res.success && res.code == 0) {
                        num = num + 1;
                        if(res.data.list.length == 0 && num == 1 && self.formInline.pageParam.pageNo != 1){
                            self.formInline.pageParam.pageNo = 1;
                            self.loadlist()
                        }
                        self.tableData = res.data.list;
                        self.formInline.totalCount = res.data.totalCount;
                        self.formInline.totalPage = res.data.totalPage;
                    } else {
                        this.$message(res.message);
                    }
                }, (err) => {
                    this.$message(err);
                })
            },
            //理赔通过
            throughClaims() {
                let self = this;
                const h = this.$createElement;
                this.$msgbox({
                    title: '提示',
                    message: h('p', null, [
                        h('span', null, `总计选择了${this.checkedCities.length}条订单，确认将这些订单批量审核通过 `),
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                          this.$put(this.$api + '/insuOrder/updateInsuPassStatus', {amendidList: this.checkedCities}, {headers: this.$gateway.insurance}).then((res) => {
                                if (res.success && res.code == 0) {
                                    this.loadlist();
                                    this.checkAll=false;
                                    this.$message("提交成功，进入支付环节，请及时给客户打款！");
                                } else {
                                    this.$message(res.message);
                                }
                            }, (err) => {
                                this.$message(err);
                            });
                            done()
                        } else if (action === 'cancel') {
                            done()
                        }
                    }
                }).then(action => {
                    this.$message({
                        type: 'info',
                        message: 'action: ' + action
                    });
                });
            },
            checkOne(selection,row){
                this.checkedCities = [];
                selection.map( (value, index, array) => {
                    for (var key in value) {
                        this.insuAmendsId = key;
                        this.checkedCities.push(key)
                    }
                })
                row[this.insuAmendsId].map((value, index, array) => {
                    this.insuAmendsName = value['bodyName']
                })
            },
            exportOne(){
                if(this.checkedCities.length == 1){
                    this.$exportExcel(`${this.$api}base/getfile/allFiles`, {id: this.insuAmendsId, name: this.insuAmendsName}, this.$gateway.insurance).then(
                        (res) => {
                            this.$message({
                                type: 'success',
                                message: '导出成功'
                            })
                        }
                    )
                }else if(this.checkedCities.length == 0){
                    this.$message({
                        type: 'error',
                        message:'最少选择一批的数据！'
                    });
                }else {
                    this.$message({
                        type: 'error',
                        message:'最多选择一批的数据！'
                    });
                }
            },
            //单选
            handleCheckedCitiesChange: function (value) {
                this.checkAll = value.length === this.tableData.length;
                this.isIndeterminate = value.length > 0 && value.length < this.tableData.length;
            },
            //全选
           handleSelectionChange: function (val) {
                var cityOptions = [];
                this.tableData.map((value, index, array) => {
                    for (var key in value) {
                        cityOptions.push(key);
                        /*value[key].map((item)=>{
                          cityOptions.push(item.id);
                        });*/
                    }
                });
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            //重置
            resetData: function () {
                this.formInline = {
                    "status": "6",
                    "bodyName": "",
                    "applyCode": "",
                    "ordercode": "",
                    "devoteInsuStartTime": "",
                    "devoteInsuEndTime": "",
                    "company": JSON.parse(this.$Cookies.get('user')).nikename,
                    "productType": "",
                    "pageParam": {
                        "pageNo": 1,
                        "pageSize": 10
                    },
                };
                /*this.devoteInsuTime[0] = moment(moment().add(-30, 'days')).format('YYYY-MM-DD')
                this.devoteInsuTime[1] = moment(moment(new Date())).format('YYYY-MM-DD')*/
                this.loadlist();
            },
            //事件
            onSubmit() {
                console.log('submit!');
            },
            handleSizeChange(val) {
                this.formInline.pageParam.pageSize = val;
                this.loadlist();
            },
            handleCurrentChange(val) {
                this.isIndeterminate = false;
                this.formInline.pageParam.pageNo = val;
                this.loadlist();
            },
            exportExcel() {
                this.exporeExcelObject.insuOrderVO = this.formInline;
                this.exporeExcelObject.insuOrderVO.isImport = this.is_import == true ? 1 : "";
                console.log(this.exporeExcelObject)
                this.$exportExcel(`${this.$api}insuOrder/importInsuOrderExcel`, this.exporeExcelObject, this.$gateway.insurance).then(
                    (res) => {
                        this.$message({
                            type: 'success',
                            message: '导出成功'
                        })
                    }
                )
            },

        }
    }
</script>
<style>
  .el-table th>.cell{
    font-weight:600;
  }
  .el-table .cell{
    padding-right:0;
    padding-left:0;
  }
</style>
<style scoped>
  .el-table .cell p.batchList:last-child{
    border-bottom:none;
  }
  .el-form-item .el-form-item__label {
      max-width: 110px;
      overflow: hidden;
      white-space:nowrap;
      text-overflow: ellipsis;
  }
  .el-form--inline .el-form-item {
      margin-right: 0 !important;
      margin-bottom: 0 !important;
  }
  .el-form--inline .el-form-item{
    margin-right:0;
    margin-bottom:0;
  }
  .el-date-editor--daterange.el-input__inner{
    width:246px;
    margin-top:4px;
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
</style>
