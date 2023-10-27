import Vue from 'vue'
import App from './App.vue'

// Глобальное подключение стилей
import './assets/scss/style.scss'

// Глобальная регистрация компонента
// import FirstComponent from './components/FirstComponent.vue' 

Vue.config.productionTip = false

// Глобальная регистрация компонента
// Vue.component('first-component', FirstComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
