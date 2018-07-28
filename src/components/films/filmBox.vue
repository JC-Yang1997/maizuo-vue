<template>
	<div class="filmBox">
		<ul v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="10"
			infinite-scroll-immediate-check="false">
		<li
		is="film-item"
		v-for="film in films"
		:key="film.id"
		:film="film">
		</li>
	</ul>
	</div>
</template>
<script>
	import axios from "axios";
	import filmItem from "./filmItem.vue";
	import {Toast} from "mint-ui";
	export default{
		name:"filmBox",
		props:["type"],
		components:{
			filmItem
		},
		data(){
			return {
				page:1,
				count:7,
				films:[],
				loading:false
			}
		},
		methods:{
			getFilms(){
				const {page,count} = this;
				var toast = Toast({
					message: 'Loading……',
				    duration: -1,
				    iconClass:"fa fa-spinner fa-spin",
				    className:"toast-icon-loading"
				});
				axios.get("/mz/v4/api/film/"+this.type,{
					params:{
						page,
						count
					}
				}).then(res=>{
					this.films = this.films.concat(res.data.data.films);
					let {current,total} = res.data.data.page;
					toast.close();
					if(current > total){
						Toast({
							  message: '别划啦…………到底啦！',
							  position: 'bottom',
							  duration: 3000
							});
						return ;
					}
					this.loading = false;
					this.page++;
				},function(){
					console.log("error:获取电影列表数据失败");
				});
			},
			loadMore(){
				this.loading = true;
				this.getFilms();
			}
		},
		// 监听type属性变化
		watch:{
			type:{
				immediate:true,
				handler(val){
					this.films=[];
					this.page = 1;
					this.getFilms();
					this.loading = false;
				}
			}
		}
	}
</script>
<style scoped lang="scss">

</style>