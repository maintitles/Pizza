<template>
    <div class="headerNav">
        <el-row>
            <el-col :span="24">
                <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-menu-item index="0" calss="projectName" disabled>
                        <i class="el-icon-eleme"></i>Pizza点餐系统
                    </el-menu-item>
                    <el-menu-item index="1">
                        <router-link class="nav-link" :to="{name:'homeLink'}">主页</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link class="nav-link" :to="{name:'menuLink'}">菜单</router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <router-link class="nav-link" :to="{name:'adminLink'}">管理</router-link>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <router-link class="nav-link" :to="{name:'aboutLink'}">关于我们</router-link>
                    </el-menu-item>
                    <el-menu-item class="headRight" index="5">
                        <router-link  class="nav-link" :to="{name:'registerLink'}">注册</router-link>
                    </el-menu-item>
                    <el-menu-item class="headRight" index="6">
                        <router-link  class="nav-link" :to="{name:'loginLink'}">登录</router-link>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        
    </div>
</template>
<script>
   export default{
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            
        }
    } 
</script>
<style scoped>
    .el-menu-item.is-disabled {
        opacity: 1;
        cursor: inherit;
        font-size: 20px;
        background: 0 0!important;
    }
    .el-menu-item.is-disabled i{
        font-size: 50px;
        width: 52px;
    }
    .headRight{
        float: right !important;
    }
    /*.nav-link{
        padding: 1.5rem 1.5rem;
    }*/
    .el-menu-item {
        padding: 0 !important;
        margin-left: 20px !important;
    }
    .nav-link {
        padding: 0rem 1rem;
    }
    a{
        text-decoration: none;
    }
</style>