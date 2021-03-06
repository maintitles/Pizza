import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes.js"
// import axios from "axios"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
// 配置默认根路径
// axios.default.baseURL = "http://localhost:3000/";
// 配置vue原型（在任何组件中都能使用axios）
// Vue.prototype.http = axios;



const router = new VueRouter({
	routes,
	mode:"history"
	
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
