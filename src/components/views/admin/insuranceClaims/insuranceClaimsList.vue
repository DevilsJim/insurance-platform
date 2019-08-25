<template>
    <div>
        <div class="bthBox excelBtn m_b10">
            <el-button type="danger" round @click="productType = 1;tiggerGroductType()" size="small">盲查保
              <i v-if="productType == 1" class="el-icon-check"></i>
            </el-button>
            <el-button type="danger" round @click="productType = 2;tiggerGroductType()" size="small">果保商标
              <i v-if="productType == 2" class="el-icon-check"></i>
            </el-button>
            <el-button type="danger" round @click="productType = 3;tiggerGroductType()" size="small">全程保
              <i v-if="productType == 3" class="el-icon-check"></i>
            </el-button>
            <el-button type="danger" round @click="productType = 4;tiggerGroductType()" size="small">果保专利
              <i v-if="productType == 4" class="el-icon-check"></i>
            </el-button>
            <el-button type="danger" round @click="productType = 5;tiggerGroductType()" size="small">双享保
              <i v-if="productType == 5" class="el-icon-check"></i>
            </el-button>
            <el-button type="danger" round @click="productType = 6;tiggerGroductType()" size="small">复审保
                <i v-if="productType == 6" class="el-icon-check"></i>
            </el-button>
            <el-button type="danger" round @click="productType = 7;tiggerGroductType()" size="small">果保复审
                <i v-if="productType == 7" class="el-icon-check"></i>
            </el-button>
        </div>
        <el-form :inline="true" class="demo-form-inline" label-width="110px">
            <el-row>
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
                        <el-input v-model="searchForm.gwName" placeholder="当前顾问" class="w130" size="small"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="订单号：">
                        <el-input v-model="searchForm.ordercode" placeholder="订单号" class="w130" size="small"></el-input>
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
            <el-row>
                <el-col :span="4">
                    <el-form-item label="系统判断结果：">
                        <el-select v-model="searchForm.resultFlag" placeholder="请选择系统判断结果" class="w130" size="small">
                            <el-option label="全部" value=""></el-option>
                            <el-option label="符合理赔" value="1"></el-option>
                            <el-option label="不符合理赔" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="人工复核结果：">
                        <el-select v-model="searchForm.isAmends" placeholder="请选择人工复核结果" class="w130" size="small">
                            <el-option label="全部" value=""></el-option>
                            <el-option label="符合理赔" value="2"></el-option>
                            <el-option label="不符合理赔" value="1"></el-option>
                            <el-option label="理赔待审" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <!--<div class="block">
                        <span class="demonstration">投保日期：</span>
                        <el-date-picker
                                v-model="searchForm.devoteInsuStartTime"
                                placeholder="选择投保开始时间"
                                format="yyyy - MM - dd -"
                                value-format="yyyy-MM-dd 00:00:00"
                                class="w131">
                        </el-date-picker>
                        -
                        <el-date-picker
                                v-model="searchForm.devoteInsuEndTime"
                                placeholder="选择投保结束时间"
                                format="yyyy - MM - dd -"
                                value-format="yyyy-MM-dd  00:00:00"
                                class="w131">
                        </el-date-picker>
                    </div>-->
                    <div class="block">
                        <span class="demonstration">投保日期：</span>
                        <el-date-picker
                                v-model="devoteInsuTime"
                                :clearable="false"
                                type="daterange"
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
                    <div class="block">
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
            <el-row>
              <el-col :span="12">
                <!--<div class="block">
                  <span class="demonstration">上传日期：</span>
                  <el-date-picker
                    v-model="searchForm.uploadStartDate"
                    placeholder="选择上传开始时间"
                    format="yyyy - MM - dd -"
                    value-format="yyyy-MM-dd 00:00:00"
                    class="w131">
                  </el-date-picker>
                  -
                  <el-date-picker
                    v-model="searchForm.uploadEndDate"
                    placeholder="选择上传结束时间"
                    format="yyyy - MM - dd -"
                    value-format="yyyy-MM-dd 00:00:00"
                    class="w131">
                  </el-date-picker>
                </div>-->
                  <div class="block">
                      <span class="demonstration">上传日期：</span>
                      <el-date-picker
                              v-model="uploadDate"
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
            <el-row style="margin-top:20px;">
                <el-col :span="12" class="text-left">
                    <el-button icon="el-icon-download"  @click="exportExcel()" style="float:left;" size="small">导出EXCEL</el-button>
                    <el-button :disabled="checkSelection.length==0" @click="claimInformation" style="float:left;" size="small">
                        确认发送理赔信息
                    </el-button>
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
                tooltip-effect="dark"
                height="550"
                size="small"
                @selection-change="handleSelectionChange"
                border>
            <el-table-column
                    type="selection"
                    fixed
                    header-align="center"
                    style="width:50px;">
            </el-table-column>
            <el-table-column
                    v-for="col in cols"
                    :prop="col.prop"
                    :label="col.label"
                    :key="col.id"
                    :formatter="col.formatter"
                    :width="col.width"
                    :fixed="col.fixed"
                    header-align="center"
                    v-if="col.isShow == 1 "></el-table-column>
            <!--<el-table-column
                    prop="productName"
                    fixed
                    width="150"
                    label="产品名称">
            </el-table-column>
            <el-table-column
                    prop="insuName"
                    width="120"
                    label="保险产品">
            </el-table-column>
            <el-table-column
                    prop="company"
                    width="150"
                    label="保险公司">
            </el-table-column>
            <el-table-column
                    prop="paytime"
                    width="160"
                    label="支付日期">
            </el-table-column>
            <el-table-column
                    prop="applyTime"
                    width="160"
                    label="申请日期">
            </el-table-column>
            <el-table-column
                    prop="inseCode"
                    width="100"
                    label="保险编号">
            </el-table-column>
            <el-table-column
                    prop="applyCode"
                    width="120"
                    label="申请号">
            </el-table-column>
            <el-table-column
                    prop="insuMoney"
                    width="100"
                    label="保费">
            </el-table-column>
            <el-table-column
                    prop="bodyName"
                    width="100"
                    label="被保险人">
            </el-table-column>
            <el-table-column
                    prop="bodyName"
                    width="100"
                    label="申请名称">
            </el-table-column>
            <el-table-column
                    prop="category"
                    width="100"
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
                    width="100"
                    :formatter="formatItermNum"
                    label="商标超项数">
            </el-table-column>
            <el-table-column
                    prop="gwName"
                    width="100"
                    label="当前顾问">
            </el-table-column>-->
            <el-table-column
                    fixed="right"
                    width="100"
                    header-align="center"
                    label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">人工复核
                    </el-button>
                </template>
            </el-table-column>
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
        <el-dialog :visible.sync="dialogFormVisible">
            <el-row>
                <el-col :span="12">
                    <div class="filebBox">
                        <dl>
                            <dt>
                                <a :href="imgList[0]" target="_blank" id="pdfImg1">
                                      <img :src="imgList[0]" id="pdfImg" width="400" height="565"/>
                                </a>
                            </dt>
                            <dd style="height:10px;">
                                <ol>
                                    <li v-for="(item,index) in imgList" v-bind:class="indexCon==index?'fileActive':''"
                                        @click="showBigImg(index)" style='width:0px;height:0px;'>
                                        <img v-bind:src="item" style="display: none"/>
                                    </li>
                                </ol>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <el-pagination
                                small
                                @current-change="handleCurrentChangeDialog"
                                :current-page="insuranceData.picObj.pageNo"
                                layout="total, prev, pager, next"
                                :page-size="1"
                                :total="insuranceData.picObj.totalItemsCount">
                        </el-pagination>
                    </div>
                </el-col>
                <el-col :span="12" class="dialogRight">
                    <p class="title">保险产品：<span v-html="insurance.insuName"></span></p>
                    <div class="dialog_right_box">
                        <h4>订单信息：</h4>
                        <p class="insureTip"><span>申请号：</span>{{insuranceData.appNum}}</p>
                        <p class="insureTip"><span>申请时间：</span>{{insuranceData.appDate}}</p>
                        <p class="insureTip" v-if="insurance.productType==1"><span>盲查期间：</span>{{insurance.blindStartTime}}至{{insurance.blindEndTime}}</p>
                    </div>
                    <div class="dialog_right_box" v-if="insurance.productType!=4">
                        <h4>OCR识别信息：</h4>
                        <p class="insureTip"><span>驳回类型：</span><a v-if="insuranceData.rejectType==1">全部驳回</a><a v-if="insuranceData.rejectType==2">部分驳回</a></p>
                        <p class="insureTip"><span>申请号：</span>{{insuranceData.appNum}}</p>
                        <p class="insureTip"><span>申请日期：</span>{{insuranceData.appDate}}</p>
                        <div v-if="insurance.productType==2 || insurance.productType==3 || insurance.productType==5">
                          <h4>驳回内容关键字：</h4>
                          <p style="text-align:left;line-height: 30px;padding-left: 15px;"
                             v-html="insuranceData.rejectContent"></p>
                        </div>
                        <div class="quoteMark" v-if="insurance.productType==1">
                          <p class="insureTip">引证商标号：
                            <span style="text-align: left;font-weight: 100" v-for="(item,index) in refMarkNoList">{{item}}<b v-show="index != refMarkNoList.length-1">，</b></span>
                          </p>
                          <p class="insureTip">引证商标申请日期：
                            <span style="width:150px;font-weight: 100;text-align: left;" v-for="(item,index) in dateList">{{item}}<b v-show="index != dateList.length-1">，</b></span>
                          </p>
                        </div>
                    </div>
                    <div class="dialog_right_box" style="height:220px;" v-if="insurance.productType==2 || insurance.productType==3 || insurance.productType==5">
                        <div class="pic_box">
                            <h3>申请商标图片</h3>
                            <p>申请号：<span v-html="insuranceData.appNum"></span></p>
                            <img :src="picImg+insuranceData.appPicUrl" alt=""
                                 style="width:96px;height:120px;display: block;margin: 0 auto;margin-bottom: 15px;">
                        </div>
                        <div class="pic_box">
                            <h3>引证商标图片</h3>
                            <p>引证商标号码：<span v-html="refMarkNoList[0]" id="refMark"></span></p>
                            <img :src="markList[0]" id="pic" alt=""
                                 style="width:96px;height:120px;display: block;margin: 0 auto;margin-bottom: 15px;">
                            <div>
                                <el-button @click="lastOne" size="mini" :disabled="this.picIndex<=0">上一张</el-button>
                                <el-button @click="nextOne" size="mini"
                                           :disabled="this.picIndex==this.markList.length-1">下一张
                                </el-button>
                            </div>
                        </div>
                    </div>
                    <div class="dialog_right_box">
                        <h4>系统识别结果：<span v-if="insuranceData.resultFlag==1">符合理赔</span><span
                                v-if="insuranceData.resultFlag==2">不符合理赔</span><span v-if="insuranceData.resultFlag==9">未识别</span>
                        </h4>
                        <p class="insureTip">
                            <span>人工复核意见：</span>
                            <select class="selectOpinion" @change="claimsChange" v-model="insuranceData.isAmends">
                                <option value="2">符合理赔</option>
                                <option value="1">不符合理赔</option>
                                <option value="3">理赔待审</option>
                            </select>
                        </p>
                        <p class="insureTip">
                            <span style="float:left;">系统意见收集：</span>
                            <el-checkbox-group v-model="checkList" @change="opinionCollection">
                                <el-checkbox label="1、理赔结果判断错误"></el-checkbox>
                                <el-checkbox label="2、商标申请号识别错误" v-if="insurance.productType==2||insurance.productType==3||insurance.productType==5"></el-checkbox>
                                <el-checkbox label="3、商标申请日期识别错误" v-if="insurance.productType==2||insurance.productType==3||insurance.productType==5"></el-checkbox>
                                <el-checkbox label="4、商标条款提取错误" v-if="insurance.productType==2||insurance.productType==3||insurance.productType==5"></el-checkbox>
                                <el-checkbox label="2、引证商标申请号识别错误" v-if="insurance.productType==1"></el-checkbox>
                                <el-checkbox label="3、引证商标申请日期错误" v-if="insurance.productType==1"></el-checkbox>
                                <el-checkbox label="4、驳回理由提取错误" v-if="insurance.productType==1"></el-checkbox>
                                <el-checkbox label="5、其他" v-model="other" v-if="insurance.productType!=4"></el-checkbox>
                                <el-checkbox label="2、其他" v-model="other" v-if="insurance.productType==4"></el-checkbox>
                            </el-checkbox-group>
                        <div style="clear:both;"></div>

                        <div style="clear:both;"></div>
                        <el-input
                                type="textarea"
                                class="textarea"
                                v-show="other"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="insuranceData.adviceOther">
                        </el-input>
                        </p>
                        <el-button size="small" style="background:#A9A3FF;color:#fff;margin-top:20px;"
                                   @click="dialogFormVisible=false;cliamsSure();">确定
                        </el-button>
                        <el-button size="small" style="background:#ccc;color:#fff;margin-top:20px;"
                                   @click="dialogFormVisible=false;">取消
                        </el-button>
                    </div>
                    <div><a :href="insuranceData.pdfUrl">下载驳回通知书</a></div>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>


