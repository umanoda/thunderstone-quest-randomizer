<template>
  <div class="tsq-card" :class="'tsq-'+card.card_type">
    <span class="card_name">{{card.name}}</span>
    <div class="tags" v-if="card.tags.length">
      <span class="tag" v-for="tag in card.tags">
        {{ tag }}
      </span>
    </div>
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
/* tsq = Thunder Stone Quest */
.tsq-card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
  list-style-type: none;
}
.tsq-card .card_name{
  size: 1.2em;
  font-weight: bold;
}
.tsq-weapon {
  border-color: yellow;
}
.tsq-magic {
  border-color: violet;
}
.tsq-item {
  border-color: green;
}
.tsq-hero {
  border-color: blue;
}
.tsq-monster {
  border-color: red;
}
</style>
