import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register.vue'
import login from '../views/login.vue'
import userinfo from '../views/userinfo.vue'
import search from '../components/common/search.vue'
import edit from '../views/edit.vue'
import home from '../views/home.vue'
import article from '../views/Article.vue'



Vue.use(VueRouter)

const routes = [
{ path: '/', redirect: '/login' },
{ path: '/register', component: register },
{ path: '/login', component: login },
{ path: '/userinfo', component: userinfo,meta:{istoken:true} },
{ path: '/search', component: search },
{ path: '/edit', component: edit },
{ path: '/home', component: home,},
{ path:'/article/:id',component:article }


]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next) => {
  if((!localStorage.getItem('token') || !localStorage.getItem('id'))&&to.meta.istoken == true){
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})
export default router