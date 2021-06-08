<template>
  <div
    class="radialProgress"
    :class="[
      { over50: percent > 50 },
      { zero: percent == 0 },
      { full: percent == 100 },
    ]"
    :style="getRadialProgressStyle"
  >
    <div class="clipper">
      <div class="first50" :style="{ backgroundColor: progressColor }"></div>
      <div
        class="value"
        :style="{
          transform: 'rotate(' + percent * 3.6 + 'deg)',
          transitionDuration: transitionDuration + 'ms',
          backgroundColor: progressColor,
        }"
      ></div>
    </div>
    <div
      class="innerCircle"
      :style="{
        backgroundColor: innerBackground,
        width: innerWidth,
        height: innerWidth,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    // Nombre en pourcentage de la progression
    percent: {
      type: Number,
      required: true,
    },
    // Width du progress bar
    width: {
      type: String,
      default: '100%',
    },
    // Couleur du rond interne
    innerBackground: {
      type: String,
      default: '#373733',
    },
    // Grosseur du rond interne. Possible de mettre un calc(100% - 10px) pour toujours avoir une bordure de 10px
    innerWidth: {
      type: String,
      default: '75%',
    },
    // Couleur de la progression du cercle externe
    progressColor: {
      type: String,
      default: '#FFFFFF',
    },
    // Couleur du cercle externe (sous la progression)
    progressBackground: {
      type: String,
      default: '#61615D',
    },
    // On peut ajouter une transition, mais il faut s'assurer que la progression n'avance pas trop vite, sinon il y a un petit glitch visuel
    transitionDuration: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    getRadialProgressStyle() {
      if (this.percent !== 100) {
        return { backgroundColor: this.progressBackground, width: this.width }
      } else {
        return { backgroundColor: this.progressColor, width: this.width }
      }
    },
  },
  watch: {
    percent() {
      this.debugPercent()
    },
  },
  created() {
    this.debugPercent()
  },
  methods: {
    debugPercent() {
      if (this.percent > 100 || this.percent < 0) {
        // eslint-disable-next-line no-console
        console.error(
          'Please provide a value between 0 and 100 inclusively for the percent prop. Given value: ' +
            this.percent
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// Vous devriez utiliser les props pour changer le style, ne touchez au css que si vous savez ce que vous faites.
.radialProgress {
  position: relative;
  padding: 100% 0 0 0;
  border-radius: 50%;
  overflow: hidden;

  .innerCircle {
    border: none;
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .clipper {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);

    .value {
      position: absolute;
      clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-sizing: border-box;
      transition: all 0.25s ease-in-out;
    }

    .first50 {
      position: absolute;
      clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
      border-radius: 50%;
      width: 100%;
      height: 100%;
      transition: none;
      display: none;
    }
  }

  &.over50 {
    .clipper {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    .first50 {
      display: block;
    }
  }

  &.zero {
    .value {
      display: none;
    }
  }
}
</style>
