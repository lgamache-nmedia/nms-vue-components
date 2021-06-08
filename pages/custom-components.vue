<template>
  <div class="customComponents wrapper">
    <div class="text text-small">
      <h1>Components custom</h1>
      <p>
        Voici une liste de components customs car il n'y a rien en ligne qui
        fait la job qu'on veut.
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
      <component-card :types="types.component.value" :tags="tags.ui.value">
        <template #demo>
          <div class="flex radialProgress">
            <div class="left">
              <radial-progress
                :percent="Number(radialProgressValue)"
              ></radial-progress>
            </div>
            <div class="middle">
              {{ radialProgressValue }}
            </div>
            <div class="right flexColumn">
              <span>100</span>
              <div class="rangeContainer">
                <input
                  v-model="radialProgressValue"
                  type="range"
                  min="0"
                  max="100"
                  orient="vertical"
                />
              </div>
              <span>0</span>
            </div>
          </div>
        </template>
        <template #text>
          <div>
            <h3>Radial progress bar</h3>
            <p>Un simple cercle en guise de barre de progression!</p>
            <p>
              Le component contient seulement la progress bar, vous pouvez
              ajouter un chifrre par dessus assez facilement.
            </p>
          </div>
          <a
            class="btn"
            href="/download-components/RadialProgress.vue"
            download
          >
            Télécharger le component
          </a>
        </template>
      </component-card>

      <component-card :types="types.component.value" :tags="tags.ui.value">
        <template #demo>
          <div class="bubbleContainer">
            <user-bubble name="Rob Brind'amour" :index="0"></user-bubble>
            <user-bubble name="Sebastian Aho" :index="1"></user-bubble>
            <user-bubble name="Eric Staal" :index="2"></user-bubble>
            <user-bubble name="Andrei Svechnikov" :index="3"></user-bubble>
          </div>
        </template>
        <template #text>
          <div>
            <h3>User bubbles</h3>
            <p>
              Component qui affiche une bulle avec les initiales d'un nom et qui
              les décale les uns des autres.
            </p>
            <p>
              Le component est dépendant du mixin
              <a href="/download-components/mixins/initialsFromName.js" download
                >Initiales à partir du nom</a
              >, mais il peut facilement être modifié pour prendre le texte de
              votre choix
            </p>
          </div>
          <a class="btn" href="/download-components/UserBubble.vue" download>
            Télécharger le component
          </a>
        </template>
      </component-card>

      <component-card :types="types.mixin.value" :tags="tags.text.value">
        <template #demo>
          <h3>"Rob Brind'amour" -> "RB"</h3>
        </template>
        <template #text>
          <div>
            <h3>Initiales à partir du nom</h3>
            <p>Mixin qui transforme le nom en initiales.</p>
          </div>
          <a
            class="btn"
            href="/download-components/mixins/initialsFromName.js"
            download
          >
            Télécharger le mixin
          </a>
        </template>
      </component-card>

      <component-card :types="types.mixin.value" :tags="tags.niceToHave.value">
        <template #demo>
          <img src="../assets/images/focus-trap.gif" />
        </template>
        <template #text>
          <div>
            <h3>Focus trap</h3>
            <p>
              Mixin qui trappe le focus à l'intérieur d'un élément comme un
              popin.
            </p>
          </div>
          <a
            class="btn"
            href="/download-components/mixins/focusTrap.js"
            download
          >
            Télécharger le mixin
          </a>
        </template>
      </component-card>

      <component-card :types="types.component.value" :tags="tags.ui.value">
        <template #demo>
          <button @click="popinOpened = true">Try me!</button>
        </template>
        <template #text>
          <div>
            <h3>Popin régulier</h3>
            <p>
              Component de popin régulier qui contient le mixin focusTrap.js et
              qui se ferme lorsque l'on clique à l'extérieur du popin ou que
              l'on appuie sur escape.
            </p>
            <p>
              <a href="/download-components/mixins/focusTrap.js" download>
                Télécharger la dépendence de mixin focusTrap.js
              </a>
            </p>
          </div>
          <a class="btn" href="/download-components/BasePopin.vue" download>
            Télécharger le component
          </a>
        </template>
      </component-card>
    </div>

    <base-popin
      :is-open="popinOpened"
      @closePopin="popinOpened = false"
    ></base-popin>
  </div>
</template>

<script>
import ComponentCard from '@/components/ComponentCard'
import types from '@/models/types'
import tags from '@/models/tags'
import RadialProgress from '@/static/download-components/RadialProgress'
import UserBubble from '@/static/download-components/UserBubble'
import BasePopin from '@/static/download-components/BasePoppin'

export default {
  name: 'CustomComponents',
  components: {
    RadialProgress,
    UserBubble,
    ComponentCard,
    BasePopin,
  },
  data() {
    return {
      radialProgressValue: 33,
      types,
      tags,
      typeSelect: types.all.value,
      tagSelect: tags.all.value,
      popinOpened: false,
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

.customComponents {
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
      margin-top: auto;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .flex {
      display: flex;
      justify-content: space-between;
      width: 100%;

      &.radialProgress {
        padding: rem(20);
        align-items: center;

        .left {
          width: 54%;
        }

        .right {
          width: 10%;
        }

        .rangeContainer {
          flex: 1;

          input {
            -webkit-appearance: slider-vertical;
            height: 100%;
            width: 10px;
            margin: 0 auto;
          }
        }
      }
    }

    .flexColumn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
    }

    .bubbleContainer {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
