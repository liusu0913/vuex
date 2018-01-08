<template>
	<div class="one">
		<h1>我是兄弟1</h1>
		<p>count的数据为{{count}}</p>
		<p>利用store的getters筛选获取到的foods</p>
		<ul>
			<li v-for="food in foods">{{food.name}}</li>
		</ul>
		<button @click="addOne">点击按钮加1</button>
	</div>
</template>

<script>
	export default {
		name: 'bOne',
		computed: {
			count() {
				// 模块化之后，回去数据要加上模块的名字这里是add
				// console.log(this.$store);
				return this.$store.state.add.count;
				// return this.$store.state.count;
			},
			// food的数据的获取，利用store的getters筛选获取
			foods() {
				//  模块化因为所有的模块只有一个getters这里不用加模块名字
				// console.log(this.$store.getters.filterFuite);
				return this.$store.getters.filterFuite;
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