<!-- Requiert le mixin focusTrap.js mais vous pouvez l'enlever si vous ne désirez pas un trap de focus. -->
<template>
  <div
    ref="basePopin"
    class="popinContainer"
    :class="{ open: isOpen }"
    @keydown.escape="closePopin"
    @keydown.tab="focusTrap"
    @click="closePopin"
  >
    <div class="popin" @click.stop>
      <div class="titleZone">
        <!-- Remplacer par votre bon titre -->
        <div class="title">Titre du popin</div>
        <button @keyup.enter="closePopin" @click="closePopin">X</button>
      </div>

      <div class="popinBody">
        <!-- À remplacer par votre contenu -->
        <input ref="firstInput" type="text" placeholder="input 1" />
        <input type="text" placeholder="input 2" />
        <input type="text" placeholder="input 3" />
      </div>

      <div class="btnContainer">
        <button @click="closePopin">Cancel</button>
        <button @click="confirmPopin">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
import focusTrap from './mixins/focusTrap.js'

export default {
  mixins: [focusTrap],
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isOpen(newVal) {
      if (newVal === true) {
        // À enlever si vous ne voulez pas focus un champ à l'affichage du popin
        this.$refs.firstInput.focus()
        // Sert au mixin de focus trap
        this.getFocusableElements('basePopin')
      }
    },
  },
  methods: {
    closePopin() {
      // Vous pouvez reset les données du popin avant de le fermer
      this.$emit('closePopin')
    },
    confirmPopin() {
      // Effectuer le code au submit avant le closePopin
      this.closePopin()
    },
  },
}
</script>

<style lang="scss" scoped>
// Le css est à modifier comme bon vous semble
.popinContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0);
  pointer-events: none;
  transition: all 0.25s ease-in-out;

  .popin {
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%) scale(0);
    opacity: 0;
    background: #1b1d1b;
    transition: all 0.25s ease-in-out;
    width: 90%;
    max-width: 600px;
    box-sizing: border-box;
    padding: 2rem;
    color: #ffffff;

    .titleZone {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;

      .title {
        font-size: 2.25rem;
        line-height: 1.1;
        color: white;
      }
    }

    .btnContainer {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      margin-top: 4rem;
    }

    .popinBody {
      color: white;

      .split {
        display: flex;
        justify-content: space-between;

        .inputContainer {
          width: calc(50% - 0.625rem);
        }
      }
    }
  }

  &.open {
    background: rgba(0, 0, 0, 0.5);
    pointer-events: all;

    .popin {
      transform: translate(50%, -50%);
      opacity: 1;
    }
  }
}
</style>
