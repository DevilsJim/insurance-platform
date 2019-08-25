<template>
    <div>
        <div class="bthBox excelBtn m_b10">
            <el-button type="danger" round @click="productType = 1;tiggerGroductType()" size="small">盲查保 <i v-if="productType == 1" class="el-icon-check"></i></el-button>
            <el-button type="danger" round @click="productType = 2;tiggerGroductType()" size="small">果保商标 <i v-if="productType == 2" class="el-icon-check"></i></el-button>
            <el-button type="danger" round @click="productType = 3;tiggerGroductType()" size="small">全程保 <i v-if="productType == 3" class="el-icon-check"></i></el-button>
            <el-button type="danger" round @click="productType = 4;tiggerGroductType()" size="small">果保专利 <i v-if="productType == 4" class="el-icon-check"></i></el-button>
            <el-button type="danger" round @click="productType = 5;tiggerGroductType()" size="small">双享保 <i v-if="productType == 5" class="el-icon-check"></i></el-button>
            <el-button type="danger" round @click="productType = 6;tiggerGroductType()" size="small">复审保 <i v-if="productType == 6" class="el-icon-check"></i></el-button>
            <el-button type="danger" round @click="productType = 7;tiggerGroductType()" size="small">果保复审 <i v-if="productType == 7" class="el-icon-check"></i></el-button>
        </div>
        <el-form :inline="true" class="demo-form-inline" label-width="85px">
            <el-row class="m_t10">
                <el-col v-show="productType == 1 || productType == 4" :span="4">
                    <el-form-item label="产品名称：">
                        <el-select v-model="searchForm.productName" placeholder="请选择产品名称" class="w130" size="small">
                            <el-option label="全部" value=""></el-option>
                            <el-option v-show="productType == 1" label="果益商标注册" value="果益商标注册"></el-option>
                            <el-option v-show="productType == 1" label="加急商标注册" value="加急商标注册"></el-option>
                            <el-option v-show="productType == 1" label="尊享商标注册" value="尊享商标注册"></el-option>
                            <el-option v-show="productType == 1" label="极速商标注册" value="极速商标注册"></el-option>
                            <el-option v-show="productType == 1" label="双享商标注册" value="双享商标注册"></el-option>
                            <el-option v-show="productType == 1" label="全程保商标注册" value="全程保商标注册"></el-option>

                            <el-option v-show="productType == 4" label="果保发明专利" value="果保发明专利"></el-option>
                            <el-option v-show="productType == 4" label="果保实用新型专利" value="果保实用新型专利"></el-option>
                            <el-option v-show="productType == 4" label="果保外观设计专利" value="果保外观设计专利"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col v-show="productType == 1 || productType == 4 || productType == 3" :span="4">
                    <el-form-item label="保险产品：">
                        <el-select v-model="searchForm.insuName" placeholder="请选择保险产品" class="w130" size="small">
                            <el-option label="全部" value=""></el-option>
                            <el-option v-show="productType == 1" label="盲查保_A保" value="盲查保_A保"></el-option>
                            <el-option v-show="productType == 1" label="盲查保_B保" value="盲查保_B保"></el-option>

                            <el-option v-show="productType == 3" label="全程保_A保" value="全程保_A保"></el-option>
                            <el-option v-show="productType == 3" label="全程保_B保" value="全程保_B保"></el-option>
                            <el-option v-show="productType == 3" label="双享商标注册" value="双享商标注册"></el-option>
                            <el-option v-show="productType == 3" label="全程保商标注册" value="全程保商标注册"></el-option>
                            <el-option v-show="productType == 3" label="申请保商标注册" value="申请保商标注册"></el-option>

                            <el-option v-show="productType == 4" label="果保发明专利" value="果保发明专利"></el-option>
                            <el-option v-show="productType == 4" label="果保实用新型专利" value="果保实用新型专利"></el-option>
                            <el-option v-show="productType == 4" label="果保外观设计专利" value="果保外观设计专利"></el-option>

                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="当前顾问：">
                        <el-input v-model="searchForm.gwName"  placeholder="当前顾问" class="w130" size="small"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="订单号：">
                        <el-input v-model="searchForm.ordercode"  placeholder="订单号" class="w130" size="small"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="申请号：">
                        <el-input v-model="searchForm.applyCode" placeholder="申请号" class="w130" size="small"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="保险公司：">
                        <el-input v-model="searchForm.company" placeholder="保险公司" class="w130" size="small"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="m_t10">
                <el-col :span="8">
                   <!-- <div class="block">
                        <span class="demonstration">支付日期：</span>
                        <el-date-picker
                                v-model="searchForm.payStarttime"
                                placeholder="选择支付开始时间"
                                format="yyyy - MM - dd -"
                                value-format="yyyy-MM-dd 00:00:00"
                                class="w131">
                        </el-date-picker>
                        -
                        <el-date-picker
                                v-model="searchForm.payEndtime"
                                placeholder="选择支付结束时间"
                                format="yyyy - MM - dd -"
                                value-format="yyyy-MM-dd  00:00:00"
                                class="w131">
                        </el-date-picker>
                    </div>-->
                    <div>
                        <span class="demonstration">支付日期：</span>
                        <el-date-picker
                                v-model="payTime"
                                type="daterange"
                                :clearable="false"
                                size="small"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="8">
                    <!--<div class="block">
                        <span class="demonstration">申请日期：</span>
                        <el-date-picker
                                v-model="searchForm.applyStartTime"
                                placeholder="选择申请开始时间"
                                format="yyyy - MM - dd -"
                                value-format="yyyy-MM-dd 00:00:00"
                                class="w131">
                        </el-date-picker>
                        -
                        <el-date-picker
                                v-model="searchForm.applyEndTime"
                                placeholder="选择申请结束时间"
                                format="yyyy - MM - dd -"
                                value-format="yyyy-MM-dd 00:00:00"
                                class="w131">
                        </el-date-picker>
                    </div>-->
                    <div>
                        <span class="demonstration">申请日期：</span>
                        <el-date-picker
                                v-model="applayTime"
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
            <el-row class="m_t10">
              <el-col :span="12" style="text-align:left;">
                <el-button icon="el-icon-download"  @click="exportExcel()" size="small">导出EXCEL</el-button>
                <el-button :disabled="idList.idArray.length == 0" @click="Insure()" size="small">投保至保险公司</el-button>
              </el-col>
              <el-col :span="12" class="text_right">
                <el-button type="primary" @click="loadlist()" size="small">查询</el-button>
                <el-button @click="resetData()" size="small">重置</el-button>
                <el-button @click="dialogVisible1 = true" size="small">设置列表字段</el-button>
              </el-col>
            </el-row>
        </el-form>
        <!--上面为tab切换，表格内容一致-->
        <el-table
            :data="tableData"
            style="width: 100%;margin-top: 20px;"
            height="550"
            size="small"
            @select="selectOne"
            @select-all="selectAll_all"
            border>
            <el-table-column
                width="50px"
                header-align="center"
                type="selection">
            </el-table-column>
            <el-table-column
                v-for="col in cols"
                :prop="col.prop"
                :label="col.label"
                :key="col.id"
                :width="col.width"
                :fixed="col.fixed"
                :formatter="col.formatter"
                header-align="center"
                v-if="col.isShow == 1 ">
                <!--<template>-->
                    <!--<img :src="$imgUrl + col.prop" alt="">-->
                <!--</template>-->
            </el-table-column>
           <!-- <el-table-column
                    prop="productName"
                    label="产品名称">
            </el-table-column>
            <el-table-column
                    prop="insuName"
                    label="保险产品">
            </el-table-column>
            <el-table-column
                    prop="company"
                    label="保险公司">
            </el-table-column>
            <el-table-column
                    prop="paytime"
                    label="支付日期">
            </el-table-column>
            <el-table-column
                    prop="applyTime"
                    label="申请日期">
            </el-table-column>
            <el-table-column
                    prop="inseCode"
                    label="保险编号">
            </el-table-column>
            <el-table-column
                    prop="applyCode"
                    label="申请号">
            </el-table-column>
            <el-table-column
                    prop="insuMoney"
                    label="保费">
            </el-table-column>
            <el-table-column
                    prop="bodyName"
                    label="被保险人">
            </el-table-column>
            <el-table-column
                    prop="bodyName"
                    label="申请名称">
            </el-table-column>
            <el-table-column
                    prop="category"
                    label="注册类别">
            </el-table-column>
            <el-table-column
                    width="300"
                    prop="blindStartTime"
                    :formatter="formatConnectBlinTime"
                    label="盲查期">
            </el-table-column>
            <el-table-column
                    prop="itermNum"
                    :formatter="formatItermNum"
                    label="商标超项数">
            </el-table-column>
            <el-table-column
                    prop="gwName"
                    label="当前顾问">
            </el-table-column>-->
        </el-table>
        <div class="block m_t10" v-show="totalCount > 10">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="searchForm.pageParam.pageNo"
                :page-size="searchForm.pageParam.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalCount">
            </el-pagination>
        </div>
        <el-dialog
            title="投保至保险公司"
            :visible.sync="dialogVisible"
            width="45%">
            <span>温馨提示：您选择的投保订单中包括{{idList.idArray.length}}条系统分配和人工分配不同保险公司的订单</span>
                <el-table :data="tableData1" style="margin-bottom: 20px;" border show-summary>
                    <el-table-column type="index" label="序号" width="50" header-align="center"></el-table-column>
                    <el-table-column property="insuName" label="保险产品" header-align="center"></el-table-column>
                    <el-table-column property="company" label="保险公司" header-align="center"></el-table-column>
                    <el-table-column property="orderCount" label="保单数" header-align="center"></el-table-column>
                    <el-table-column property="totalInsuMoney" label="保费" header-align="center"></el-table-column>
                </el-table>
            <el-button type="primary" @click="successInsure()">确 定</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
        </el-dialog>
        <!--配置列表字段-->
        <el-dialog
                title="设置列表字段"
                :visible.sync="dialogVisible1"
                :before-close="handleClose"
                width="30%">
            <el-row style="text-align: right;"><el-checkbox v-model="checkAll" @change="selectAll">全选</el-checkbox></el-row>
            <span>已选择</span>
            <el-row class="setListRow">
                <div v-for="item in cols1" v-if="item.isShow == true">
                    <el-checkbox v-model="item.isShow">{{item.label}}</el-checkbox>

                </div>
            </el-row>
            <span>未选择</span>
            <el-row class="setListRow">
                <div v-for="item in cols1" v-if="item.isShow == false">
                    <el-checkbox v-model="item.isShow">{{item.label}}</el-checkbox>
                </div>
            </el-row>
            <el-button @click="setList()" >确 定</el-button>
            <el-button @click="dialogVisible1 = false;handleClose('1')">关 闭</el-button>
        </el-dialog>
    </div>
