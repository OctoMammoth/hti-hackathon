import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main'
import SignIn from '@/views/signin'
import Login from '@/views/login'
import Watch from '@/views/watch'
import SearchTicket from '@/views/search-ticket'
import ChooseSeat from '@/views/choose-seat'
import CheckIn from '@/views/check-in'
import map from '@/views/map'

import NotFound from "@/views/notfound"

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/search-ticket',
		component: SearchTicket,
	},
	{
		path: '/choose-seat',
		component: ChooseSeat,
	},
	{
		path: '/check-in',
		component: CheckIn,
	},
	{
		path: '/watch',
		component: Watch,
	},
	{
		path: '/map',
		component: map,
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