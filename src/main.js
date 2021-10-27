import Vue from 'vue'
import App from './App.vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "./style/base.css"
import "./style/transition.css"
Vue.config.productionTip = false
Vue.use(VueFullPage)
Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App),
}).$mount('#app')
