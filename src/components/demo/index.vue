<template>
	<div>
		<h1>我是路由操作数据共享的主页</h1>
		<Bone></Bone>
		<Btwo></Btwo>
	</div>
</template>
<script>
	import Bone from './child/Bone.vue';
	import Btwo from './child/Btwo.vue';
	export default {
		name: 'routerIndex',
		components: {Bone, Btwo}
	}
</script>