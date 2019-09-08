<template>
  <div>
    <h2>{{type}}</h2>
    <button @click="shuffle">Shuffle</button>
    <div class="cards">
      <ul>
        <GameElement
          v-for="s in store.cards"
          :key="s.id()"
          :card="s"
        ></GameElement>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"
import { Card, CardStore } from "~/types";
import GameElement from "~/components/GameElement.vue"

@Component({
  components: {
    GameElement
  }
})
export default class extends Vue {
  @Prop() store!: CardStore;
  @Prop() type!: string;

  shuffle() {
    this.$store.dispatch(`${this.type.toLowerCase()}/shuffle`);
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
