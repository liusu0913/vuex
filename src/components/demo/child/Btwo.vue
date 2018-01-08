<template>
	<div class="two">
		<h1>兄弟2</h1>
		<p>积分：{{score}}</p>
		<p>价格：{{price}}</p>
		<button @click="getVIPPrice">显示会员价格</button>
		<button @click="returnPrice">原来价格</button>
	</div>
</template>
<script>
	export default {
		name: 'Btwo',
		computed: {
			score() {
				return this.$store.state.score.score;
			},
			price() {
				return this.$store.state.price.price;
			}
		},
		methods: {
			getVIPPrice() {
				this.$store.commit({
					type: 'getVIPPrice',
					score: this.score
				})
			},
			returnPrice() {
				// 价格
				this.$store.dispatch({
					type: 'getAsyncPrice',
					foodId: 201701
				});
				
				// 分数
				this.$store.dispatch({
					type: 'getScore',
					userId: 201701
				});
			}
		}
	}
</script>
<style>
	.two {
		color: white;
		background-color: black;
	}
	
</style>