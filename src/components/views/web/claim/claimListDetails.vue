<template>
    <!--详情-->
    <div class="insuranceBox">
        <!--status == 3  || 4 投保成功-->
        <div v-if="status == 3 || status == 4" class="container">
            <h1 class="titleH1">订单基本信息</h1>
            <div class="info">
                <ul>
                    <li><span>订单编号:</span>{{detailsObject.ordercode}}</li>
                    <li><span>保险类型:</span>{{detailsObject.productType | formatProductType}}</li>
                    <li><span>商标别称:</span>{{detailsObject.productName}}</li>
                    <li><span>申请时间:</span>{{moment(detailsObject.applyTime).format('YYYY-MM-DD')}}</li>
                    <li><span>申请官费:</span>{{detailsObject.orderPublicexp}}</li>
                </ul>
                <ul>
                    <li :title="blindTime"><span>盲查期间:</span>{{moment(detailsObject.blindStartTime).format('YYYY-MM-DD')}} - {{moment(detailsObject.blindEndTime).format('YYYY-MM-DD')}}</li>

                    <li><span>订单状态:</span>{{detailsObject.status | cnStatus}}</li>

                    <li :title="detailsObject.inseCode"><span>保险编号:</span>{{detailsObject.inseCode}}</li>
                    <li><span>代理机构:</span>{{detailsObject.agency}}</li>
                    <li><span>商标类别:</span>{{detailsObject.category}}</li>
                </ul>
                <ul>
                    <li><span>投保成功时间:</span>{{moment(detailsObject.devoteInsuTime).format('YYYY-MM-DD')}}</li>
                    <li><span>保费:</span>{{detailsObject.insuMoney}}</li>
                    <li><span>理赔金额:</span>{{detailsObject.amendsMoney}}</li>
                    <li><span>申请号:</span>{{detailsObject.applyCode}}</li>
                    <li><span>商标超项数:</span>{{detailsObject.itermNum | itermNum}}</li>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">被保险主体基本信息</h1>
            <div class="info1">
                <ul>
                    <li>
                        <span>被保险主体名称：</span>
                        <b>{{detailsObject.bodyName}}</b>
                    </li>
                    <li>
                        <span>证件类型：</span>
                        <b>{{detailsObject.bodyType | bodyType}}</b>
                    </li>
                    <li>
                        <span>证件号码：</span>
                        <b>{{detailsObject.identCode}}</b>
                    </li>
                    <li>
                        <span>注册地址：</span>
                        <b>{{detailsObject.regAddress}}</b>
                    </li>
                    <li class="infoUp" v-if="detailsObject.businessLicenseFile || detailsObject.idcardFrontFile || detailsObject.idcardReverseFile">
                        <span v-if="detailsObject.bodyType == 1">营业执照：</span>
                        <span v-if="detailsObject.bodyType == 2">身份证：</span>
                        <dl v-if="detailsObject.bodyType == 1">
                            <dt><a :href="detailsObject.businessLicenseFile" target="_blank"><img :src="detailsObject.businessLicenseFile"/></a></dt>
                            <dd>
                                <a :href="detailsObject.businessLicenseFile + '&act=1'" target="_blank">下载</a>
                                <strong>(营业执照)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.identType == 2">
                            <dt><a :href="detailsObject.idcardFrontFile" target="_blank"><img :src="detailsObject.idcardFrontFile"/></a></dt>
                            <dd>
                                <a  :href="detailsObject.idcardFrontFile + '&act=1'" target="_blank">下载</a>
                                <strong>(身份证正面)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.identType == 2">
                            <dt><a :href="detailsObject.idcardReverseFile" target="_blank"><img :src="detailsObject.idcardReverseFile"/></a></dt>
                            <dd>
                                <a :href="detailsObject.idcardReverseFile + '&act=1'" target="_blank">下载</a>
                                <strong>(身份证反面)</strong>
                            </dd>
                        </dl>
                    </li>
                    <div class="clear"></div>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">理赔资料</h1>
            <div class="info1">
                暂无
            </div>
            <div class="clear"></div>
            <el-row class="bottom_btn">
                <el-button @click="goBack()">返回列表页</el-button>
            </el-row>
        </div>
        <!--status == 5 待报案    不予理赔没看出来有什么不一样-->
        <div v-if="status == 5 || status == 7 || status == 9 || status == 11" class="container">
            <h1 class="titleH1">订单基本信息</h1>
            <div class="info">
                <ul>
                    <li><span>订单编号:</span>{{detailsObject.ordercode}}</li>
                    <li><span>保险类型:</span>{{detailsObject.productType | formatProductType}}</li>
                    <li><span>商标别称:</span>{{detailsObject.productName}}</li>
                    <li><span>申请时间:</span>{{moment(detailsObject.applyTime).format('YYYY-MM-DD')}}</li>
                    <li><span>申请官费:</span>{{detailsObject.orderPublicexp}}</li>
                </ul>
                <ul>
                    <li :title="blindTime"><span>盲查期间:</span>{{moment(detailsObject.blindStartTime).format('YYYY-MM-DD')}} - {{moment(detailsObject.blindEndTime).format('YYYY-MM-DD')}}</li>

                    <li><span>订单状态:</span>{{detailsObject.status | cnStatus}}</li>

                    <li :title="detailsObject.inseCode"><span>保险编号:</span>{{detailsObject.inseCode}}</li>
                    <li><span>代理机构:</span>{{detailsObject.agency}}</li>
                    <li><span>商标类别:</span>{{detailsObject.category}}</li>
                </ul>
                <ul>
                    <li><span>投保成功时间:</span>{{moment(detailsObject.devoteInsuTime).format('YYYY-MM-DD')}}</li>
                    <li><span>保费:</span>{{detailsObject.insuMoney}}</li>
                    <li><span>理赔金额:</span>{{detailsObject.amendsMoney}}</li>
                    <li><span>申请号:</span>{{detailsObject.applyCode}}</li>
                    <li><span>商标超项数:</span>{{detailsObject.itermNum | itermNum}}</li>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">被保险主体基本信息</h1>
            <div class="info1">
                <ul>
                    <li>
                        <span>被保险主体名称：</span>
                        <b>{{detailsObject.bodyName}}</b>
                    </li>
                    <li>
                        <span>证件类型：</span>
                        <b>{{detailsObject.bodyType | bodyType}}</b>
                    </li>
                    <li>
                        <span>证件号码：</span>
                        <b>{{detailsObject.identCode}}</b>
                    </li>
                    <li>
                        <span>注册地址：</span>
                        <b>{{detailsObject.regAddress}}</b>
                    </li>
                    <li class="infoUp" v-if="detailsObject.businessLicenseFile || detailsObject.idcardFrontFile || detailsObject.idcardReverseFile">
                        <span v-if="detailsObject.bodyType == 1">营业执照：</span>
                        <span v-if="detailsObject.bodyType == 2">身份证：</span>
                        <dl v-if="detailsObject.bodyType == 1">
                            <dt><a :href="detailsObject.businessLicenseFile" target="_blank"><img :src="detailsObject.businessLicenseFile"/></a></dt>
                            <dd>
                                <a :href="detailsObject.businessLicenseFile + '&act=1'"  target="_blank">下载</a>
                                <strong>(营业执照)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.identType == 2">
                            <dt><a :href="detailsObject.idcardFrontFile" target="_blank"><img :src="detailsObject.idcardFrontFile"/></a></dt>
                            <dd>
                                <a :href="detailsObject.idcardFrontFile + '&act=1'"  target="_blank">下载</a>
                                <strong>(身份证正面)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.identType == 2">
                            <dt><a :href="detailsObject.idcardReverseFile" target="_blank"><img :src="detailsObject.idcardReverseFile"/></a></dt>
                            <dd>
                                <a :href="detailsObject.idcardReverseFile + '&act=1'"  target="_blank">下载</a>
                                <strong>(身份证反面)</strong>
                            </dd>
                        </dl>
                    </li>
                    <div class="clear"></div>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">理赔资料</h1>
            <div class="info1">
                <ul>
                    <li class="infoImg">
                        <span>理赔凭证：</span>
                        <p><a :href="detailsObject.picUrl" target="_blank"><img :src="detailsObject.picUrl"/></a></p>
                        <a class="a" :href="detailsObject.pdfUrl" target="_blank">下载</a>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
            <el-row class="bottom_btn">
                <el-button @click="goBack()">返回列表页</el-button>
            </el-row>
        </div>
        <!--status == 6 待理赔-->
        <div v-if="status == 6" class="container">
            <h1 class="titleH1">订单基本信息</h1>
            <div class="info">
                <ul>
                    <li><span>订单编号:</span>{{detailsObject.ordercode}}</li>
                    <li><span>保险类型:</span>{{detailsObject.productType | formatProductType}}</li>
                    <li><span>商标别称:</span>{{detailsObject.productName}}</li>
                    <li><span>申请时间:</span>{{moment(detailsObject.applyTime).format('YYYY-MM-DD')}}</li>
                    <li><span>商标申请官费:</span>{{detailsObject.orderPublicexp}}</li>
                </ul>
                <ul>
                    <li :title="blindTime"><span>盲查期间:</span>{{moment(detailsObject.blindStartTime).format('YYYY-MM-DD')}} - {{moment(detailsObject.blindEndTime).format('YYYY-MM-DD')}}</li>
                    <li><span>订单状态:</span>{{detailsObject.status | cnStatus}}</li>
                    <li :title="detailsObject.inseCode"><span>保险编号:</span>{{detailsObject.inseCode}}</li>
                    <li><span>代理机构:</span>{{detailsObject.agency}}</li>
                    <li><span>商标类别:</span>{{detailsObject.category}}</li>
                </ul>
                <ul>
                    <li><span>投保成功时间:</span>{{moment(detailsObject.devoteInsuTime).format('YYYY-MM-DD')}}</li>
                    <li><span>保费:</span>{{detailsObject.insuMoney}}</li>
                    <li><span>理赔金额:</span>{{detailsObject.amendsMoney}}</li>
                    <li><span>申请号:</span>{{detailsObject.applyCode}}</li>
                    <li><span>商标超项数:</span>{{detailsObject.itermNum | itermNum}}</li>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">被保险主体基本信息</h1>
            <div class="info1">
                <ul>
                    <li>
                        <span>被保险主体名称：</span>
                        <b>{{detailsObject.bodyName}}</b>
                    </li>
                    <li>
                        <span>证件类型：</span>
                        <b>{{detailsObject.bodyType | bodyType}}</b>
                    </li>
                    <li>
                        <span>证件号码：</span>
                        <b>{{detailsObject.identCode}}</b>
                    </li>
                    <li>
                        <span>注册地址：</span>
                        <b>{{detailsObject.regAddress}}</b>
                    </li>
                    <li class="infoUp" v-if="detailsObject.businessLicenseFile || detailsObject.idcardFrontFile || detailsObject.idcardReverseFile">
                        <span v-if="detailsObject.bodyType == 1">营业执照：</span>
                        <span v-if="detailsObject.bodyType == 2">身份证：</span>
                        <dl v-if="detailsObject.bodyType == 1">
                            <dt><a :href="detailsObject.businessLicenseFile" target="_blank"><img :src="detailsObject.businessLicenseFile"/></a></dt>
                            <dd>
                                <a :href="detailsObject.businessLicenseFile + '&act=1'"  target="_blank">下载</a>
                                <strong>(营业执照)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.bodyType == 2">
                            <dt><a :href="detailsObject.idcardFrontFile" target="_blank"><img :src=" detailsObject.idcardFrontFile"/></a></dt>
                            <dd>
                                <a :href="detailsObject.idcardFrontFile + '&act=1'"  target="_blank">下载</a>
                                <strong>(身份证正面)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.bodyType == 2">
                            <dt><a :href="detailsObject.idcardReverseFile" target="_blank"><img :src="detailsObject.idcardReverseFile"/></a></dt>
                            <dd>
                                <a :href="detailsObject.idcardReverseFile + '&act=1'"  target="_blank">下载</a>
                                <strong>(身份证反面)</strong>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">理赔资料</h1>
            <div class="info1">
                <ul>
                    <li class="infoImg">
                        <span>理赔凭证：</span>
                        <p><a :href="detailsObject.picUrl" target="_blank"><img :src="detailsObject.picUrl"/></a></p>
                        <a class="a" :href="detailsObject.pdfUrl" target="_blank">下载</a>
                    </li>
                    <div class="clear"></div>
                    <li>
                        <span>领款人名称：</span>
                        <b v-if="detailsObject.accountType == '1'">
                            <span v-if="detailsObject.isDrawer === '1'">{{detailsObject.drawerName}}</span>
                            <span v-if="detailsObject.isDrawer === '2'">{{detailsObject.bodyName}}</span>
                        </b>
                        <b v-if="detailsObject.accountType == '2'">{{detailsObject.drawerName}}</b>
                    </li>
                    <li>
                        <span>领款人类型：</span>
                        <b>{{detailsObject.accountType | cnaccountType}}</b>
                    </li>
                    <li>
                        <span>是否领款人与被保险人一致：</span>
                        <b>{{detailsObject.isDrawer | cnisDrawer}}</b>
                    </li>
                    <li>
                        <span>银行名称：</span>
                        <b> {{detailsObject.bankName}}</b>
                    </li>
                    <li>
                        <span>所属城市：</span>
                        <b> {{detailsObject.province}}{{detailsObject.city}}</b>
                    </li>
                    <li>
                        <span>开户行账号：</span>
                        <b>{{detailsObject.bankAccount}}</b>
                    </li>
                    <li>
                        <span>开户行名称：</span>
                        <b>{{detailsObject.bankAddress}}</b>
                    </li>
                    <li>
                        <span>领款人手机号码：</span>
                        <b>{{detailsObject.drawerTel}}</b>
                    </li>
                    <li class="infoUp">
                        <span v-if="detailsObject.accountType == 1">营业执照：</span>
                        <span v-if="detailsObject.accountType == 2">身份证：</span>
                        <dl v-if="detailsObject.accountType == 1">
                            <dt><a :href="$imgUrl + detailsObject.tblicenseFile" target="_blank"><img :src="$imgUrl + detailsObject.tblicenseFile"/></a></dt>
                            <dd>
                                <a @click="insuDownload(detailsObject.tblicenseFile)">下载</a>
                                <strong>(营业执照)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.accountType == 2">
                            <dt><a :href="$imgUrl + detailsObject.tbidcardFrontFile" target="_blank"><img :src="$imgUrl + detailsObject.tbidcardFrontFile"/></a></dt>
                            <dd>
                                <a @click="insuDownload(detailsObject.tbidcardFrontFile)">下载</a>
                                <strong>(身份证正面)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.accountType == 2">
                            <dt><a :href="$imgUrl + detailsObject.tbidcardReverseFile" target="_blank"><img :src="$imgUrl + detailsObject.tbidcardReverseFile"/></a></dt>
                            <dd>
                                <a @click="insuDownload(detailsObject.tbidcardReverseFile)">下载</a>
                                <strong>(身份证反面)</strong>
                            </dd>
                        </dl>
                    </li>
                    <div class="clear"></div>
                    <li class="infoUp" v-show="detailsObject.isDrawer == 1">
                        <span>授权书：</span>
                        <dl v-if="detailsObject.isDrawer == 1">
                          <dt><a :href="$imgUrl + detailsObject.authFile" target="_blank"><img :src="$imgUrl + detailsObject.authFile"/></a></dt>
                          <dd>
                            <a @click="insuDownload(detailsObject.authFile)">下载</a>
                            <strong>(授权书)</strong>
                          </dd>
                        </dl>
                    </li>
                    <div class="clear"></div>
                    <li>
                        <span>领款人申请说明：</span>
                        <b>请尽快打款</b>
                    </li>
                </ul>
            </div>
            <el-row class="bottom_btn">
                <el-button @click="lipeiDialog = true">理赔不通过</el-button>
                <el-button @click="lipeiButton()">理赔通过</el-button>
                <el-button @click="goBack()">返回列表页</el-button>
            </el-row>
        </div>
        <!--status == 8 待支付-->
        <div v-if="status == 8" class="container">
            <h1 class="titleH1">订单基本信息</h1>
            <div class="info">
                <ul>
                    <li><span>订单编号:</span>{{detailsObject.ordercode}}</li>
                    <li><span>保险类型:</span>{{detailsObject.productType | formatProductType}}</li>
                    <li><span>商标别称:</span>{{detailsObject.productName}}</li>
                    <li><span>申请时间:</span>{{moment(detailsObject.applyTime).format('YYYY-MM-DD')}}</li>
                    <li><span>商标申请官费:</span>{{detailsObject.orderPublicexp}}</li>
                </ul>
                <ul>
                    <li :title="blindTime"><span>盲查期间:</span>{{moment(detailsObject.blindStartTime).format('YYYY-MM-DD')}} - {{moment(detailsObject.blindEndTime).format('YYYY-MM-DD')}}</li>
                    <li><span>订单状态:</span>{{detailsObject.status | cnStatus}}</li>
                    <li :title="detailsObject.inseCode"><span>保险编号:</span>{{detailsObject.inseCode}}</li>
                    <li><span>代理机构:</span>{{detailsObject.agency}}</li>
                    <li><span>商标类别:</span>{{detailsObject.category}}</li>
                </ul>
                <ul>
                    <li><span>投保成功时间:</span>{{moment(detailsObject.devoteInsuTime).format('YYYY-MM-DD')}}</li>
                    <li><span>保费:</span>{{detailsObject.insuMoney}}</li>
                    <li><span>理赔金额:</span>{{detailsObject.amendsMoney}}</li>
                    <li><span>申请号:</span>{{detailsObject.applyCode}}</li>
                    <li><span>商标超项数:</span>{{detailsObject.itermNum | itermNum}}</li>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">被保险主体基本信息</h1>
            <div class="info1">
                <ul>
                    <li>
                        <span>被保险主体名称：</span>
                        <b>{{detailsObject.bodyName}}</b>
                    </li>
                    <li>
                        <span>证件类型：</span>
                        <b>{{detailsObject.bodyType | bodyType}}</b>
                    </li>
                    <li>
                        <span>证件号码：</span>
                        <b>{{detailsObject.identCode}}</b>
                    </li>
                    <li>
                        <span>注册地址：</span>
                        <b>{{detailsObject.regAddress}}</b>
                    </li>
                    <li class="infoUp" v-if="detailsObject.businessLicenseFile || detailsObject.idcardFrontFile || detailsObject.idcardReverseFile">
                        <span v-if="detailsObject.bodyType == 1">营业执照：</span>
                        <span v-if="detailsObject.bodyType == 2">身份证：</span>
                        <dl v-if="detailsObject.bodyType == 1">
                            <dt><a :href="detailsObject.businessLicenseFile" target="_blank"><img :src="detailsObject.businessLicenseFile"/></a></dt>
                            <dd>
                                <a  :href="detailsObject.businessLicenseFile + '&act=1'"  target="_blank">下载</a>
                                <strong>(营业执照)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.bodyType == 2">
                            <dt><a :href="detailsObject.idcardFrontFile" target="_blank"><img :src="detailsObject.idcardFrontFile"/></a></dt>
                            <dd>
                                <a  :href="detailsObject.idcardFrontFile + '&act=1'"  target="_blank">下载</a>
                                <strong>(身份证正面)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.bodyType == 2">
                            <dt><a :href="detailsObject.idcardReverseFile" target="_blank"><img :src="detailsObject.idcardReverseFile"/></a></dt>
                            <dd>
                                <a  :href="detailsObject.idcardReverseFile + '&act=1'"  target="_blank">下载</a>
                                <strong>(身份证反面)</strong>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">理赔资料</h1>
            <div class="info1">
                <ul>
                    <li class="infoImg">
                        <span>理赔凭证：</span>
                        <p><a :href="detailsObject.picUrl" target="_blank"><img :src="detailsObject.picUrl"/></a></p>
                        <a class="a" :href="detailsObject.pdfUrl" target="_blank">下载</a>
                    </li>
                    <div class="clear"></div>
                    <li>
                        <span>领款人名称：</span>
                        <b v-if="detailsObject.accountType == '1'">
                            <span v-if="detailsObject.isDrawer === '1'">{{detailsObject.drawerName}}</span>
                            <span v-if="detailsObject.isDrawer === '2'">{{detailsObject.bodyName}}</span>
                        </b>
                        <b v-if="detailsObject.accountType == '2'">{{detailsObject.drawerName}}</b>
                    </li>
                    <li>
                        <span>领款人类型：</span>
                        <b>{{detailsObject.accountType | cnaccountType}}</b>
                    </li>
                    <li>
                        <span>是否领款人与被保险人一致：</span>
                        <b>{{detailsObject.isDrawer | cnisDrawer}}</b>
                    </li>
                    <li>
                        <span>银行名称：</span>
                        <b> {{detailsObject.bankName}}</b>
                    </li>
                    <li>
                        <span>所属城市：</span>
                        <b> {{detailsObject.province}}{{detailsObject.city}}</b>
                    </li>
                    <li>
                        <span>开户行账号：</span>
                        <b>{{detailsObject.bankAccount}}</b>
                    </li>
                    <li>
                      <span>开户行名称：</span>
                      <b>{{detailsObject.bankAddress}}</b>
                    </li>
                    <li>
                        <span>领款人手机号码：</span>
                        <b>{{detailsObject.drawerTel}}</b>
                    </li>
                    <li class="infoUp">
                        <span v-if="detailsObject.accountType == 1">营业执照：</span>
                        <span v-if="detailsObject.accountType == 2">身份证：</span>
                        <dl v-if="detailsObject.accountType == 1">
                            <dt><a :href="detailsObject.tblicenseFile" target="_blank"><img :src="$imgUrl + detailsObject.tblicenseFile"/></a></dt>
                            <dd>
                                <a  @click="insuDownload(detailsObject.tblicenseFile)">下载</a>
                                <strong>(营业执照)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.accountType == 2">
                            <dt><a :href="$imgUrl + detailsObject.tbidcardFrontFile" target="_blank"><img :src="$imgUrl + detailsObject.tbidcardFrontFile"/></a></dt>
                            <dd>
                                <a @click="insuDownload(detailsObject.tbidcardFrontFile)">下载</a>
                                <strong>(身份证正面)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.accountType == 2">
                            <dt><a :href="$imgUrl + detailsObject.tbidcardReverseFile" target="_blank"><img :src="$imgUrl + detailsObject.tbidcardReverseFile"/></a></dt>
                            <dd>
                                <a @click="insuDownload(detailsObject.tbidcardReverseFile)">下载</a>
                                <strong>(身份证反面)</strong>
                            </dd>
                        </dl>
                    </li>
                    <div class="clear"></div>
                    <li class="infoUp" v-if="detailsObject.isDrawer == 1">
                      <span>授权书：</span>
                      <dl>
                        <dt><a :href="$imgUrl +detailsObject.authFile" target="_blank"><img :src="$imgUrl + detailsObject.authFile"/></a></dt>
                        <dd>
                          <a  @click="insuDownload(detailsObject.authFile)">下载</a>
                          <strong>(授权书)</strong>
                        </dd>
                      </dl>
                    </li>
                    <div class="clear"></div>
                    <li>
                        <span>领款人申请说明：</span>
                        <b>请尽快打款</b>
                    </li>
                </ul>
            </div>
            <el-row class="bottom_btn">
                <el-button @click="zhifuDialog = true">支付失败</el-button>
                <el-button @click="zhifuButton()">支付成功</el-button>
                <el-button @click="goBack()">返回列表页</el-button>
            </el-row>
        </div>
        <!--status == 10 理赔完成-->
        <div v-if="status == 10" class="container">
            <h1 class="titleH1">订单基本信息</h1>
            <div class="info">
                <ul>
                    <li><span>订单编号:</span>{{detailsObject.ordercode}}</li>
                    <li><span>保险类型:</span>{{detailsObject.productType | formatProductType}}</li>
                    <li><span>商标别称:</span>{{detailsObject.productName}}</li>
                    <li><span>申请时间:</span>{{moment(detailsObject.applyTime).format('YYYY-MM-DD')}}</li>
                    <li><span>商标申请官费:</span>{{detailsObject.orderPublicexp}}</li>
                </ul>
                <ul>
                    <li :title="blindTime"><span>盲查期间:</span>{{moment(detailsObject.blindStartTime).format('YYYY-MM-DD')}} - {{moment(detailsObject.blindEndTime).format('YYYY-MM-DD')}}</li>
                    <li><span>订单状态:</span>{{detailsObject.status | cnStatus}}</li>
                    <li :title="detailsObject.inseCode"><span>保险编号:</span>{{detailsObject.inseCode}}</li>
                    <li><span>代理机构:</span>{{detailsObject.agency}}</li>
                    <li><span>商标类别:</span>{{detailsObject.category}}</li>
                </ul>
                <ul>
                    <li><span>投保成功时间:</span>{{moment(detailsObject.devoteInsuTime).format('YYYY-MM-DD')}}</li>
                    <li><span>保费:</span>{{detailsObject.insuMoney}}</li>
                    <li><span>理赔金额:</span>{{detailsObject.amendsMoney}}</li>
                    <li><span>申请号:</span>{{detailsObject.applyCode}}</li>
                    <li><span>商标超项数:</span>{{detailsObject.itermNum | itermNum}}</li>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">被保险主体基本信息</h1>
            <div class="info1">
                <ul>
                    <li>
                        <span>被保险主体名称：</span>
                        <b>{{detailsObject.bodyName}}</b>
                    </li>
                    <li>
                        <span>证件类型：</span>
                        <b>{{detailsObject.bodyType | bodyType}}</b>
                    </li>
                    <li>
                        <span>证件号码：</span>
                        <b>{{detailsObject.identCode}}</b>
                    </li>
                    <li>
                        <span>注册地址：</span>
                        <b>{{detailsObject.regAddress}}</b>
                    </li>
                    <li class="infoUp" v-if="detailsObject.businessLicenseFile || detailsObject.idcardFrontFile || detailsObject.idcardReverseFile">
                        <span v-if="detailsObject.bodyType == 1">营业执照：</span>
                        <span v-if="detailsObject.bodyType == 2">身份证：</span>
                        <dl v-if="detailsObject.bodyType == 1">
                            <dt><a :href="detailsObject.businessLicenseFile" target="_blank"><img :src="detailsObject.businessLicenseFile"/></a></dt>
                            <dd>
                                <a  :href="detailsObject.businessLicenseFile + '&act=1'"  target="_blank">下载</a>
                                <strong>(营业执照)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.bodyType == 2">
                            <dt><a :href="detailsObject.idcardFrontFile" target="_blank"><img :src="detailsObject.idcardFrontFile"/></a></dt>
                            <dd>
                                <a  :href="detailsObject.idcardFrontFile + '&act=1'" target="_blank">下载</a>
                                <strong>(身份证正面)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.bodyType == 2">
                            <dt><a :href="detailsObject.idcardReverseFile" target="_blank"><img :src="detailsObject.idcardReverseFile"/></a></dt>
                            <dd>
                                <a  :href="detailsObject.idcardReverseFile + '&act=1'" target="_blank">下载</a>
                                <strong>(身份证反面)</strong>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">理赔资料</h1>
            <div class="info1">
                <ul>
                    <li class="infoImg">
                        <span>理赔凭证：</span>
                        <p><a :href="detailsObject.idcardFrontFile" target="_blank"> <img :src="detailsObject.picUrl"/></a></p>
                        <a class="a" :href="detailsObject.pdfUrl" target="_blank">下载</a>
                    </li>
                    <div class="clear"></div>
                    <li>
                        <span>领款人名称：</span>
                        <b v-if="detailsObject.accountType == '1'">
                            <span v-if="detailsObject.isDrawer === '1'">{{detailsObject.drawerName}}</span>
                            <span v-if="detailsObject.isDrawer === '2'">{{detailsObject.bodyName}}</span>
                        </b>
                        <b v-if="detailsObject.accountType == '2'">{{detailsObject.drawerName}}</b>
                    </li>
                    <li>
                        <span>领款人类型：</span>
                        <b>{{detailsObject.accountType | cnaccountType}}</b>
                    </li>
                    <li>
                        <span>是否领款人与被保险人一致：</span>
                        <b>{{detailsObject.isDrawer | cnisDrawer}}</b>
                    </li>
                    <li>
                        <span>银行名称：</span>
                        <b> {{detailsObject.bankName}}</b>
                    </li>
                    <li>
                        <span>所属城市：</span>
                        <b> {{detailsObject.province}}{{detailsObject.city}}市</b>
                    </li>
                    <li>
                        <span>开户行账号：</span>
                        <b>{{detailsObject.bankAccount}}</b>
                    </li>
                    <li>
                      <span>开户行名称：</span>
                      <b>{{detailsObject.bankAddress}}</b>
                    </li>
                    <li>
                        <span>领款人手机号码：</span>
                        <b>{{detailsObject.drawerTel}}</b>
                    </li>
                    <li class="infoUp">
                        <span v-if="detailsObject.accountType == 1">营业执照：</span>
                        <span v-if="detailsObject.accountType == 2">身份证：</span>
                        <dl v-if="detailsObject.accountType == 1">
                            <dt><a :href="detailsObject.tblicenseFile" target="_blank"><img :src="$imgUrl + detailsObject.tblicenseFile"/></a></dt>
                            <dd>
                                <a @click="insuDownload(detailsObject.tblicenseFile)">下载</a>
                                <strong>(营业执照)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.accountType == 2">
                            <dt><a :href="$imgUrl + detailsObject.tbidcardFrontFile" target="_blank"><img :src="$imgUrl + detailsObject.tbidcardFrontFile"/></a></dt>
                            <dd>
                                <a  @click="insuDownload(detailsObject.tbidcardFrontFile)">下载</a>
                                <strong>(身份证正面)</strong>
                            </dd>
                        </dl>
                        <dl v-if="detailsObject.accountType == 2">
                            <dt><a :href="$imgUrl + detailsObject.tbidcardReverseFile" target="_blank"><img :src="$imgUrl + detailsObject.tbidcardReverseFile"/></a></dt>
                            <dd>
                                <a  @click="insuDownload(detailsObject.tbidcardReverseFile)">下载</a>
                                <strong>(身份证反面)</strong>
                            </dd>
                        </dl>
                    </li>
                    <div class="clear"></div>
                    <li class="infoUp" v-if="detailsObject.isDrawer == 1">
                      <span>授权书：</span>
                      <dl>
                        <dt><a :href="detailsObject.authFile" target="_blank"><img :src="$imgUrl + detailsObject.authFile"/></a></dt>
                        <dd>
                          <a  @click="insuDownload(detailsObject.authFile)">下载</a>
                          <strong>(授权书)</strong>
                        </dd>
                      </dl>
                    </li>
                    <div class="clear"></div>
                    <li>
                        <span>领款人申请说明：</span>
                        <b>请尽快打款</b>
                    </li>
                </ul>
            </div>
            <el-row class="bottom_btn">
                <el-button @click="goBack()">返回列表页</el-button>
            </el-row>
        </div>
        <!--status == 11 不予理赔-->
        <!--<div v-if="status == 11" class="container">
            不予理赔
            <h1 class="titleH1">订单基本信息</h1>
            <div class="info">
                <ul>
                    <li><span>订单编号:</span>订单编号</li>
                    <li><span>保险类型:</span>订单编号</li>
                    <li><span>商标别称:</span>订单编号</li>
                    <li><span>申请时间:</span>订单编号</li>
                    <li><span>商标申请官费:</span>订单编号</li>
                </ul>
                <ul>
                    <li><span>盲查期间:</span>订单编号</li>
                    <li><span>订单状态:</span>获取当前订单状态</li>
                    <li><span>保险编号:</span>订单编号</li>
                    <li><span>代理机构:</span>订单编号</li>
                    <li><span>商标类别:</span>商标大类</li>
                </ul>
                <ul>
                    <li><span>投保成功时间:</span>订单编号</li>
                    <li><span>保费:</span>订单编号</li>
                    <li><span>理赔金额:</span>订单编号</li>
                    <li><span>申请号:</span>订单编号</li>
                    <li><span>商标超项数:</span>超项数</li>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">被保险主体基本信息</h1>
            <div class="info1">
                <ul>
                    <li>
                        <span>被保险主体名称：</span>
                        <b>业务主体名称</b>
                    </li>
                    <li>
                        <span>证件类型：</span>
                        <b>业务主体对应的证件类型</b>
                    </li>
                    <li>
                        <span>证件号码：</span>
                        <b>业务主体对应的证件号码</b>
                    </li>
                    <li>
                        <span>注册地址：</span>
                        <b>注册地址</b>
                    </li>
                    <li class="infoImg">
                        <span>营业执照：</span>
                        <p><img src="@/assets/icon/icon_tianjiazhaopian@2x.png"/></p>
                        <a>下载</a>
                    </li>
                    <div class="clear"></div>
                    <li class="infoUpload">
                        <b>
                            <img src="@/assets/bg/icon_upload.png">
                            <a>点击上传文件</a>
                        </b>
                    </li>
                    <li class="infoWarn">
                        <b>提醒：请上传JPG格式，大于10K、小于2M。像素介 于“400X400” -“1500X1500”之间的正方形图片</b>
                    </li>
                    <li class="infoXuqiu">
                        <b><img src="@/assets/icon/icon_ mark@2x.png"/>有三维标志、颜色组合、声音、肖像权或优先权的特殊需求</b>
                    </li>
                    <li class="infoXuqiu">
                        <b><img src="@/assets/icon/icon_ mark@2x.png" style="margin-right: 217px;"/>有指定颜色申请的特殊要求</b>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
            <h1 class="titleH1">理赔资料</h1>
            <div class="info1">
                <ul>
                    <li class="infoImg">
                        <span>营业执照：</span>
                        <p><img src="@/assets/icon/icon_tianjiazhaopian@2x.png"/></p>
                        <a>下载</a>
                    </li>
                    <div class="clear"></div>
                    <li class="infoUpload">
                        <b>
                            <img src="@/assets/bg/icon_upload.png">
                            <a>点击上传文件</a>
                        </b>
                    </li>
                    <li class="infoWarn">
                        <b>提醒：请上传JPG格式，大于10K、小于2M。像素介 于“400X400” -“1500X1500”之间的正方形图片</b>
                    </li>
                    <li class="infoXuqiu">
                        <b><img src="@/assets/icon/icon_ mark@2x.png"/>有三维标志、颜色组合、声音、肖像权或优先权的特殊需求</b>
                    </li>
                    <li class="infoXuqiu">
                        <b><img src="@/assets/icon/icon_ mark@2x.png" style="margin-right: 217px;"/>有指定颜色申请的特殊要求</b>
                    </li>
                    <li>
                        <span>领款人名称：</span>
                        <b>企业 /个人</b>
                    </li>
                    <li>
                        <span>是否领款人与被保险人一致：</span>
                        <b>一致/不一致</b>
                    </li>
                    <li>
                        <span>银行名称：</span>
                        <b> 省   市</b>
                    </li>
                    <li>
                        <span>开户行账号：</span>
                        <b>注册地址</b>
                    </li>
                    <li>
                        <span>领款人手机号码：</span>
                        <b>注册地址</b>
                    </li>
                    <li class="infoUp">
                        <span>营业执照：</span>
                        <dl>
                            <dt><img src="@/assets/icon/icon_tianjiazhaopian@2x.png"/></dt>
                            <dd>
                                <a>下载</a>
                                <strong>(营业执照)</strong>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src="@/assets/icon/icon_tianjiazhaopian@2x.png"/></dt>
                            <dd>
                                <a>下载</a>
                                <strong>(营业执照)</strong>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src="@/assets/icon/icon_tianjiazhaopian@2x.png"/></dt>
                            <dd>
                                <a>下载</a>
                                <strong>(营业执照)</strong>
                            </dd>
                        </dl>
                    </li>
                    <div class="clear"></div>
                    <li>
                        <span>领款人申请说明：</span>
                        <b>请尽快打款</b>
                    </li>
                </ul>
            </div>
        </div>-->
        <!--理赔dialog-->
        <el-dialog title="理赔不通过原因" :visible.sync="lipeiDialog" width="25%" >
            <el-form :model="lipeiForm" ref="lipeiForm">
                <el-form-item :show-message="false" label="理赔不通过原因" prop="failReason" :rules="[{ required: true, message: '请选择理赔不通过原因'}]">
                    <el-select v-model="lipeiForm.failReason"  placeholder="请选择理赔不通过原因">
                        <el-option label="营业执照错误" value="营业执照错误"></el-option>
                        <el-option label="授权委托书不符合" value="授权委托书不符合"></el-option>
                        <el-option label="银行账号信息错误" value="银行账号信息错误"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="nolipeiButton('lipeiForm')">确 定</el-button>
                <el-button @click="lipeiDialog = false">取 消</el-button>
            </div>
        </el-dialog>
        <el-dialog title="支付不成功原因" :visible.sync="zhifuDialog" width="25%"  class="err">
            <el-form :model="zhifuForm" ref="zhifuForm" >
                <el-form-item :show-message="false" label="支付不通过原因" prop="failReason" :rules="[{ required: true, message: '请选择理赔不通过原因'}]">
                    <el-select v-model="zhifuForm.failReason" placeholder="请选择支付不通过原因">
                        <el-option label="银行账号信息错误" value="银行信息错误"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="nozhifuButton('zhifuForm')">确 定</el-button>
                <el-button @click="zhifuDialog = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import moment from 'moment';
    import axios from 'axios'
    export default {
        name: 'Details',
        data() {
            return {
                blindTime:null,
                status: null,
                detailsObject:{},
                moment:moment,
                backupsData:'',
                lipeiDialog:false,
                zhifuDialog:false,
                lipeiForm:{
                    "failReason":"",
                    "amendidList":[]
                },
                zhifuForm:{
                    "failReason":"",
                    "amendidList":[]
                },
                lipeiSuccess:{
                    "amendidList":[]
                },
                zhifuSuccess:{
                    "amendidList":[]
                }


            }
        },
        created() {
            this.loadDetails();

        },
        filters: {
            formatProductType(val){
                switch(val){
                    case 1:
                        return '盲查保';
                        break;
                    case 2:
                        return '果保商标';
                        break;
                    case 3:
                        return '全程保';
                        break;
                    case 4:
                        return '果保专利';
                        break;
                }
            },
            cnStatus(val){
                switch (val){
                    case 1:
                        return '已支付';
                        break;
                    case 2:
                        return '已报件';
                        break;
                    case 3:
                        return '已投保';
                        break;
                    case 4:
                        return '收到驳回';
                        break;
                    case 5:
                        return '待报案';
                        break;
                    case 6:
                        return '待理赔';
                        break;
                    case 7:
                        return '理赔未通过';
                        break;
                    case 8:
                        return '待支付';
                        break;
                    case 9:
                        return '支付失败';
                        break;
                    case 10:
                        return '理赔完成';
                        break;
                    case 11:
                        return '不予理赔';
                        break;
                }
            },
            itermNum(val){
                return val <= 10 ? 0 : parseInt(val -10);
            },
            identType(val){
                return val == 1 ? '身份证' : '其他证件'
            },
            bodyType(val){
                return val == 1 ? '企业' : '个人'
            },
            cnaccountType(val){
                return val == 1 ? '企业' : '个人'
            },
            cnisDrawer(val){
                return val == 1 ? '否' : '是'
            },
        },
        methods: {
            //检查图片是否存在
            CheckImgExists(imgurl,type) {
                let self = this;
              var ImgObj = new Image(); //判断图片是否存在
              ImgObj.src = imgurl;
              ImgObj.onload = function(){
                //没有图片，则返回-1
                if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
                  switch (type){
                    case 1 :
                      self.detailsObject.businessLicenseFile = imgurl;
                          break;
                    case 2 :
                      self.detailsObject.idcardFrontFile = imgurl;
                      break;
                    case 3 :
                      self.detailsObject.idcardReverseFile = imgurl;
                      break;
                  }
                }
              };
              ImgObj.onerror = function(){
                  switch (type){
                      case 1 :
                          self.detailsObject.businessLicenseFile = 'https://project-api.zhiguoguo.com/zgg-web-admin-rest' + self.detailsObject.businessLicenseFile;
                          break;
                      case 2 :
                          self.detailsObject.idcardFrontFile = 'https://project-api.zhiguoguo.com/zgg-web-admin-rest' + self.detailsObject.idcardFrontFile;
                          break;
                      case 3 :
                          self.detailsObject.idcardReverseFile = 'https://project-api.zhiguoguo.com/zgg-web-admin-rest' + self.detailsObject.idcardReverseFile;
                          break;
                  }
              }
            },
            //初始化详情
            loadDetails() {
                this.$fetch(`${this.$api}insuOrder/getInsuOrderById/${this.$route.params.id}`, {}, this.$gateway.insurance).then(
                    (res) => {
                        if (res.success && res.code == 0) {
                            let self = this;
                          self.detailsObject = res.data;
                          if(!!self.detailsObject.businessLicenseFile && self.detailsObject.businessLicenseFile.indexOf('http')==-1){
                            self.CheckImgExists('https://pc.zhiguoguo.com/pc-web-rest/'+self.detailsObject.businessLicenseFile,1);
                          }
                          if(!!self.detailsObject.idcardFrontFile && self.detailsObject.idcardFrontFile.indexOf('http')==-1){
                            self.CheckImgExists('https://pc.zhiguoguo.com/pc-web-rest/'+self.detailsObject.idcardFrontFile,2);
                          }
                          if(!!self.detailsObject.idcardReverseFile && self.detailsObject.idcardReverseFile.indexOf('http')==-1){
                            self.CheckImgExists('https://pc.zhiguoguo.com/pc-web-rest/'+self.detailsObject.idcardReverseFile,3);
                          }

                          self.blindTime = moment(self.detailsObject.blindStartTime).format('YYYY-MM-DD') + '-' + moment(self.detailsObject.blindEndTime).format('YYYY-MM-DD');
                          if(self.detailsObject.picUrl){self.detailsObject.picUrl = self.detailsObject.picUrl.split(',')[0]}
                          self.status = res.data.status;
                        } else {
                            this.$message({
                                type: 'error',
                                message: res.message
                            })
                        }
                    }
                )
            },
            //理赔不通过弹出框确定按钮
            nolipeiButton(formName){
                this.lipeiForm.amendidList.push(this.detailsObject.pcId)
                this.$refs[formName].validate( (result) => {
                    if(result){
                        this.$put(`${this.$api}insuOrder/updateInsuUnPassStatus`,this.lipeiForm, {headers: this.$gateway.insurance}).then(
                            (res) => {
                                if(res.success && res.code == 0){
                                    this.$message({
                                        type:'success',
                                        message:res.message
                                    })
                                    this.lipeiDialog = false;
                                    setTimeout(()=>{this.$router.go(-1)},500)
                                }else {
                                    this.$message({
                                        type:'error',
                                        message:res.message
                                    })
                                }
                            },
                            (err) => {
                                console.log(err)
                            },
                        )
                    }
                })

            },
            //理赔通过按钮
            lipeiButton(){
                this.lipeiSuccess.amendidList.push(this.detailsObject.pcId)
                this.$confirm('提交成功后，该客户在同一次提交的申请订单都将审核通过。', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$put(`${this.$api}insuOrder/updateInsuPassStatus`,this.lipeiSuccess, {headers: this.$gateway.insurance}).then(
                        (res) => {
                            if(res.success && res.code == 0){
                                this.$message({
                                    type:'success',
                                    message: `${res.message}  即将返回列表页`
                                })
                                setTimeout(()=>{this.$router.go(-1)},500)
                            }else {
                                this.$message({
                                    type:'error',
                                    message: res.message
                                })
                            }
                        },
                        (err) => {
                            console.log(err)
                        },
                    )
                })
            },
            //支付失败
            nozhifuButton(formName){
                this.zhifuForm.amendidList.push(this.detailsObject.pcId)
                this.$refs[formName].validate( (result) => {
                    if(result){
                        this.$put(`${this.$api}insuOrder/updateInsuPayFailStatus`,this.zhifuForm, {headers: this.$gateway.insurance}).then(
                            (res) => {
                                if(res.success && res.code == 0){
                                    this.$message({
                                        type:'success',
                                        message:res.message
                                    })
                                    this.lipeiDialog = false;
                                    setTimeout(()=>{this.$router.go(-1)},500)
                                }else {
                                    this.$message({
                                        type:'error',
                                        message:res.message
                                    })
                                }
                            },
                            (err) => {
                                console.log(err)
                            },
                        )
                    }
                })

            },
            //支付成功
            zhifuButton(){
                this.zhifuSuccess.amendidList.push(this.detailsObject.pcId)
                this.$confirm('提交成功后，该客户在同一次提交的申请订单都将审核通过。', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$put(`${this.$api}insuOrder/updateInsuPaystatus`,this.zhifuSuccess, {headers: this.$gateway.insurance}).then(
                        (res) => {
                            if(res.success && res.code == 0){
                                this.$message({
                                    type:'success',
                                    message: `${res.message}  即将返回列表页`
                                })
                                setTimeout(()=>{this.$router.go(-1)},500)
                            }else {
                                this.$message({
                                    type:'error',
                                    message: res.message
                                })
                            }
                        },
                        (err) => {
                            console.log(err)
                        },
                    )
                })

            },
            goBack(){
                this.$router.go(-1);
            },
            //保险文件下载
            insuDownload(url){
                axios({
                    method: 'post',
                    url: this.$api + 'fastdfs/downloadFile', // 请求地址
                    data: {fileId:url} , // 参数
                    headers: this.$gateway.insurance,
                    responseType: 'blob' // 表明返回服务器返回的数据类型
                }).then(
                    (res) => {
                        let blob = new Blob([res.data], {type: "image/png"});
                        let fileName = Date.parse(new Date())+".png" ;
                        debugger
                        if (window.navigator.msSaveOrOpenBlob) {
                            navigator.msSaveBlob(blob, fileName);
                        } else {
                            var link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob);
                            link.download = fileName;
                            link.click();
                            window.URL.revokeObjectURL(link.href);
                        }
                    },)
                //this.$post(this.$api + 'fastdfs/downloadFile', {fileId:url})
            },

        }
    }
