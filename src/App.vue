<template>
  <div class="wrapper">
    <router-view></router-view>

    <footer-component />
  </div>
</template>

<script>
// Локальная регистрация компонента
import HeroView from '@/views/HeroView.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  // Локальная регистрация компонента
  components: { HeroView, FooterComponent }

}
</script>

<style lang="scss" scoped>
/* Локальная стилизация */

</style>
