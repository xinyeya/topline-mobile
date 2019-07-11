import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * 这个第三包引入即可，它会自动根据页面宽度设置网页基准字体大小
 */
import 'amfe-flexible'

// 表单验证插件
import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'

/**
 * 后面打包时重新导入
 */
import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Field,
  Cell,
  CellGroup,
  Loading,
  Tab,
  Tabs,
  List,
  PullRefresh
} from 'vant'

Vue
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Field)
  .use(Cell)
  .use(CellGroup)
  .use(Loading)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(PullRefresh)

Vue.use(VeeValidate, {
  events: '' // 禁用默认事件验证
  // events: 'change'
})

Validator.localize('zh_CN', zhCN)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
