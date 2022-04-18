<template>
    <div>
        <el-form :model="ruleForm2"
                 status-icon
                 ref="ruleForm2"
                 label-position="left"
                 label-width="0px"
                 class="demo-ruleForm login-page">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="account">
                <el-input type="text"
                          v-model="ruleForm2.account"
                          auto-complete="on"
                          placeholder="用户名"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password"
                          v-model="ruleForm2.password"
                          auto-complete="on"
                          placeholder="密码"
                ></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" >登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            ruleForm2: {
                account: 'admin',
                password: '123456',
            },
        }
    },
    created() {

    },
    methods:{
        handleSubmit(){
            if(this.ruleForm2.account == 'admin' && this.ruleForm2.password == '123456'){
                alert("登陆成功！")
                this.$router.push('/home')
            }
            else{
                alert('账号或密码错误！')
            }
        }
    }
}
</script>

<style scoped>
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
</style>