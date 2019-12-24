import Vue from 'vue'
import App from './App'
import router from './router'
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
import Message from 'muse-ui-message';
import VueLazyload from 'vue-lazyload'
import NProgress from 'muse-ui-progress'
import 'muse-ui-progress/dist/muse-ui-progress.css'
import Toast from 'muse-ui-toast';
Vue.use(VueLazyload)
Vue.use(Toast)
// Vue.use(MuseUI)
Vue.use(NProgress, {
  zIndex: 2000, // progress z-index
  top: 0, // position fixed top
  speed: 500, // progress speed
  color: 'primary', // color
  size: 3, // progress size
  className: '' // progress custom class
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
