<template>
    <div class="app">
        <div class="loginHeader">
            <div>
                <img src="@/assets/login_bg/Page1@2x.png" alt="">
                <p>保险系统</p>
            </div>
        </div>
        <div class="loginMain">
            <div class="loginMain_l">
                <img src="@/assets/login_bg/Login.png" alt="">
            </div>
            <div class="loginMain_r">
                <h2><img src="@/assets/icon/Page1@2x.png" alt=""><span>用户登录</span></h2>
                <el-form :model="loginForm" ref="loginForm" :rules="loginForm1">
                    <el-form-item  prop="passport">
                        <img src="@/assets/icon/user@2x.png" alt="">
                        <el-input class="text_center" placeholder="请输入账号" autosize v-model="loginForm.passport" @keyup.enter.native="login('loginForm')"></el-input>
                    </el-form-item>
                    <el-form-item  prop="passwd">
                        <img src="@/assets/icon/suo@2x.png" alt="">
                        <el-input class="text_center" type="password" placeholder="请输入密码" v-model="loginForm.passwd" @keyup.enter.native="login('loginForm')"></el-input>
                    </el-form-item>
                    <el-button @click="login('loginForm')" v-if="loginForm.boolean == 'false' ">登录</el-button>
                    <el-button :loading = "loginForm.boolean" v-else>登录中</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    created (){
    },
    data () {
        return {
            checked:true,
            loginForm:{
                passport : '' ,
                passwd : '' ,
                boolean : 'false',
            },
            loginForm1: {
                passport: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 4,  message: '长度大于4个字符', trigger: 'blur' }
                ],
                passwd: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6,  message: '长度大于6个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        login (formName) {
            let self = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    self.loginForm.boolean = true;
                    self.$post(self.$api + 'insuUser/login', self.loginForm, {headers: this.$gateway.insurance}).then(
                        (res) => {
                            if(res.success && res.code == 0){
                                self.$Cookies.set('user',res.data);
                                if(res.data.userType == 2){
                                    self.$router.push({path:'/adminIndex'});
                                }else if(res.data.userType  == 1){
                                    self.$router.push({path:'/webIndex'});
                                }
                            }else {
                                self.loginForm.boolean = 'false';
                                self.$message({
                                    type:'error',
                                    message:res.message,
                                })
                            }
                        },
                        (err) => {
                            self.loginForm.boolean = 'false';
                            self.$message({
                                type:'error',
                                message:'错误',
                            })
                        },
                    )
                    /*setTimeout(()=>{
                        if(self.loginForm.passport == 'admin' && self.loginForm.password == '123456'){
                            //管理端
                            self.$router.push({path:'/adminIndex'});
                        }else if(self.loginForm.passport == 'user' && self.loginForm.password == '123456'){
                            //web端
                            self.$router.push({path:'/webIndex'});
                        } else {
                            self.loginForm.boolean = 'false';
                            self.$message({
                                showClose: true,
                                message: '账号或者密码错误！',
                                type: 'error'
                            });
                        }
                    },1000)*/
                }
            });
        },
    }
}
</script>

<style scoped>
.el-form-item{
  margin-bottom:22px;
}
.app {
    width: 100%;
    height: 1080px;
    background: #FF8853;
}
.loginHeader {
    height: 52px;
    background: #fff;
    text-align: left;
    padding-top: 28px;
    padding-bottom: 27px;
}
.loginHeader div {
    width: 1200px;
    margin: 0 auto;
    position: relative;
}
.loginHeader img {
    display: inline-block;
}
.loginHeader p {
    display: inline-block;
    width: 250px;
    line-height: 46px;
    border-left: 2px solid #E50121;
    text-align: left;
    font-size: 36px;
    color:#E50121;
    padding-left: 30px;
    margin-left: 30px;
    position: absolute;
    top: 7px;
}
.loginMain {
    width: 1200px;
    height: 660px;
    margin:auto;
    padding-top: 100px;
}
.loginMain_l {
    width: 620px;
    height: 595px;
    float: left;
    margin-right: 45px;
}
.loginMain_l img {
    width: 100%;
    height: 100%;
}
.loginMain_r {
    width: 534px;
    height: 431px;
    float: left;
    background: url('../../assets/login_bg/Group@2x.png')no-repeat 50% 28%;
    margin-top: 100px;
}
.loginMain_r h2 {
    padding-top: 45px;
    padding-bottom: 36px;
    padding-left: 39px;
    text-align: left;
    position: relative;
}
.loginMain_r h2 img {
    width: 35px;
    height: 26px;
    margin-right: 18px;
}
.loginMain_r h2 span {
    position: absolute;
    top: 47px;
    color: #FE834B;
    font-size: 24px;
}
.loginMain .el-button {
    width: 459px;
    height: 63px;
    background: #FF8853;
    padding: 0;
    border-radius: 25px;
    color: #fff;
    font-size: 24px;
    margin-top: 36px;
}
</style>
<style>
    .loginMain .el-form-item__content > .el-input > input {
        width: 459px;
        height: 54px;
        text-indent: 80px;
        font-size: 18px;
    }
    .loginMain .el-form-item__error {
        margin-left:44px;
    }
    .loginMain .el-form-item {
        position: relative;
    }
    .loginMain .el-form-item img {
        position: absolute;
        z-index: 10;
        left: 50px;
        top: 14px;
    }
</style>