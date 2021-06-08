<template>
  <div class="usefullComponents wrapper">
    <div class="text text-small">
      <h1>Components utiles</h1>
      <p>
        Voici une liste de components utiles et efficaces qui pourront vous
        aider.
      </p>
      <div class="inputContainer">
        <label>Type</label>
        <select v-model="typeSelect">
          <option v-for="type in types" :key="type.value" :value="type.value">
            {{ type.name }}
          </option>
        </select>
      </div>

      <div class="inputContainer">
        <label>Tags</label>
        <select v-model="tagSelect">
          <option v-for="tag in tags" :key="tag.value" :value="tag.value">
            {{ tag.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="cardsContainer">
      <component-card :types="types.plugin.value" :tags="tags.form.value">
        <template #demo>
          <img src="../assets/images/v-mask-screenshot.png" />
        </template>
        <template #text>
          <div>
            <h3>Vue input mask</h3>
            <p>Un plugin afin de forcer un format de donnée dans un input.</p>
          </div>
          <a
            class="btn"
            href="https://github.com/probil/v-mask"
            target="_blank"
            download
          >
            Voir le plugin
          </a>
        </template>
      </component-card>

      <component-card :types="types.component.value" :tags="tags.ui.value">
        <template #demo>
          <img src="../assets/images/vuescroll-screenshot.png" />
        </template>
        <template #text>
          <div>
            <h3>vuescroll</h3>
            <p>Un component pour avoir des scrollbars custom!</p>
          </div>
          <a
            class="btn"
            href="https://vuescrolljs.yvescoding.org/guide/"
            target="_blank"
            download
          >
            Voir le component
          </a>
        </template>
      </component-card>

      <component-card
        :types="types.component.value + ' ' + types.plugin.value"
        :tags="tags.ui.value"
      >
        <template #demo>
          <img src="../assets/images/responsive-video-screenshot.png" />
        </template>
        <template #text>
          <div>
            <h3>Responsive video background player</h3>
            <p>
              Un component/plugin pour facilement afficher des vidéos en
              background!
            </p>
          </div>
          <a
            class="btn"
            href="https://github.com/avidofood/vue-responsive-video-background-player"
            target="_blank"
            download
          >
            Voir le component
          </a>
        </template>
      </component-card>

      <component-card :types="types.component.value" :tags="tags.form.value">
        <template #demo>
          <img src="../assets/images/veevalidate-screenshot.png" />
        </template>
        <template #text>
          <div>
            <h3>VeeValidate</h3>
            <p>Un component pour gérer la validation des formulaires!</p>
          </div>
          <a
            class="btn"
            href="https://vee-validate.logaretm.com/"
            target="_blank"
            download
          >
            Voir le component
          </a>
        </template>
      </component-card>

      <component-card :types="types.component.value" :tags="tags.form.value">
        <template #demo>
          <div class="demoWrapper">
            <div>
              <country-select v-model="country" :country="country" />
            </div>
            <div>
              <region-select
                v-if="country != ''"
                v-model="region"
                :country="country"
                :region="region"
              />
            </div>
          </div>
        </template>
        <template #text>
          <div>
            <h3>Vue-Country-Region-Select</h3>
            <p>Un component de select pour les pays et régions!</p>
            <p>Tu peux essayer le contrôle dans cette carte!</p>
          </div>
          <a
            class="btn"
            href="https://github.com/gehrj/vue-country-region-select"
            target="_blank"
            download
            style="margin-bottom: 1rem"
          >
            Voir le component pour Vue 2
          </a>
          <a
            class="btn"
            href="https://github.com/isvidler/vue3-country-region-select"
            target="_blank"
            download
          >
            Voir le component pour Vue 3
          </a>
        </template>
      </component-card>

      <component-card :types="types.plugin.value" :tags="tags.ui.value">
        <template #demo>
          <img src="../assets/images/vue-toasted-screenshot.png" />
        </template>
        <template #text>
          <div>
            <h3>Vue Toasted</h3>
            <p>
              Un plugin qui permet de faire afficher une notification "toast"
              rapidement.
            </p>
          </div>
          <a
            class="btn"
            href="https://github.com/shakee93/vue-toasted"
            target="_blank"
            download
            style="margin-bottom: 1rem"
          >
            Voir le plugin pour Vue
          </a>
          <a
            class="btn"
            href="https://www.npmjs.com/package/@nuxtjs/toast"
            target="_blank"
            download
          >
            Voir le plugin pour Nuxt
          </a>
        </template>
      </component-card>

      <component-card :types="types.plugin.value" :tags="tags.ui.value">
        <template #demo>
          <img src="../assets/images/tiny-slider-screenshot.png" />
        </template>
        <template #text>
          <div>
            <h3>Tiny slider</h3>
            <p>
              Un component de carousel simple efficace et customizable
              facilement.
            </p>
          </div>
          <a
            class="btn"
            href="https://github.com/viktorlarsson/vue-tiny-slider"
            target="_blank"
            download
          >
            Voir le component
          </a>
        </template>
      </component-card>

      <component-card
        :types="types.module.value"
        :tags="tags.ui.value + ' ' + tags.niceToHave.value"
      >
        <template #demo>
          <img
            src="../assets/images/nuxt-device-module-screenshot.png"
            style="padding: 1rem; box-sizing: border-box"
          />
        </template>
        <template #text>
          <div>
            <h3>Nuxt device module</h3>
            <p>
              Un module pour détecter sur quel appareil l'utilisateur se trouve.
              Disponible uniquement sur Nuxt.
            </p>
          </div>
          <a
            class="btn"
            href="https://github.com/nuxt-community/device-module"
            target="_blank"
            download
          >
            Voir le module Nuxt
          </a>
        </template>
      </component-card>

      <component-card :types="types.module.value" :tags="tags.niceToHave.value">
        <template #demo>
          <img src="../assets/images/nuxt-pwa-screenshot.png" />
        </template>
        <template #text>
          <div>
            <h3>Nuxt PWA</h3>
            <p>
              Un module pour éliminer les configs à faire pour pleins de choses,
              à voir! Disponible uniquement pour Nuxt.
            </p>
          </div>
          <a
            class="btn"
            href="https://pwa.nuxtjs.org/"
            target="_blank"
            download
          >
            Voir le module Nuxt
          </a>
        </template>
      </component-card>

      <component-card :types="types.module.value" :tags="tags.niceToHave.value">
        <template #demo>
          <nuxt-image-svg></nuxt-image-svg>
        </template>
        <template #text>
          <div>
            <h3>Nuxt Image</h3>
            <p>
              Un module pour optimiser et redimensionner les images. Disponible
              uniquement pour Nuxt.
            </p>
          </div>
          <a
            class="btn"
            href="https://image.nuxtjs.org/"
            target="_blank"
            download
          >
            Voir le module Nuxt
          </a>
        </template>
      </component-card>

      <component-card :types="types.module.value" :tags="tags.niceToHave.value">
        <template #demo>
          <img src="../assets/images/cookie-universal-nuxt.jpg" />
        </template>
        <template #text>
          <div>
            <h3>Cookie Universal Nuxt</h3>
            <p>
              Un module pour facilement créer des cookies autant en server-side
              qu'en client-side. Ne fonctionne qu'avec Nuxt
            </p>
          </div>
          <a
            class="btn"
            href="https://www.npmjs.com/package/cookie-universal-nuxt"
            target="_blank"
            download
          >
            Voir le module Nuxt
          </a>
        </template>
      </component-card>

      <component-card :types="types.component.value" :tags="tags.form.value">
        <template #demo>
          <img src="../assets/images/vue-datepicker-screenshot.png" />
        </template>
        <template #text>
          <div>
            <h3>Vue2 Date Picker</h3>
            <p>
              Un date picker simple à customiser qui fonctionne pour vue et
              nuxt.
            </p>
          </div>
          <a
            class="btn"
            href="https://www.npmjs.com/package/vue2-datepicker"
            target="_blank"
            download
          >
            Voir le component
          </a>
        </template>
      </component-card>

      <component-card :types="types.component.value" :tags="tags.ui.value">
        <template #demo>
          <img src="../assets/images/vuejs-paginate-screenshot.png" />
        </template>
        <template #text>
          <div>
            <h3>Vuejs Paginate</h3>
            <p>
              Un component simple à utiliser et à styliser pour afficher un
              pager.
            </p>
          </div>
          <a
            class="btn"
            href="https://www.npmjs.com/package/vuejs-paginate"
            target="_blank"
            download
          >
            Voir le component
          </a>
        </template>
      </component-card>
    </div>
  </div>
</template>

<script>
import ComponentCard from '@/components/ComponentCard'
import types from '@/models/types'
import tags from '@/models/tags'
import NuxtImageSvg from '@/assets/images/svg/nuxt-image-svg'

export default {
  name: 'UsefullComponents',
  components: {
    ComponentCard,
    NuxtImageSvg,
  },
  data() {
    return {
      radialProgressValue: 33,
      types,
      tags,
      typeSelect: types.all.value,
      tagSelect: tags.all.value,
      country: '',
      region: '',
    }
  },
  watch: {
    typeSelect(newVal) {
      let cards
      this.tagSelect === tags.all.value
        ? (cards = document.querySelectorAll('.componentCard'))
        : (cards = document.querySelectorAll(
            ".componentCard[data-tag*='" + this.tagSelect + "']"
          ))
      if (newVal !== types.all.value) {
        cards.forEach(function (item) {
          if (!item.dataset.type.includes(newVal)) {
            item.classList.add('hidden')
          } else if (item.classList.contains('hidden')) {
            item.classList.remove('hidden')
          }
        })
      } else {
        cards.forEach(function (item) {
          item.classList.remove('hidden')
        })
      }
    },
    tagSelect(newVal) {
      let cards
      this.typeSelect === types.all.value
        ? (cards = document.querySelectorAll('.componentCard'))
        : (cards = document.querySelectorAll(
            ".componentCard[data-type*='" + this.typeSelect + "']"
          ))

      if (newVal !== tags.all.value) {
        cards.forEach(function (item) {
          if (!item.dataset.tag.includes(newVal)) {
            item.classList.add('hidden')
          } else if (item.classList.contains('hidden')) {
            item.classList.remove('hidden')
          }
        })
      } else {
        cards.forEach(function (item) {
          item.classList.remove('hidden')
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/global/_variables.scss';

.usefullComponents {
  padding-bottom: rem(32);

  .cardsContainer {
    margin-top: rem(32);
    display: flex;
    flex-wrap: wrap;
    gap: rem(20);

    h3 {
      margin: 0;
    }

    a.btn {
      width: 100%;

      &:first-of-type {
        margin-top: auto;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .demoWrapper {
      padding: rem(16);
      box-sizing: border-box;
      width: 100%;
    }
  }
}
</style>
