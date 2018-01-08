<template>
	<div class="two">
		<h1>我是兄弟2</h1>
		<p>count的数据为{{count}}</p>
		<button @click="add">点击按钮加10</button>
	</div>
</template>
<script>
	export default {
		name: 'bTwo',
		computed: {
			count() {
				return this.$store.state.count;
			}
		},
		methods: {
			add() {
				this.$store.dispatch({
					type: 'addAsync',
					step: 10
				})
			}
		}
	}
</script>
<style>
.two {
	margin-top: 20px;
	background-color: black;
	color: white;
}
	
</style>