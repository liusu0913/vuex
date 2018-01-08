<template>
	<div class="one">
		<h1>我是兄弟1</h1>
		<p>count的数据为{{count}}</p>
		<button @click="addOne">点击按钮加1</button>
	</div>
</template>

<script>
	export default {
		name: 'bOne',
		computed: {
			count() {
				return this.$store.state.count;
			}
		},
		methods: {
			addOne() {
				this.$store.commit({
					type: 'add',
					step: 1
				});
			}
		}
	}
</script>
<style>
.one {
	background-color: red;
	color: white;
}
	
</style>