</template>
<script>
    import '@/assets/css/table_batch.css';
    import moment from 'moment'
    export default {
        name: '',
        data (){
            return {
                productType:1,
                totalCount:null,
                totalPage:null,
                searchForm:{
                    ordercode:'',	//否	string	原订单号
                    applyCode:'',	//否	string	申请号
                    applyStartTime:'',	//否	date	申请开始时间
                    applyEndTime:'',	//否	date	申请结束时间
                    insuName:'',	//否	string	保险名称
                    productName:'',	//否	string	订单产品名称
                    productType:1,	//否	int	保险类型：1.盲查保 2.果保商标 3.全程保 4.果保专利 5.双享保 6.复审保 7.果保复审
                    payStarttime:'',	//否	date	支付订单开始时间
                    payEndtime:'',	//否	date	支付订单结束时间
                    reportCaseStartTime:'',	//否	date	报案开始时间
                    reportCaseEndTime:'',	//否	date	报案结束时间
                    devoteInsuStartTime:'',	//否	date	投保开始时间
                    devoteInsuEndTime:'',	//否	date	投保结束时间
                    status:'',	//否	int	订单状态：1:已支付、2:已报件、3:已投保、4:收到驳回、5:待报案、6:待理赔、7:理赔未通过、8:待支付、9:支付失败、10:理赔完成、11:不予理赔
                    gwName:'',	//否	string	当前顾问名称
                    isReport:2,	//否	int	是否报件 1：否 2：是
                    isInsu:'',	//否	int	是否投保 1：否 2：是
                    isReceiveRefu:'',	//否	int	是否收到驳回 1：否 2：是
                    isAmends:'',	//否	int	人工复核是否理赔 1：否 2：是
                    isHadAmends:'',	//否	int	是否已经理赔 1：否 2：是
                    bodyName:'',	//否	string	主体名称
                    payStatus:'',	//否	int	是否已支付：1 否 2 是
                    pageParam:{
                        "pageNo":1,
                        "pageSize":10
                    },
                },
                tableData: [],
                tableData1:[],
                dialogVisible:false,
                dialogVisible1:false,
                idList:{
                    idArray:[],
                },
                cols:[
                    {id:1,prop:'productName',label:'产品名称',isShow:true,width:'150px',fixed:true},
                    {id:2,prop:'insuName',label:'保险产品',isShow:true,width:'150px'},
                    {id:3,prop:'inseCode',label:'保险编号',isShow:false,width:'200px'},
                    {id:4,prop:'orderMoney',label:'订单金额',isShow:false,width:'150px'},
                    {id:5,prop:'orderPublicexp',label:'申请官费',isShow:false,width:'150px'},
                    {id:6,prop:'orderServeexp',label:'订单服务费',isShow:false,width:'150px'},
                    {id:7,prop:'insuServeexp',label:'保险服务费',isShow:false,width:'150px'},
                    {id:8,prop:'insuMoney',label:'保费',isShow:true,width:'150px'},
                    {id:9,prop:'company',label:'保险公司',isShow:true,width:'150px'},
                    {id:10,prop:'applyName',label:'申请名称',isShow:true,width:'150px'},
                    {id:11,prop:'category',label:'申请类别',isShow:true,width:'150px'},
                    {id:12,prop:'isReport',label:'是否报件',isShow:false,formatter:this.isReport,width:'150px'},
                    {id:13,prop:'applyTime',label:'申请日期',isShow:true,width:'150px'},
                    {id:14,prop:'blindStartTime',label:'盲查期间',isShow:true,formatter:this.ConnectBlinTime,width:'200px'},
                    {id:15,prop:'itermNum',label:'商标超项数',isShow:true,formatter:this.ItermNum,width:'150px'},
                    {id:16,prop:'agency',label:'代理机构',isShow:false,width:'150px'},
                    {id:18,prop:'identCode',label:'身份证号',isShow:false,width:'150px'},
                    {id:19,prop:'regAddress',label:'注册地址',isShow:false,width:'150px'},
                    {id:20,prop:'ordercode',label:'订单号',isShow:false,width:'150px'},
                    {id:21,prop:'applyCode',label:'申请号 ',isShow:true,width:'150px'},
                    {id:22,prop:'reportCaseTime',label:'报案时间',isShow:false,width:'150px'},
                    {id:23,prop:'productType',label:'保险类型',isShow:false,formatter:this.formatproductType ,width:'150px'},
                    {id:24,prop:'paytime',label:'支付时间',isShow:false,width:'150px'},
                    {id:25,prop:'devoteInsuTime',label:'投保时间',isShow:false,width:'150px'},
                    {id:26,prop:'status',label:'最新状态',isShow:false,formatter:this.status,width:'150px'},
                    {id:27,prop:'gwName',label:'当前顾问名称',isShow:false,width:'150px'},
                    {id:28,prop:'isInsu',label:'是否投保',isShow:false,formatter:this.isInsu,width:'150px'},
                    {id:29,prop:'isReceiveRefu',label:'是否收到驳回',isShow:false,formatter:this.isReceiveRefu,width:'150px'},
                    {id:30,prop:'isAmends',label:'人工复核结果',isShow:false,formatter:this.isAmends,width:'150px'},
                    {id:31,prop:'isHadAmends',label:'是否已经理赔',isShow:false,formatter:this.isHadAmends,width:'150px'},
                    {id:32,prop:'bodyName',label:'被保险人名称',isShow:true,width:'150px'},
                    {id:33,prop:'payStatus',label:'是否已支付',isShow:false,formatter:this.payStatus,width:'150px'},
                    {id:34,prop:'identType',label:'证件类型',isShow:false,formatter:this.identType,width:'150px'},
                    {id:35,prop:'id',label:'保险商品id',isShow:false,width:'150px'},
                    {id:36,prop:'defaultAmendsMoney',label:'保险限额',isShow:false,width:'150px'},
                    {id:37,prop:'amendsMoney',label:'理赔金额',isShow:false,width:'150px'},
                    {id:38,prop:'resultFlag',label:'系统判断结果',isShow:false,formatter:this.resultFlag,width:'150px'},
                ],
                cols1:[
                    {id:1,prop:'productName',label:'产品名称',isShow:true},
                    {id:2,prop:'insuName',label:'保险产品',isShow:true},
                    {id:3,prop:'inseCode',label:'保险编号',isShow:false},
                    {id:4,prop:'orderMoney',label:'订单金额',isShow:false},
                    {id:5,prop:'orderPublicexp',label:'申请官费',isShow:false},
                    {id:6,prop:'orderServeexp',label:'订单服务费',isShow:false},
                    {id:7,prop:'insuServeexp',label:'保险服务费',isShow:false},
                    {id:8,prop:'insuMoney',label:'保费',isShow:true},
                    {id:9,prop:'company',label:'保险公司',isShow:true},
                    {id:10,prop:'applyName',label:'申请名称',isShow:true},
                    {id:11,prop:'category',label:'申请类别',isShow:true},
                    {id:12,prop:'isReport',label:'是否报件',isShow:false,},
                    {id:13,prop:'applyTime',label:'申请日期',isShow:true},
                    {id:14,prop:'blindStartTime',label:'盲查期间',isShow:true,},
                    {id:15,prop:'itermNum',label:'商标超项数',isShow:true,},
                    {id:16,prop:'agency',label:'代理机构',isShow:false,},
                    {id:18,prop:'identCode',label:'身份证号',isShow:false,},
                    {id:19,prop:'regAddress',label:'注册地址',isShow:false,},
                    {id:20,prop:'ordercode',label:'订单号',isShow:false,},
                    {id:21,prop:'applyCode',label:'申请号 ',isShow:true,},
                    {id:22,prop:'reportCaseTime',label:'报案时间',isShow:false,},
                    {id:23,prop:'productType',label:'保险类型',isShow:false,},
                    {id:24,prop:'paytime',label:'支付时间',isShow:false,},
                    {id:25,prop:'devoteInsuTime',label:'投保时间',isShow:false,},
                    {id:26,prop:'status',label:'最新状态',isShow:false,},
                    {id:27,prop:'gwName',label:'当前顾问名称',isShow:false,},
                    {id:28,prop:'isInsu',label:'是否投保',isShow:false,},
                    {id:29,prop:'isReceiveRefu',label:'是否收到驳回',isShow:false,},
                    {id:30,prop:'isAmends',label:'人工复核结果',isShow:false,},
                    {id:31,prop:'isHadAmends',label:'是否已经理赔',isShow:false,},
                    {id:32,prop:'bodyName',label:'被保险人名称',isShow:true,},
                    {id:33,prop:'payStatus',label:'是否已支付',isShow:false,},
                    {id:34,prop:'identType',label:'证件类型',isShow:false,},
                    {id:35,prop:'id',label:'保险商品id',isShow:false,},
                    {id:36,prop:'defaultAmendsMoney',label:'保险限额',isShow:false,},
                    {id:37,prop:'amendsMoney',label:'理赔金额',isShow:false,},
                    {id:38,prop:'resultFlag',label:'系统判断结果',isShow:false,},
                ],
                checkAll:false,
                exporeExcelObject: {
                    insuOrderVO:{},
                    chArray:[],
                    enArray:[],
                    importFlag:false,
                },
                payTime:null,
                applayTime:null,
            }
        },
        created (){
            this.loadlist();
        },
        methods: {
            //初始化加载数据列表
            loadlist (){
                let self = this;
                //列表数据
                self.searchForm.payStarttime = self.payTime ? moment(self.payTime[0]).format('YYYY-MM-DD 00:00:00') : '' ;
                self.searchForm.payEndtime = self.payTime ? moment(self.payTime[1]).format('YYYY-MM-DD 00:00:00') : '' ;
                self.searchForm.applyStartTime = self.applayTime ? moment(self.applayTime[0]).format('YYYY-MM-DD 00:00:00') : '' ;
                self.searchForm.applyEndTime = self.applayTime ? moment(self.applayTime[1]).format('YYYY-MM-DD 00:00:00') : '' ;
                //初始化为未投保，在data里面修改没有作用
                this.searchForm.isInsu = 1;
                this.$post(this.$api + 'insuOrder/getInsuOrderListByPage',self.searchForm, {headers: this.$gateway.insurance}).then((res) => {
                    if(res.success && res.code == 0){
                        self.tableData = res.data.list;
                        self.tableData.map((item)=>{
                            item.blindStartTime = item.blindStartTime ? moment(item.blindStartTime).format('YYYY-MM-DD') : '';
                            item.blindEndTime = item.blindEndTime ? moment(item.blindEndTime).format('YYYY-MM-DD') : '';
                            item.applyTime = item.applyTime ? moment(item.applyTime).format('YYYY-MM-DD') : '';
                            item.reportCaseTime = item.reportCaseTime ? moment(item.reportCaseTime).format('YYYY-MM-DD') : '';
                            item.paytime = item.paytime ? moment(item.paytime).format('YYYY-MM-DD') : '';
                            item.devoteInsuTime = item.devoteInsuTime ? moment(item.devoteInsuTime).format('YYYY-MM-DD') : '';
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
            resetData (){
                this.searchForm = {
                    ordercode:'',	//否	string	原订单号
                    applyCode:'',	//否	string	申请号
                    applyStartTime:'',	//否	date	申请开始时间
                    applyEndTime:'',	//否	date	申请结束时间
                    insuName:'',	//否	string	保险名称
                    productName:'',	//否	string	订单产品名称
                    productType:1,	//否	int	保险类型：1.盲查保 2.果保商标 3.全程保 4.果保专利 5.双享保 6.复审保 7.果保复审
                    payStarttime:'',	//否	date	支付订单开始时间
                    payEndtime:'',	//否	date	支付订单结束时间
                    reportCaseStartTime:'',	//否	date	报案开始时间
                    reportCaseEndTime:'',	//否	date	报案结束时间
                    devoteInsuStartTime:'',	//否	date	投保开始时间
                    devoteInsuEndTime:'',	//否	date	投保结束时间
                    status:'',	//否	int	订单状态：1:已支付、2:已报件、3:已投保、4:收到驳回、5:待报案、6:待理赔、7:理赔未通过、8:待支付、9:支付失败、10:理赔完成、11:不予理赔
                    gwName:'',	//否	string	当前顾问名称
                    isInsu:'',	//否	int	是否投保 1：否 2：是
                    isReceiveRefu:'',	//否	int	是否收到驳回 1：否 2：是
                    isAmends:'',	//否	int	人工复核是否理赔 1：否 2：是
                    isHadAmends:'',	//否	int	是否已经理赔 1：否 2：是
                    bodyName:'',	//否	string	主体名称
                    payStatus:'',	//否	int	是否已支付：1 否 2 是
                    isReport:2,
                    pageParam:{
                        "pageNo":1,
                        "pageSize":10
                    },
                    totalCount:null,
                    totalPage:null,
                };
                this.productType = 1 ;
                this.payTime = null;
                this.applayTime = null;
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            tiggerGroductType () {
                this.searchForm.productType = this.productType;
                this.searchForm.insuName = '';
                this.loadlist()
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
            //表格字段处理
            ItermNum (row,column){
                return row.itermNum <= 10 ? 0 : parseInt(row.itermNum - 10)
            },
            ConnectBlinTime (row,column){
                return (typeof row.blindStartTime == 'undefined' || typeof row.blindEndTime == 'undefined') ? '' : `${row.blindStartTime} - ${row.blindEndTime}`
            },
            isReport (row,column){
                return  row.isReport == 1 ? '否' : '是';
            },
            resultFlag(row,column){
                return row.resultFlag == 1 ? '符合理赔' : '不符合理赔'
            },
            identType(row,column){
                return row.identType == 1 ? '身份证' : '其他证件'
            },
            payStatus(row,column){
                return row.payStatus == 1 ? '否' : '是'
            },
            isHadAmends(row,column){
                return row.isHadAmends == 1 ? '否' : '是'
            },
            isAmends(row,column){
                switch (row.isAmends) {
                    case 1:
                        return '不符合理赔'
                        break;
                    case 2:
                        return '符合理赔'
                        break;
                    case 3:
                        return '理赔待审'
                        break;
                }
            },
            isReceiveRefu(row,column){
                return row.isReceiveRefu == 1 ? '否' : '是'
            },
            isInsu(row,column){
                return row.isInsu == 1 ? '否' : '是'
            },
            status(row,column){
                switch(row.status){
                    case -1:
                        return '已退款'
                    break;
                    case 1:
                        return '已支付'
                        break;
                    case 2:
                        return '已报件'
                        break;
                    case 3:
                        return '已投保'
                        break;
                    case 4:
                        return '收到驳回'
                        break;
                    case 5:
                        return '待报案'
                        break;
                    case 6:
                        return '待理赔'
                        break;
                    case 7:
                        return '理赔未通过'
                        break;
                    case 8:
                        return '待支付'
                        break;
                    case 9:
                        return '支付失败'
                        break;
                    case 10:
                        return '理赔完成'
                        break;
                    case 11:
                        return '不予理赔'
                        break;
                }
            },
            formatproductType(row,column){
                switch(row.productType){
                    case 1:
                        return '盲查保';
                        break;
                    case 2:
                        return '国保商标';
                        break;
                    case 3:
                        return '全程保';
                        break;
                    case 4:
                        return '国保专利';
                        break;

                }
            },
            //处理结束
            selectOne (	selection, row) {
                this.idList.idArray = [];
                selection.forEach((item)=> {
                    this.idList.idArray.push(item.id)
                })
            },
            selectAll (selection){
                this.idList.idArray = [];
                selection.forEach((item)=> {
                    this.idList.idArray.push(item.id)
                })
                this.tableData.map( (item) => {
                    this.idList.idArray.push(item.id)
                })
                cosnole.log(this.idList.idArray.length)
            },
            selectAll_all(){
                this.idList.idArray = [];
                this.tableData.map( (item) => {
                    this.idList.idArray.push(item.id)
                })
            },
            Insure (){
                this.$post(`${this.$api}insuOrder/getDevoteInsuOrderList`,this.idList, {headers: this.$gateway.insurance}).then(
                    (res) => {
                        if(res.success && res.code == 0){
                            this.tableData1 = res.data;
                            this.dialogVisible = true;
                        }else {
                            this.$message({
                                type:'error',
                                message:res.message
                            })
                        }
                    },
                    (err) => {console.log(err)},
                )
            },
            successInsure () {
                this.$put(`${this.$api}insuOrder/updateManyInsuOrderDevoteStatus`,this.idList, {headers: this.$gateway.insurance}).then(
                    (res) => {
                        if(res.success && res.code == 0){
                            this.dialogVisible = false;

                            this.$message({
                                type:'success',
                                message:res.message
                            })
                            this.loadlist();
                        }else {
                            this.$message({
                                type:'error',
                                message:res.message
                            })
                        }
                    },
                    (err) => {console.log(err)},
                )
            },
            setList(){
                this.cols.map((item)=>{
                    this.cols1.map((items)=>{
                        if(item.id == items.id){
                            item.isShow = items.isShow;
                        }
                    })
                })
                this.dialogVisible1 = false;
            },
            selectAll(){
                this.cols1.map((item)=>{
                    item.isShow = this.checkAll;
                })
            },
            exportExcel(){
                this.exporeExcelObject.insuOrderVO = this.searchForm;
                this.cols.map((item)=>{
                    if(item.isShow == true){
                        this.exporeExcelObject.chArray.push(item.label);
                        this.exporeExcelObject.enArray.push(item.prop);
                    }
                })
                this.$exportExcel(`${this.$api}insuOrder/importInsuOrderExcel`,this.exporeExcelObject, this.$gateway.insurance).then(
                    (res) => {
                        this.$message({
                            type:'success',
                            message:'导出成功'
                        })
                    }
                )
            },
            handleClose(done){
                if(done == '1'){

                }else {
                    done()
                }
                this.cols.map((item)=>{
                    this.cols1.map((items)=>{
                        if(item.id == items.id){
                            items.isShow = item.isShow ;
                        }
                    })
                })
            },
        }
    }
</script>

<style scoped>
.w131{
  width:158px;
}
.w130 {
    width: 142px;
}
.text_right {
    text-align: right;
}
.excelBtn {
    text-align: left;
}
.m_b10 {
    margin-bottom: 25px;
}
.setListRow {
    height: 300px;
}
.setListRow div {
    width: 100px;
    text-align: left;
    font-size: 24px;
    float:left;
    height: 36px;
}
.el-date-editor--daterange.el-input__inner{
  width:246px;
}
.el-table th>.cell{
  font-weight:600;
}
</style>
