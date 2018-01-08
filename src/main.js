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
		count: 0
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
