<template>
  <div>
    <MainNavigation />
    <Nuxt />
  </div>
</template>

<script>
import MainNavigation from '../components/MainNavigation.vue'
export default {
  components: { MainNavigation },
}
</script>

<style lang="scss">
@import '@/assets/css/global/_variables.scss';
@import '@/assets/css/main.scss';
</style>
