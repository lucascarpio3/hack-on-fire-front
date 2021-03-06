// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/scss/font-awesome.scss'
import '../css/main.css'
import VueSelect from 'vue-select'
import 'bootstrap'

Vue.config.productionTip = false
Vue.use(VueSelect)
Vue.use(resource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
