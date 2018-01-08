// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import vueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(vueResource)

// // 声明vuex的公共变量
const store = new Vuex.Store({
	state: {
		count: 0,
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
	},
	// 创建那数据的时候的筛选函数，用来过滤foods中的不需要的数据
	getters: {
		filterFuite(state) {
			return state.foods.filter(item => item.isShow);
			// 此处的写法等于(item)=>{return item.isShow}
		}
	},
	mutations: {
		add(state,obj) {
			// 这里的state是store.state;
			console.log(state);
			state.count += obj.step;
		}
	},
	actions: {
		addAsync(content,obj) {
			setTimeout(function(){
				// 这里的content的指的是store对象；
				content.commit('add',obj);
			},1000)
		}
	}
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
