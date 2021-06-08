<template>
  <nav>
    <div class="wrapper">
      <NuxtLink to="/">Accueil</NuxtLink>
      <NuxtLink to="/usefull-components">Components utiles</NuxtLink>
      <NuxtLink to="/custom-components">Components custom</NuxtLink>
      <NuxtLink to="/conventions">Conventions</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavigation',
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/global/_variables.scss';

nav {
  background: $dark;
  margin-bottom: rem(32);
  padding: rem(16) 0;

  .wrapper {
    display: flex;
    justify-content: center;
    gap: rem(32);

    a {
      display: block;
    }
  }
}
</style>
