<template>
  <div>
    <h2>{{type}}</h2>
    <button @click="shuffle">Shuffle</button>
    <div class="cards">
      <GameElement
        v-for="s in store.cards"
        :key="s.id()"
        :card="s"
      ></GameElement>
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
    console.log(`${this.type.toLowerCase()}/shuffle`)
    this.$store.dispatch(`${this.type.toLowerCase()}/shuffle`);
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
