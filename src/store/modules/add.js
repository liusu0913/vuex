import Vue from 'vue';
const state = {
	count: 0 ,
	foods: [{
		name: '香蕉',
		isShow: true
	},{
		name: '苹果',
		isShow: true
	},{
		name: '葡萄',
		isShow: true
	},{
		name: '大米',
		isShow: false
	}]
};
const getters = {
	filterFuite(state) {
		return state.foods.filter(item => item.isShow);
		// 此处的写法等于(item)=>{return item.isShow}
	}
};
const mutations = {
	add(state,obj) {
		// 这里的state是store.state;
		// console.log(state);
		state.count += obj.step;
	}
};
const actions = {
	addAsync(content,obj) {
		setTimeout(function(){
			// 这里的content的指的是store对象；
			content.commit('add',obj);
		},1000)
	}
};
export default {
	state,
	getters,
	mutations,
	actions
}