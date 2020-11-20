import Home from "./views/Home"
import Menu from './views/Menu'
import Admin from './views/Admin'
import About from './views/About/About'
import Login from "./views/Login"
import Register from "./views/Register"

export const routes = [
	{	
		path:'/',
		name:"homeLink",
		component:Home
	},
	{
		path:'/menu',
		name:'menuLink',
		component:Menu
	},
  	{
  		path:'/admin',
  		name:'adminLink',
  		component:Admin
  	},
   	{
   		path:'/about',
   		name:'aboutLink',
   		component:About
   	},
   	{
   		path:'/login',
   		name:'loginLink',
   		component:Login
   	},
   	{
   		path:'/register',
   		name:'registerLink',
   		component:Register
   	},
   	{
   		path:'*',
   		redirect:'/'
   	}
]