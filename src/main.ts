import { createApp } from 'vue'
import axios from 'axios'
import router from '@/routes/router'
import store from '@/store/store'

import App from './App.vue'

// 替换 baseURL
axios.defaults.baseURL = 'http://apis.imooc.com/api/'
// 下面的 icode 值是从慕课网获取的 token 值，可以在课程右侧的项目接口校验码找到
axios.interceptors.request.use(config => {
  // get 请求，添加到 url 中
  config.params = { ...config.params, icode: '8A6AE5F537FEDE93' }
  // 其他请求，添加到 body 中
  // 如果是上传文件，添加到 FormData 中
  if (config.data instanceof FormData) {
    config.data.append('icode', '8A6AE5F537FEDE93')
  } else {
  // 普通的 body 对象，添加到 data 中
    config.data = { ...config.data, icode: '8A6AE5F537FEDE93' }
  }
  return config
})

createApp(App).use(router).use(store).mount('#app')
