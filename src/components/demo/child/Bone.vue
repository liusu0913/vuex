<template>
	<div class="one">
		<h1>兄弟1</h1>
		<p>积分：{{score}}</p>
		<p>价格：{{price}}</p>
	</div>
</template>
<script>
	export default {
		name: 'Bone',
		// 计算属性
		created() {
			// 价格
				this.$store.dispatch({
					type: 'getPrice',
					foodId: 201701
				});
				
			// 分数
				this.$store.dispatch({
					type: 'getScore',
					userId: 201701
				});
		},
		computed: {
			score() {
				return this.$store.state.score;
			},
			price() {
				return this.$store.state.price;
			}
		}
	}
</script>
<style>
	.one {
		color: white;
		background-color: red;
	}
</style>