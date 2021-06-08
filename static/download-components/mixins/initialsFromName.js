/*
  À utiliser comme suit:
  1. Importer le mixin
      import initialsFromName from "@/mixins/initialsFromName.js"

  2. Définir le mixin dans l'objet export default
      mixins: [initialsFromName],

  3. Il ne reste qu'à l'utiliser comme une méthode en appelant getInitials(name)!
*/
export default {
  methods: {
    getInitials(name) {
      if (name) {
        const initials = name.split(' ')
        initials.splice(1, initials.length - 2)
        return initials.map((n) => n[0]).join('')
      }
    },
  },
}
