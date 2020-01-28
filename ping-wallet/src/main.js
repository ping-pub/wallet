import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './components'

Vue.use(Vant);

Vue.config.productionTip = false

// 可以由 uniapp 植入，彻底分离开 app 和 h5 代码
document.addEventListener('UniAppJSBridgeReady', function () {
  uni.getEnv(function (res) {
    console.log('当前环境：' + JSON.stringify(res));
    if (res.plus) {
      uni.postMessage({
        data: {
          action: 'statusBarHeight'
        }
      })
    } else {
      document.removeEventListener('UniAppJSBridgeReady', (e) => { console.log(e) })
    }
  });
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
