<template>
	<div class="nav-list">	

		<!-- 遮罩 -->
			<transition enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut">
				<div class="mask" @click="$emit('close')" v-if="isNavShow"></div>
			</transition>

		<!-- 导航菜单 -->
		<transition enter-active-class="animated slideInLeft"
		leave-active-class="animated slideOutLeft">
			<nav class="nav-group" v-if="isNavShow">
				<ul>
					<router-link
					 tag="li"
					 v-for="item in nav"
					:key="item.id"
					:to="item.path">{{item.title}}<i class="fa fa-angle-right"></i>
				</router-link>
				</ul>
			</nav>
		</transition>
	</div>
</template>
<script>
	export default{
		name:"navList",
		props:["isNavShow"],
		data(){
			return{
				nav:[
					{id:1,title:"首页",path:"/home"},
					{id:2,title:"影院",path:"/cinema"},
					{id:3,title:"影片",path:"/films"},
					{id:4,title:"我的",path:"/mine"}
				]
			}
		}
	}
</script>
<style scoped lang="scss">
		.nav-list {
		position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    color: #9a9a9a;
	    z-index: 499;

	    .mask {
	    	background: rgba(0,0,0, .4);
		    position: absolute;
		    top: .5rem;
		    right: 0;
		    left: 0;
		    transition: all ease 0.4s;
		    -webkit-transition: all ease 0.4s;
		    height: 100vh;
		}

	    .nav-group {
	    	border-top: 1px solid #222;
		    box-shadow: 0 1px 1px #363636 inset;
		    background: #282828;
		    position: absolute;
		    display: block;
		    top: .5rem;
		    right: 110px;
		    left: 0;
		    transition: all ease 0.4s;
		    -webkit-transition: all ease 0.4s;
		    height: 100vh;

		    li {
		    	line-height: .5rem;
		    	display: flex;
		    	justify-content: space-between;
		    	align-items: center;
		    	padding: 0 16px;
				border-bottom: 1px dotted #333;
		    }
	    }
	    
	}
</style>