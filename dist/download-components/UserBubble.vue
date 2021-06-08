<!-- Requiert le mixin initialsFromName.js mais vous pouvez l'enlever pour fournir les initiales directement -->
<template>
  <div
    class="userBubble"
    :style="{ transform: 'translateX(-' + index * 8 + 'px)' }"
  >
    {{ getInitials(name) }}
    <span class="tooltip">{{ name }}</span>
  </div>
</template>

<script>
import InitialsFromName from './mixins/initialsFromName.js'

export default {
  mixins: [InitialsFromName],
  props: {
    index: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
// Vous aurez probablement besoin de changer le css
.userBubble {
  font-size: 1rem;
  line-height: 1;
  font-weight: 450;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  box-sizing: border-box;
  border-radius: 100%;
  border: solid 1px white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  position: relative;
  cursor: default;

  .tooltip {
    opacity: 0;
    transition: all 0.15s ease-in-out;
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);
    background: #1b1d1b;
    padding: 0.625rem 1.25rem;
    white-space: nowrap;
    z-index: 10;
    text-transform: none;

    &:before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      width: 0.5rem;
      height: 0.5rem;
      background: #1b1d1b;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  &:hover {
    .tooltip {
      opacity: 1;
    }
  }

  &:not(:first-child) {
    border: none;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyMSAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iLTUuNSIgeT0iMC41IiB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHJ4PSIxMyIgc3Ryb2tlPSIjNjE2MTVEIi8+Cjwvc3ZnPgo=');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }
}
</style>
