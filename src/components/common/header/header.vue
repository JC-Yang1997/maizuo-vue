<template>
	<header>
	<div class="navbar">
		<div class="header-left">
			<div class="title-icon">
				<i class="fa fa-navicon" @click="isNavShow=!isNavShow"></i>
			</div>
			<div class="title">
				卖座电影
			</div>
		</div>
		<div class="header-right">
				<div class="city">
					成都
					<i class="fa fa-angle-down"></i>
				</div>
				<div class="user">
					<i class="fa fa-user-o"></i>
				</div>
			</div>
	</div>

	<!-- 父组件向子组件传递值：绑定属性并且在子组件中设置props传递 -->
	<!-- 子组件向父组件传递值：通过调用事件触发$emit方法进行传递 -->
	<!-- 组件之间通讯并且传递值：通过事件总线bus进行 -->
	<nav-list :isNavShow="isNavShow" @close="isNavShow=false"></nav-list>
	</header>

</template>
<script>
	import NavList from "./navList.vue";
	import "animate.css";
	import router from "../../../router/index.js";
	export default{
		name:"Header",
		data(){
			return {
				isNavShow:false
			}
		},
		methods:{
			closeNavList(){
				this.isNavShow = false;
			}
		},
		created(){
			router.beforeEach((to,from,next)=>{
				this.closeNavList();
				next();
			});
		},
		components:{
			NavList
		}
	}
</script>
<style scoped lang="scss">
	.navbar {
		background: #282828;
	    position: fixed;
	    z-index: 500;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: auto;
	    height: .5rem;
	    line-height: .5rem;
	    overflow: hidden;

	    .header-left {
	    	color: #fff;
		    font-size: 0.16rem;
		    line-height: 0.5rem;
		    text-align: left;
		    text-shadow: 0 -0.01rem 0 rgba(0,0,0,0.8);
		    width: auto;
		    height: 0.5rem;
		    margin: 0 auto;
		    float: left;

		    .title-icon {
		    	float: left;
			    width: 0.48rem;
			    text-align: center;
			    border-right: 0.01rem solid #222;
			    box-shadow: 1px 0 1px #363636;
			    color: #999;
		    }

		    .title {
		    	padding: 0 1em;
			    float: left;
			    font-size: 14px;
			    color: #efefef;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    displdday: inline-block;
			    overflow: hidden;
		    }
	    }

	    .header-right {
	    	float: right;
	    	color: #999;
	    	.city {
	    		float: left;
			    font-size: 14px;
			    padding: 0 6px;
	    	}
	    	.user {
	    		float: left;
			    font-size: 16px;
			    width: 48px;
			    text-align: center;
	    	}
	    }
	}
</style>