import Vue from 'vue'
import App from './App.vue'

//vue router
import VueRouter from 'vue-router'


import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

Vue.use(SuiVue)


Vue.config.productionTip = false


//router stuff
Vue.use(VueRouter)

const routes = [
	//to homepage, which also shows results of basic search
	{
		path: '/',
		name: 'home',
		component: App
	},
	//to details page for the given taxonomy
	{
		path: '/details/:taxonomy',
		name: 'details',
		component: () => import('@/pages/Details/App.vue'),
		props: (route) => ({
			...route.params
		})
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
