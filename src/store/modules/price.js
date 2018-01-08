import Vue from 'vue';
const state = {price: 0};
const mutations = {
	// 获取VIP的价格
	getVIPPrice(state,obj) {
		state.price -= (obj.score / 10);
		// 积分归零
		this.state.score.score = 0;
	},
	getPrice(state,obj) {
		var url = '/static/price.json?'+ new Date().getTime();
		Vue.http.get(url).then(function(res) {
			// 这里是利用userId来筛选数据
			res.body.data.filter(item => item.userid == obj.userId);
			state.price = res.body.data[0].price;
		});
	}
};
const actions = {
	// 获取价格
	getAsyncPrice(content, obj) {
		content.commit('getPrice',obj);
	}
};
export default {
	state,
	mutations,
	actions
}