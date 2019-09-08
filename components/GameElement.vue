<template>
  <div class="card" :class="card.card_type">
    <h3>{{card.name}}</h3>
    <span v-for="tag in card.tags" :key="tag">
      [{{tag}}]
    </span>
  </div>
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
