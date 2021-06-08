/*
  À utiliser comme suit:
  1. Importer le mixin
      import focusTrap from "@/mixins/focusTrap.js"

  2. Définir le mixin dans l'objet export default
      mixins: [focusTrap],

  3. Appeler "getFocusableElements" en passant un refs en paramètre idéalement quand le component est mounted, et quand le dom à l'intérieur change
      html: <div ref="container"></div>
      js: this.getFocusableElements("container");

  4. Ajouter l'événement sur le conteneur (probablement le même qu'à l'étape 3)
      <div ref="container" @keydown.tab="focusTrap"></div>

  Le tout devrait fonctionner! Si vous avez des tabs index, assurez vous que l'ordre suive le html.
*/
export default {
  data() {
    return {
      focusableElements: null,
      firstFocusableElement: null,
      lastFocusableElement: null,
    }
  },
  methods: {
    getFocusableElements(elem) {
      this.focusableElements = this.$refs[elem].querySelectorAll(
        'button:not([style="display: none;"]), [href]:not([style="display: none;"]), input:not([style="display: none;"]), select:not([style="display: none;"]), textarea:not([style="display: none;"]), [tabindex]:not([tabindex="-1"])'
      )
      this.firstFocusableElement = this.focusableElements[0]
      this.lastFocusableElement =
        this.focusableElements[this.focusableElements.length - 1]
    },
    focusTrap(e) {
      if (e.shiftKey && document.activeElement === this.firstFocusableElement) {
        this.lastFocusableElement.focus()
        e.preventDefault()
      } else if (
        !e.shiftKey &&
        document.activeElement === this.lastFocusableElement
      ) {
        this.firstFocusableElement.focus()
        e.preventDefault()
      }
    },
  },
}
