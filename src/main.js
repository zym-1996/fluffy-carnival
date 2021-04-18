import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import http from '../http'
import { Toast } from 'vant'
import { Search } from 'vant'
import { Col, Row } from 'vant';
import { Uploader } from 'vant';


Vue.use(Uploader);

Vue.use(Col);
Vue.use(Row);
Vue.use(Search)
Vue.prototype.$http = http
Vue.prototype.$msg= Toast
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
