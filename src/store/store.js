import Vue from 'vue'
import Vuex from 'vuex'
import score from './modules/score.js'
import price from './modules/price.js'
import add from './modules/add.js'
Vue.use(Vuex);
// 输出一个Vuex的全局对象
export default new Vuex.Store({
	modules: {score, price, add}
});