</script>
<style scoped>
    .container {
        width: 1185px;
        margin: 0 auto;
        overflow: hidden;
        height: auto;
    }

    .titleH1 {
        font-size: 16px;
        color: #2A2A44;
        border-bottom: 2px solid #CECECE;
        padding-bottom: 16px;
        padding-left: 10px;
        text-align: left;
        position: relative;
        margin-top: 60px;
    }

    .titleH1:before {
        content: "";
        width: 4px;
        height: 19px;
        background: #F96E75;
        position: absolute;
        left: 0;
        top: -2px;
    }

    .info ul {
        float: left;
        width: 33.3333%;
        margin-top: 27px;
    }

    .info ul li {
        width:100%;
        margin-top: 15px;
        text-align: left;
        letter-spacing: 1px;
        color: #9695A3;
        max-width: 350px;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
    }

    .info ul li span {
        float: left;
        text-align: left;
        width: 110px;
    }

    .clear {
        clear: both;
    }

    .info1 {
        text-align: left;
        margin: 27px 0 0 29px;
    }

    .info1 ul li {
        height: 20px;
        font-size: 14px;
        color: #9695A3;
        margin-top: 15px;
    }

    .info1 ul li span {
        text-align: right;
        float: left;
        width: 190px;
    }

    .infoImg p img {
        width: 125px;
        height: 125px;
        /*background: url('../../assets/icon/icon_tianjiazhaopian.png') no-repeat center;*/
        float: left;
    }

    .infoImg .a {
        color: #4EADFF;
        font-size: 14px;
        cursor: pointer;
        display: block;
        padding-top: 108px;
        padding-left: 20px;
    }

    .info1 ul li.infoUpload {
        margin-left: 192px;
    }

    .info1 ul li.infoUpload b {
        display: block;
        width: 287px;
        height: 96px;
        border: 1px dashed #C6CAD0;
    }

    .infoUpload b img {
        display: block;
        width: 21px;
        height: 21px;
        margin: 28px 133px 3px 133px;
    }

    .infoUpload b a {
        display: block;
        width: 287px;
        color: #C6CAD0;
        font-size: 14px;
        text-align: center;
    }

    .infoWarn b {
        width: 280px;
        color: #989898;
        font-size: 12px;
        margin-left: 192px;
    }

    .infoXuqiu b {
        width: 395px;
        height: 30px;
        background: #F5F5F5;
        line-height: 30px;
        color: #9695A3;
        font-size: 12px;
        display: block;
        padding-left: 10px;
        margin-left: 192px;
    }

    .infoXuqiu b img {
        float: right;
        width: 16px;
        height: 16px;
        margin: 7px 45px 0 0;
    }

    .infoUp dl {
        float: left;
        margin-right: 40px;
    }

    .infoUp dl dt {
        float: left;
    }

    .infoUp dl dd {
        float: left;
        margin-top: 86px;
        margin-left: 6px;
    }

    .infoUp dl dt img {
        width: 125px;
        height: 125px;

    }

    .infoUp dl dd a {
        display: block;
        color: #4EADFF;
        font-size: 14px;
        cursor: pointer;
    }

    .infoUp dl dd strong {
        display: block;
        font-size: 14px;
        color: #9695A3;
        margin-top: 5px;
    }
    .bottom_btn {
        margin-top: 80px;
    }
.bottom_btn button {
    margin-left:30px;
    margin-right:30px;
}
</style>
