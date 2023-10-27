import Vue from 'vue';
import App from './App.vue';

// Глобальное подключение стилей
import './assets/scss/style.scss'

import router from './router';

// Глобальная регистрация компонента
// import FirstComponent from './components/FirstComponent.vue' 

Vue.config.productionTip = false

// Глобальная регистрация компонента
// Vue.component('first-component', FirstComponent)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
