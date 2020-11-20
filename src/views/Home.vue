<template>
    <div class="row">
        <div id="home" class="col-sm-12">
            <div class="background">
                <h1>欢迎来品尝披萨</h1>
                <h2>这里有你非常喜欢的pizza</h2>
                <button @click="goToMenu" class="btn btn-success">Let's order!</button>
            </div>
        </div>
    </div>
    
</template>
<script type="text/javascript">
    export default {
        data(){
            return {

            }
        },
        methods:{
            goToMenu(){
                this.$router.push("/admin")
            }
        }
    }
</script>
<style scoped="">
    #home{
        background: url(../assets/pizza.jpg) no-repeat;
        height: 80vh;
    }
    h1,h2{
        margin: 6%;
    }
    .background{
        background:#eee;
        opacity: 0.8;
        width: 70vh;
        margin: 10% auto;
        padding: 20px 0;
        outline: none;
    }
</style>