<script>
    import '@/assets/css/table_batch.css';
    import moment from 'moment'
    export default {
        name: '',
        data() {
            return {
                productType: 1,
                searchForm: {
                    ordercode: '',	//否	string	原订单号
                    applyCode: '',	//否	string	申请号
                    applyStartTime: '',	//否	date	申请开始时间
                    applyEndTime: '',	//否	date	申请结束时间
                    productName: '',	//否	string	订单产品名称
                    insuName: '',	//否	string	保险名称
                    productType: 1,	//否	int	保险类型：1.盲查保 2.果保商标 3.全程保 4.果保专利 5.双享保 6.复审保 7.果保复审
                    payStarttime: '',	//否	date	支付订单开始时间
                    payEndtime: '',	//否	date	支付订单结束时间
                    reportCaseStartTime: '',	//否	date	报案开始时间
                    reportCaseEndTime: '',	//否	date	报案结束时间
                    devoteInsuStartTime: '',	//否	date	投保开始时间
                    devoteInsuEndTime: '',	//否	date	投保结束时间
                    status: '',	//否	int	订单状态：1:已支付、2:已报件、3:已投保、4:收到驳回、5:待报案、6:待理赔、7:理赔未通过、8:待支付、9:支付失败、10:理赔完成、11:不予理赔
                    gwName: '',	//否	string	当前顾问名称
                    isReport: '',	//否	int	是否报件 1：否 2：是
                    isReceiveRefu: 2,	//否	int	是否收到驳回 1：否 2：是
                    isAmends: '',	//否	int	人工复核是否理赔 1：否 2：是
                    isHadAmends: '',	//否	int	是否已经理赔 1：否 2：是
                    isInsu: 2,	//否	int	是否投保 1：否 2：是
                    isSendConfirm: 1,//是否已经发送理赔信息 1：否 2：是
                    bodyName: '',	//否	string	主体名称
                    resultFlag: '',
                    payStatus: '',	//否	int	是否已支付：1 否 2 是
                    pageParam: {
                        "pageNo": 1,
                        "pageSize": 10
                    },
                },
                tableData: [],
                checkSelection: [],
                dialogFormVisible: false,
                dialogVisible1: false,
                insuranceData: {
                    adviceOther: '',
                    picObj: {
                        pageNo: 1,
                        totalItemsCount: null,
                    },
                    picArray: []
                },
                totalCount:null,
                totalPage:null,
                insurance: {},
                checkList: [],
                other: false,
                picImg: this.$imgUrl,
                imgList: [],
                refMarkNoList: [],
                markList: [],
                dateList: [],
                picIndex: 0,
                bigImgSrc: '',
                indexCon: '',
                cols: [
                    {id: 1, prop: 'productName', label: '产品名称', isShow: true,width: 150,fixed:true}, // 列表默认展示
                    {id: 2, prop: 'insuName', label: '保险产品', isShow: true,width: 150},// 列表默认展示
                    {id: 3, prop: 'inseCode', label: '保险编号', isShow: false,width: 200},
                    {id: 4, prop: 'orderMoney', label: '订单金额', isShow: false,width: 150},
                    {id: 5, prop: 'orderPublicexp', label: '申请官费', isShow: false,width: 150},
                    {id: 6, prop: 'orderServeexp', label: '订单服务费', isShow: false,width: 150},
                    {id: 7, prop: 'insuServeexp', label: '保险服务费', isShow: false,width: 150},
                    {id: 8, prop: 'insuMoney', label: '保费', isShow: false,width: 150},
                    {id: 9, prop: 'company', label: '保险公司', isShow: false,width: 150},
                    {id: 10, prop: 'applyName', label: '申请名称', isShow: true,width: 150},// 列表默认展示
                    {id: 11, prop: 'category', label: '申请类别', isShow: false,width: 150},
                    {id: 12, prop: 'isReport', label: '是否报件', isShow: false, formatter: this.isReport,width: 150},
                    {id: 13, prop: 'applyTime', label: '申请日期', isShow: true,width: 150},// 列表默认展示
                    {id: 14, prop: 'blindStartTime', label: '盲查期间', isShow: true,width: 200, formatter: this.ConnectBlinTime},// 列表默认展示
                    {id: 15, prop: 'itermNum', label: '商标超项数', isShow: false,width: 150, formatter: this.ItermNum},
                    {id: 16, prop: 'agency', label: '代理机构', isShow: false,width: 150},
                    {id: 18, prop: 'identCode', label: '身份证号', isShow: false,width: 150},
                    {id: 19, prop: 'regAddress', label: '注册地址', isShow: false,width: 150},
                    {id: 20, prop: 'ordercode', label: '订单号', isShow: true,width: 150},// 列表默认展示
                    {id: 21, prop: 'applyCode', label: '申请号 ', isShow: true,width: 150},// 列表默认展示
                    {id: 22, prop: 'reportCaseTime', label: '报案时间', isShow: false,width: 150},
                    {id: 23, prop: 'productType', label: '保险类型', isShow: false, width: 150,formatter: this.formatproductType},
                    {id: 24, prop: 'paytime', label: '支付时间', isShow: false,width: 150},
                    {id: 25, prop: 'devoteInsuTime', label: '投保时间', isShow: true,width: 150},// 列表默认展示
                    {id: 26, prop: 'status', label: '最新状态', isShow: true, formatter: this.status,width: 150},// 列表默认展示
                    {id: 27, prop: 'gwName', label: '当前顾问名称', isShow: false,width: 150},
                    {id: 28, prop: 'isInsu', label: '是否投保', isShow: false, formatter: this.isInsu,width: 150},
                    {id: 29, prop: 'isReceiveRefu', label: '是否收到驳回', isShow: false, width: 150,formatter: this.isReceiveRefu},
                    {id: 30, prop: 'isAmends', label: '人工复核结果', isShow: true,width: 150, formatter: this.isAmends},// 列表默认展示
                    {id: 31, prop: 'isHadAmends', label: '是否已经理赔', isShow: false,width: 150, formatter: this.isHadAmends},
                    {id: 32, prop: 'bodyName', label: '被保险人名称', isShow: false,width: 150},
                    {id: 33, prop: 'payStatus', label: '是否已支付', isShow: false,width: 150, formatter: this.payStatus},
                    {id: 34, prop: 'identType', label: '证件类型', isShow: false, width: 150,formatter: this.identType},
                    {id: 35, prop: 'id', label: '保险商品id', isShow: false,width: 150},
                    {id: 36, prop: 'defaultAmendsMoney', label: '保险限额', isShow: false,width: 150},
                    {id: 37, prop: 'amendsMoney', label: '理赔金额', isShow: true,width: 150},// 列表默认展示
                    {id: 38, prop: 'resultFlag', label: '系统判断结果', isShow: false,width: 150, formatter: this.resultFlag},
                ],
                cols1: [
                    {id: 1, prop: 'productName', label: '产品名称', isShow: true,width: 150,fixed:true},// 列表默认展示
                    {id: 2, prop: 'insuName', label: '保险产品', isShow: true,width: 150},// 列表默认展示
                    {id: 3, prop: 'inseCode', label: '保险编号', isShow: false,width: 150},
                    {id: 4, prop: 'orderMoney', label: '订单金额', isShow: false,width: 150},
                    {id: 5, prop: 'orderPublicexp', label: '申请官费', isShow: false,width: 150},
                    {id: 6, prop: 'orderServeexp', label: '订单服务费', isShow: false,width: 150},
                    {id: 7, prop: 'insuServeexp', label: '保险服务费', isShow: false,width: 150},
                    {id: 8, prop: 'insuMoney', label: '保费', isShow: false,width: 150},
                    {id: 9, prop: 'company', label: '保险公司', isShow: false,width: 150},
                    {id: 10, prop: 'applyName', label: '申请名称', isShow: true,width: 150},// 列表默认展示
                    {id: 11, prop: 'category', label: '申请类别', isShow: false,width: 150},
                    {id: 12, prop: 'isReport', label: '是否报件', isShow: false, formatter: this.isReport,width: 150},
                    {id: 13, prop: 'applyTime', label: '申请日期', isShow: true,width: 150},// 列表默认展示
                    {id: 14, prop: 'blindStartTime', label: '盲查期间', isShow: true,width: 150, formatter: this.ConnectBlinTime},// 列表默认展示
                    {id: 15, prop: 'itermNum', label: '商标超项数', isShow: false,width: 150, formatter: this.ItermNum},
                    {id: 16, prop: 'agency', label: '代理机构', isShow: false,width: 150},
                    {id: 18, prop: 'identCode', label: '身份证号', isShow: false,width: 150},
                    {id: 19, prop: 'regAddress', label: '注册地址', isShow: false,width: 150},
                    {id: 20, prop: 'ordercode', label: '订单号', isShow: true,width: 150},// 列表默认展示
                    {id: 21, prop: 'applyCode', label: '申请号 ', isShow: true,width: 150},// 列表默认展示
                    {id: 22, prop: 'reportCaseTime', label: '报案时间', isShow: false,width: 150},
                    {id: 23, prop: 'productType', label: '保险类型', isShow: false, width: 150,formatter: this.formatproductType},
                    {id: 24, prop: 'paytime', label: '支付时间', isShow: false,width: 150},
                    {id: 25, prop: 'devoteInsuTime', label: '投保时间', isShow: true,width: 150},// 列表默认展示
                    {id: 26, prop: 'status', label: '最新状态', isShow: true, formatter: this.status,width: 150},// 列表默认展示
                    {id: 27, prop: 'gwName', label: '当前顾问名称', isShow: false,width: 150},
                    {id: 28, prop: 'isInsu', label: '是否投保', isShow: false, formatter: this.isInsu,width: 150},
                    {id: 29, prop: 'isReceiveRefu', label: '是否收到驳回', isShow: false, width: 150,formatter: this.isReceiveRefu},
                    {id: 30, prop: 'isAmends', label: '人工复核结果', isShow: true,width: 150, formatter: this.isAmends},// 列表默认展示
                    {id: 31, prop: 'isHadAmends', label: '是否已经理赔', isShow: false,width: 150, formatter: this.isHadAmends},
                    {id: 32, prop: 'bodyName', label: '被保险人名称', isShow: false,width: 150},
                    {id: 33, prop: 'payStatus', label: '是否已支付', isShow: false,width: 150, formatter: this.payStatus},
                    {id: 34, prop: 'identType', label: '证件类型', isShow: false, width: 150,formatter: this.identType},
                    {id: 35, prop: 'id', label: '保险商品id', isShow: false,width: 150},
                    {id: 36, prop: 'defaultAmendsMoney', label: '保险限额', isShow: false,width: 150},
                    {id: 37, prop: 'amendsMoney', label: '理赔金额', isShow: true,width: 150},// 列表默认展示
                    {id: 38, prop: 'resultFlag', label: '系统判断结果', isShow: false,width: 150, formatter: this.resultFlag},
                ],
                checkAll:false,
                exporeExcelObject: {
                    insuOrderVO:{},
                    chArray:[],
                    enArray:[],
                    importFlag:false,
                },
                applayTime:null,
                uploadDate:null,
                devoteInsuTime:null,
            }
        },
        created() {
            this.loadlist();
        },
        methods: {
            //初始化加载数据列表
            loadlist() {
                let self = this;
                //列表数据
                self.searchForm.applyStartTime = self.applayTime ? moment(self.applayTime[0]).format('YYYY-MM-DD 00:00:00') : '' ;
                self.searchForm.applyEndTime = self.applayTime ? moment(self.applayTime[1]).format('YYYY-MM-DD 00:00:00') : '' ;
                self.searchForm.uploadStartDate = self.uploadDate ? moment(self.uploadDate[0]).format('YYYY-MM-DD 00:00:00') : '' ;
                self.searchForm.uploadEndDate = self.uploadDate ? moment(self.uploadDate[1]).format('YYYY-MM-DD 00:00:00') : '' ;
                self.searchForm.devoteInsuStartTime = self.devoteInsuTime ? moment(self.devoteInsuTime[0]).format('YYYY-MM-DD 00:00:00') : '' ;
                self.searchForm.devoteInsuEndTime = self.devoteInsuTime ? moment(self.devoteInsuTime[1]).format('YYYY-MM-DD 00:00:00') : '' ;
                //初始化为未投保，在data里面修改没有作用
                this.searchForm.isInsu = 2;
                this.$post(`${this.$api}insuOrder/getInsuOrderListByPage`, self.searchForm, {headers: this.$gateway.insurance}).then((res) => {
                    if (res.success && res.code == 0) {
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
                    } else {
                        this.$message(res.message);
                    }
                }, (err) => {
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
                    isReport:'',	//否	int	是否报件 1：否 2：是
                    isInsu:2,	//否	int	是否投保 1：否 2：是
                    isReceiveRefu:2,	//否	int	是否收到驳回 1：否 2：是
                    isSendConfirm:1,
                    isAmends:'',	//否	int	人工复核是否理赔 1：否 2：是
                    isHadAmends:'',	//否	int	是否已经理赔 1：否 2：是
                    bodyName:'',	//否	string	主体名称
                    payStatus:'',	//否	int	是否已支付：1 否 2 是
                    pageParam:{
                        "pageNo":1,
                        "pageSize":10
                    },
                    totalCount:null,
                    totalPage:null,
                };
                this.productType = 1 ;
                this.uploadDate = null;
                this.applayTime = null;
                this.devoteInsuTime = null;
            },
            //人工复核意见选择
            claimsChange() {
            },
            //弹窗确定
            cliamsSure() {
                //insuOrder/auditInsuOrder
                this.$put(this.$api + '/insuOrder/auditInsuOrder/', {
                    id: this.insurance.id,
                    isAmends: this.insuranceData.isAmends,
                    adviceCollection: this.insuranceData.adviceCollection,
                    adviceOther: this.insuranceData.adviceOther
                }, {headers: this.$gateway.insurance}).then((res) => {
                    this.loadlist();
                })
            },
            //人工复核
            handleClick: function (scope) {
                let self = this;
                self.checkList = [];
                self.other = false;
                self.insurance = scope;
                self.$fetch(self.$api + 'insuOcrresult/getInsuOcrresultByOrderCode/' + scope.ordercode, {}, this.$gateway.insurance).then((res) => {
                  if(!!res.data && res.success){
                    self.dialogFormVisible = true;
                    self.insuranceData = res.data;
                    console.log(res.data);

                    self.markList = !!res.data.refPicUrl && !!res.data.refPicUrl.length > 0 ? res.data.refPicUrl.split(",") : [];   //引证商标图片路径

                    self.refMarkNoList = !!res.data.refMarkNo && !!res.data.refMarkNo.length > 0 ? res.data.refMarkNo.split(",") : [];  //引证商标号码

                    self.imgList = !!res.data.rejectPicUrl && !!res.data.rejectPicUrl.length > 0 ? res.data.rejectPicUrl.split(",") : [];  //驳回通知书路径分割

                    self.dateList = !!res.data.refMarkDate && !!res.data.refMarkDate.length > 0 ? res.data.refMarkDate.split(",") : [];  //引证商标日期

                    self.insuranceData.picArray = !!res.data.rejectPicUrl && !!res.data.rejectPicUrl.length > 0 ? res.data.rejectPicUrl.split(",") : [];

                    self.insuranceData.picObj = {
                      // totalItemsCount: res.data.rejectPicUrl.split(",").length,
                      totalItemsCount: self.insuranceData.picArray.length,
                      pageNo: 1
                    };
                  }else{
                    this.$message.error('数据返回错误！');
                    self.dialogFormVisible = false;
                    self.insuranceData.picObj.pageNo = 1
                  }
                })
                //下载驳回通知书
                //self.insuranceData.DonloadPath = self.picImg + '/base/getfile/download/allPath?path=/' + self.insuranceData.pdfUrl + '&fname=' + new Date().getTime() + '.pdf&act=down';

            },
            showBigImg() {
                this.bigImgSrc = this.imgList[index];
                this.indexCon = index;
            },
            handleCurrentChangeDialog(val) {
              console.log('val->'+ val);
              var _index = !!val ? val - 1 : 'undefined';
                if (!!val) {
                    this.Pic(_index)
                }
            },
            Pic(index) {
              console.log(index);
              this.insuranceData.showPicUrl = this.insuranceData.picArray[index];//this.picImg + '/base/getfile/sfw?fpath=/' +
              document.getElementById("pdfImg").src = this.insuranceData.picArray[index];
              document.getElementById("pdfImg1").href = this.insuranceData.picArray[index];
            },
            //lastOne  上一张
            lastOne(index) {
                if(this.markList.length > 0){
                  this.picIndex--;
                  /*if(this.picIndex<0){
                   this.picIndex=0;
                   }*/
                  document.getElementById("pic").src = this.markList[this.picIndex];
                  document.getElementById("refMark").innerHTML = this.refMarkNoList[this.picIndex];
                }

            },
            //nextOne  下一张
            nextOne() {
                if(this.markList.length > 0){
                  this.picIndex++;
                  /*if(this.picIndex==this.markList.length){
                   this.picIndex=0;
                   }*/
                  document.getElementById("pic").src = this.markList[this.picIndex];
                  document.getElementById("refMark").innerHTML = this.refMarkNoList[this.picIndex];
                }

            },
            //意见收集
            opinionCollection() {
                this.checkList = this.checkList.sort();
                this.insuranceData.adviceCollection = this.checkList.join(",");
            },
            //确认发送理赔信息
            claimInformation: function () {
                let self = this;

                const h = this.$createElement;
                this.$msgbox({
                    title: '发送理赔信息',
                    message: h('p', null, [
                        h('span', null, "请确认是否要立即发送理赔信息至客户？"),
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            this.$put(`${this.$api}insuOrder/confirmSendAmends`, {idList: self.checkSelection}, {headers:this.$gateway.insurance}).then((res) => {
                                if (res.success && res.code == 0) {
                                    self.tableData = res.data.list;
                                    self.searchForm.totalCount = res.data.totalCount;
                                    self.searchForm.totalPage = res.data.totalPage;
                                    this.loadlist();
                                } else {
                                    this.$message(res.message);
                                }
                            }, (err) => {
                                this.$message(err);
                            })
                            done()
                        } else if (action === 'cancel') {
                            done()
                        }
                    }
                }).then(action => {
                    this.$message({
                        type: 'info',
                        message: '成功！'
                    });
                });
            },
            tiggerGroductType() {
                this.searchForm.productType = this.productType;
                this.searchForm.insuName = '';
                this.loadlist()
            },
            //选择框
            handleSelectionChange: function (val) {
                this.checkSelection = [];
                val.map((item) => {
                    this.checkSelection.push(item.id);
                });
                console.log(this.checkSelection);
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
            },
            //分页结束
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
                console.log(this.exporeExcelObject)
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
  .quoteMark{
    width:100%;
    min-height:66px;
    margin-left: 26px;
      color: #9695A3;
      font-weight: 600;
  }
  .quoteMark div{
    float:left;
    width:50%;
    color:#9695A3;
    font-weight: 600;
  }
  .quoteMark div p{
    font-weight:400;
  }
  .w131{
    width:159px;
  }
  .pic_box {
      width: 190px;
      float: left;
  }

  .el-checkbox + .el-checkbox {
      margin-left: 0;
  }

  .el-checkbox-group {
      width: 200px;
      float: left;
  }

  .textarea {
      width: 222px;
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

  .el-pagination {
      float: right;
  }

  .dialogRight .title {
      height: 41px;
      color: #fff;
      line-height: 41px;
      text-align: left;
      padding-left: 15px;
      width: 100%;
      background: url('../../../../assets/bg/icon_biaoqian.png') no-repeat left;
  }

  .dialogRight .dialog_right_box {
      height: auto;
      padding: 15px;
      margin-bottom: 15px;
      background: #F5F5F5;
  }

  .dialogRight .dialog_right_box .insureTip {
      color: #9695A3;
      text-align: left;
      line-height: 28px;
  }

  .dialogRight .dialog_right_box .insureTip span {
      width: 100px;
      color: #9695A3;
      font-weight: 600;
      display: inline-block;
      text-align: right;
  }

  .dialogRight .dialog_right_box h4 {
      width: 100%;
      height: 26px;
      font-size: 16px;
      font-weight: bold;
      text-align: left;
      line-height: 30px;
      padding-left: 5px;
      border-left: 3px solid #F96E75;
  }

  .selectOpinion {
      width: 100px;
      height: 30px;
      border-radius: 4px;
      line-height: 30px;
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
  .el-date-editor--daterange .el-input__inner{
    width:246px;
    margin-top:4px;
  }
  .el-dialog__body{
      height:500px;
      overflow-y: scroll;
  }
  .el-table th>.cell{
    font-weight:600;
  }
</style>
