<template>
	<div class="swiper-container banner">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="thisImg in banners" :key="thisImg.id">
				<img :src="thisImg.imageUrl" alt="加载失败">
			</div>
		</div>
	</div>
</template>
<script>
	import Swiper from "swiper";
	import axios from "axios";
	import "swiper/dist/css/swiper.min.css";
	export default{
		name:"banner",
		data(){
			return {
				banners:[]
			}
		},
		methods:{
			getImg(){
				axios.get("./static/mock/banner.json").then(res=>{
					this.banners = res.data;
				},function(){
					console.log("axios get img error!");
				});
			}
		},
		created(){
			this.getImg();
		},
		updated(){
			// console.log(this.banners);
			new Swiper(".swiper-container",{
				loop:true,
				autoplay:true
			});
		}
	}
</script>
<style scoped lang="scss">
	.banner {
		position: relative;
	    display: block;
	    overflow: hidden;
	    margin: 0;
	    padding: 0;
	    width: 3.2rem;
	    height: 2rem;
	    margin-top: 0.5rem;

	    img {
	    	width: 100%;
	    }
	}
</style>