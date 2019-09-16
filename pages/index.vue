<template>
  <section>
    <h1 class="title header">Thunderstone QUEST : informal randamizer</h1>

    <button class="button" @click="shuffleAll">
      <i class="fas fa-sync-alt">ALL</i>
    </button>

    <RandomSetup :store="marcketplace" type="Marcketplace"></RandomSetup>
    <RandomSetup :store="hero" type="Hero"></RandomSetup>
    <RandomSetup :store="monster" type="Monster"></RandomSetup>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import { Card } from "~/types";
import GameElement from "~/components/GameElement.vue"
import RandomSetup from "~/components/RandomSetup.vue"

@Component({
  components: {
    GameElement,
    RandomSetup
  }
})
export default class extends Vue {
  @State hero!: Card;
  @State marcketplace!: Card;
  @State monster!: Card;

  mounted(){
    this.shuffleAll();
  }

  shuffleAll(){
    this.$store.dispatch("hero/shuffle");
    this.$store.dispatch("marcketplace/shuffle");
    this.$store.dispatch("monster/shuffle");
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
