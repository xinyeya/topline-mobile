import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * 这个第三包引入即可，它会自动根据页面宽度设置网页基准字体大小
 */
import 'amfe-flexible'

/**
 * 方便开发，暂时引入所有组件
 */
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant)

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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
