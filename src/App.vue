<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <router-view></router-view>
    <global-footer></global-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from '@/components/layouts/GlobalHeader.vue'
import GlobalFooter from '@/components/layouts/GlobalFooter.vue'

const currentUser: UserProps = {
  isLogin: false,
  name: 'Oyxiaoxi'
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  },
  setup () {
    return {
      currentUser
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
