<template>
  <div>

    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
export default {
  name:'MyApp',
  components:{
    UserList
  }
}
</script>

<style lang='less' scoped>

</style>