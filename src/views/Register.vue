<template>
    <div class="register">
        <el-card class="box-card">
            <div class="">
                <img src="../assets/icon.png" alt="">
            </div>
            <div class="login_form">
                    <InputGroup label="邮箱" placeholder="请输入邮箱" v-model="user.email"></InputGroup>
                    <InputGroup label="密码" placeholder="请输入密码" type="password" v-model="user.password"></InputGroup>
                    <InputGroup label="确认密码" placeholder="请再次输入密码" type="password" v-model="user.password1"></InputGroup>
                    <!-- <el-form-item label="邮箱">
                        <el-input v-model="user.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="user.password"></el-input>
                    </el-form-item> -->
                
            </div>
            <div>
                <ButtonGroup type="primary">注册</ButtonGroup>
            </div>
            <p style="float: right">已有账号？<router-link to="/login">登录</router-link></p>
        </el-card>
    </div>
</template>
<script>
    import InputGroup from "../components/formGroup.vue"
    import ButtonGroup from "../components/ButtonGroup.vue"
    export default {
        name:"register",
        data(){
            return {
                labelPosition:"right",
                user:{
                    email:"",
                    password:"",
                    password1:""
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
