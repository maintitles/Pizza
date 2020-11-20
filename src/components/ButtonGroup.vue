<template>
    <div>
        <el-row>
          <el-button :type="type"><slot></slot></el-button>
        </el-row>
    </div>
    
    
</template>
<script type="text/javascript">
    export default {
        data(){
            return {
                labelPosition:"right"
            }
        },
        props:{
            type:{
                type:String,
                default:"primary"
            }
        }
    }
</script>