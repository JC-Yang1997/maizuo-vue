import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../components/home/home.vue";
import Films from "../components/films/films.vue";
import notFound from "../components/common/notFound.vue";
import Cinema from "../components/cinema/cinema.vue";
import Mine from "../components/mine/mine.vue";
import Detail from "../components/detail/detail.vue";

const router = new VueRouter({
	routes:[
		{
			path:"",
			redirect:"/home"
		},
		{
			path:"/home",
			component:Home
		},
		{
			path:"/cinema",
			component:Cinema
		},
		{
			path:"/detail/:id",
			name:"detail",
			component:Detail,
			props:true
		},
		{
			path:"/films",
			component:Films
		},
		{
			path:"/mine",
			component:Mine
		},
		{
			path:"/notFound",
			component:notFound
		},
		{
			path:"**",
			redirect:"/notFound"
		}
	]
});


export default router;