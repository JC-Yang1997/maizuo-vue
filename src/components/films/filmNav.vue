<template>
	<div class="film-nav">
		<div
		v-for="nav in navs"
		:key="nav.id"
		class="nav-list"
		:class="{active:type===nav.type}"
		@click="$emit('change',nav.type)">{{nav.title}}
		</div>
	</div>
</template>
<script>
	export default{
		name:"filmNav",
		props:["type"],
		data(){
			return{
				navs:[
					{id:1,title:"正在热映",type:"now-playing"},
					{id:2,title:"即将上映",type:"coming-soon"}
				]
			}
		},
	}
</script>
<style scoped lang="scss">
	.film-nav {
		height: 46px;
	    margin: 0 auto;
	    border-bottom: solid #fe6e00 1px;
	    .nav-list {
	    	float: left;
		    width: 50%;
		    height: 100%;
		    text-align: center;
		    font-size: 16px;
		    line-height: 46px;
		    color: #6a6a6a;
		    cursor: pointer;
		    &.active {
		    	color: #fe6e00;
    			border-bottom: solid;
		    }
	    }
	}
</style>