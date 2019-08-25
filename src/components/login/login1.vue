<template>
    <div class="app">
        <div class="loginHeader">
            <div class="tel">
                <img src="@/assets/icon/icon_dianhua.png" alt=""><span>0755-33150483</span>
            </div>
        </div>
        <div class="loginMain">
            <div class="loginMain_l">
                <img src="@/assets/login_bg/icon_beijing.png" alt="">
            </div>
            <div class="loginMain_r">
                <el-row><h2>登录系统</h2></el-row>
                <el-form :model="loginForm" ref="loginForm" status-icon :rules="loginForm1" label-width="60px">
                    <el-form-item  prop="passport">
                        <el-input class="text_center" placeholder="请输入账号" clearable autosize v-model="loginForm.passport" @keyup.enter.native="login('loginForm')"></el-input>
                    </el-form-item>
                    <el-form-item  prop="passwd">
                        <el-input class="text_center" type="password" placeholder="请输入密码" clearable v-model="loginForm.passwd" @keyup.enter.native="login('loginForm')"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="checked">记住密码</el-checkbox>
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
                    self.$post(self.$api + 'insuUser/login',self.loginForm, {headers: this.$gateway.insurance}).then(
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
    background: url('../../assets/login_bg/icon_beijing.png') no-repeat center;
}
.loginHeader {
    height: 80px;
    background: url('../../assets/login_bg/icon_toumingtiao.png') no-repeat center;
    position: relative;
}
.tel {
    position: absolute;
    top: 31px;
    right: 341px;
    color: #fff;
}
.tel img {
    position: absolute;
    top: -3px;
    right: 120px;
}
.loginMain {
    width: 1300px;
    height: 660px;
    background: #fff;
    position:absolute;
    left:0;
    right:0;
    top:210px;
    margin:auto;
}
.loginMain_l {
    width: 700px;
    height: 660px;
    float: left;
}
.loginMain_l img {
    width: 100%;
    height: 100%;
}
.loginMain_r {
    width: 600px;
    height: 100%;
    float: left;
    padding-top: 140px;
}
.loginMain_r h2 {
    font-size: 24px;
    color: #2a2a44;
    opacity: .7;
    margin-bottom: 70px;
}
.el-form {
    padding-left: 60px;
    padding-right: 128px;
}
.el-button {
    width: 340px;
    height: 40px;
    border-radius: 15px;
    background: #8c98cc;
    margin-left: 61px;
    color: #fff;
}
/*  body {
    background: #ccc;
  }
.el-form {
    width: 350px;
    height: auto;
    margin: 180px auto 0;
    padding: 15px;
}
.el-form > h2 {
  margin-bottom: 15px;
}
.el-form > .el-input,.el-form > .el-button {
    margin-top: 10px;
}
.el-form > .el-button {
    width: 290px;
    margin-left: 60px;
}*/
</style>
