import Vue from 'vue'
const state = {score:0};
const actions = {
	getScore(content,obj) {
			var url = '/static/score.json?' + new Date().getTime();
			// 这里利用去全局的http请求
			Vue.http.get(url).then(function(res) {
				res.body.data.filter(item=> item.id == obj.userId);
				// console.log(res.body.data[0]);
				content.state.score = res.body.data[0].score;
			});
		}
};
// 向外暴露模块
export default {
	state,
	actions
}
