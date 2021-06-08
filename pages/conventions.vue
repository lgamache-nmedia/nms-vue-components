<template>
  <div class="conventions wrapper">
    <div class="text text-small">
      <h1>Conventions</h1>
      <p>
        Voici quelques conventions qui ne sont pas explicites sur le
        <a href="https://vuejs.org/v2/style-guide/index.html" target="_blank"
          >site de Vue</a
        >
      </p>
      <h2>En quoi consiste un component</h2>
      <p>
        Un component regroupe des éléments HTML qui fonctionnent entre eux. Par
        exemple, une bannière d'accueil. Il peut aussi regrouper un seul élément
        s'il y a une logique derrière cet élément.
      </p>
      <p>
        Il est inutile de créer un component pour n'avoir au final qu'un seul
        élément HTML. Prenons un bouton comme exemple. Il serait mieux
        d'utiliser directement le HTML, et de le styliser dans le main.scss.
        Pour les formulaires, je pense qu'il serait idéal de mettre les styles
        pour les inputs dans un fichier scss à part, et de l'importer seulement
        lorsque nous en avons de besoin.
      </p>

      <h2>Les propriétés des components</h2>
      <p>
        Dans un component Vue, il y a trois types de données. Les props, le data
        et les slots. Ce n'est pas une convention standard, mais j'aime bien me
        dire que:
      </p>
      <ul>
        <li>
          Data: pour les valeurs qui n'ont pas besoin d'être transmises par le
          parent. (ex: l'état ouvert ou fermé d'un popin)
        </li>
        <li>
          Props: pour les valeurs qui font fonctionner le component et qui
          doivent êtres transmises par le parent. (ex: le paramètre de couleur
          d'un component)
        </li>
        <li>
          Slots: pour tout ce qui est texte/contenu dans un component. (ex: le
          titre d'un produit dans une liste)
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Conventions',
}
</script>

<style></style>
