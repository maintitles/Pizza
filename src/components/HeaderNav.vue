<template>
    <div class="headerNav">
        
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!-- <a class="py-2" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="d-block mx-auto"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                  <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                  <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                </svg>
              </a> -->
            <el-menu-item index="0" calss="projectName" disabled>Pizza点餐系统</el-menu-item>
            <el-menu-item index="1">主页</el-menu-item>
            <el-menu-item index="2">菜单</el-menu-item>
            <el-menu-item index="3">管理</el-menu-item>
            <el-menu-item index="4">关于我们</el-menu-item>
        </el-menu>
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
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    } 
</script>
<style scoped>
    .projectName{
        opacity: 1 !important;
        cursor: none;
        font-size: 20px;
    }
    
</style>