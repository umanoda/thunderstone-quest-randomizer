<template>
  <div class="section">
    <h2 class="subtitle">
      {{type}}
      <button class="button" @click="shuffle">
        <i class="fas fa-sync-alt"></i>
      </button>
    </h2>
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
    this.$store.dispatch(`${this.type.toLowerCase()}/shuffle`);
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.cards {
}
</style>
