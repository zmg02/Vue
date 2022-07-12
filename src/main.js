import Vue from 'vue'
import App from './App.vue'
//引入路由相关组件
import router from '@/router'
//引入仓库vuex插件
import store from '@/store'
//注册全局组件----TypeNav
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
//mock模拟数据
import '@/mock/mockServer'
//引入swiper样式
import 'swiper/css/swiper.css'
//引入API
import * as API from '@/api'

// import {reqGetCategoryList} from '@/api'
// reqGetCategoryList();

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //定义全局事件总线
    Vue.prototype.$API = API; // 注册全局API
  },
  router,
  store,
}).$mount('#app')
