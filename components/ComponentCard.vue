<template>
  <div class="componentCard" :data-type="types" :data-tag="tags">
    <div class="demoContainer">
      <div class="demo">
        <slot name="demo"></slot>
      </div>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentCard',
  props: {
    types: {
      type: String,
      default: null,
    },
    tags: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/global/_variables.scss';

.componentCard {
  background: $dark;
  width: 100%;
  max-width: calc(33.333% - #{rem(40)});
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 rem(15) 0 rgba(255, 255, 255, 0.15);

  .demoContainer {
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;

    .demo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .text {
    padding: rem(20);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
