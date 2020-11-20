<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item :label="label">
                <el-input autocomplete="off" :type="type" :value="value" :placeholder="placeholder" :name="name" @input="$emit('input', $event.target.value)"></el-input>
            </el-form-item>
        </el-form>
        <!-- <el-row>
          <el-button type="primary" >主要按钮</el-button>
        </el-row> -->
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
                default:"text"
            },
            value:String,
            name:String,
            placeholder:String,
            label:String
        }
    }
</script>