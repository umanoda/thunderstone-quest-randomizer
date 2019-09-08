<template>
  <li class="card" :class="card.card_type">
    <span class="title">{{card.name}}</span>
    <div class="tag">
      <span v-for="tag in card.tags" :key="tag">
        [{{tag}}]
      </span>
    </div>
  </li>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import { Card } from "~/types";

@Component({})
export default class GameElement extends Vue {
  @Prop() card!: Card
}
</script>

<style scoped>
.card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
  list-style-type: none;
}
.card .title{
  size: 1.2em;
  font-weight: bold;
}
.weapon {
  border-color: yellow;
}
.magic {
  border-color: violet;
}
.item {
  border-color: green;
}
.hero {
  border-color: blue;
}
.monster {
  border-color: red;
}
</style>
