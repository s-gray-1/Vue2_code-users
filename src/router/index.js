import Vue from "vue";
import VueRouter from "vue-router";
import UserList from '@/components/UserList.vue'
import UserDetail from '@/components/UserDetail.vue'
Vue.use(VueRouter)
const router=new VueRouter({
  // 在这里声明 路由规则
  routes:[
    {path:'/',redirect:'/users'},
    {path:'/users',component:UserList},
    {path:'/users/:id',component:UserDetail,props:true}

  ]
})
export default router