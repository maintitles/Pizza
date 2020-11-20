<template>
    <div class="login">
        <el-card class="box-card">
            <div class="">
                <img src="../assets/icon.png" alt="">
            </div>
            <div class="login_form">
                <InputGroup label="邮箱" placeholder="请输入邮箱" v-model="user.email"></InputGroup>
                <InputGroup label="密码" placeholder="请输入密码" type="password" v-model="user.password"></InputGroup>
            </div>
            <div>
                <ButtonGroup type="primary">登录</ButtonGroup>
            </div>
            <p style="float: right">还没有账号？<router-link to="/register">注册</router-link></p>
        </el-card>
    </div>
</template>
<script>
    import InputGroup from "../components/formGroup.vue"
    import ButtonGroup from "../components/ButtonGroup.vue"
    export default {
        name:"login",
        data(){
            return {
                labelPosition:"right",
                user:{
                    email:"",
                    password:""
                }
            }
        },
        components:{
            InputGroup,ButtonGroup
        }
    }
</script>
<style scoped>
    .login_form{
        margin: 100px auto 0;
    }
</style>
