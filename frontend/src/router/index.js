import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main'
import SignIn from '@/views/signin'
import Login from '@/views/login'

import NotFound from "@/views/notfound"

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/signin',
		name: 'SignIn',
		component: SignIn,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{ 
		path: '/:pathMatch(.*)*', 
		name: '404', 
		component: NotFound, 
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: routes,
})

export default router