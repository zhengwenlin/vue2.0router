import Vue from 'vue'
import VueRouter from '../vue-router'
import Home from '../components/Home'
import About from '../components/About'
Vue.use(VueRouter)


const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: About,
		// /about/a  /about/b
		children: [
			{
				path: 'a',
				component: {
					render: (h) => {
						return h('p', null, '/about A')
					}
				}
			},
			{
				path: 'b',
				component: {
					render: (h) => {
						return h('p', null, '/about B')
					}
				}
			}
		]
	}
]

export default new VueRouter({
	mode: 'history',
	routes
})