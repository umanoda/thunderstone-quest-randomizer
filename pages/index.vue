<template>
  <section>
    <h1 class="title header">Thunderstone QUEST : informal randamizer</h1>

    <div class="container">
      <SelectExpansion />
      <button class="button" @click="shuffleAll">
        <i class="fas fa-sync-alt">ALL</i>
      </button>
    </div>

    <div class="container">
      <RandomSetup :store="marcketplace" type="Marcketplace" />
      <RandomSetup :store="hero" type="Hero" />
      <RandomSetup :store="monster" type="Monster" />
    </div>
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
import SelectExpansion from "~/components/SelectExpansion.vue"

@Component({
  components: {
    GameElement,
    RandomSetup,
    SelectExpansion
  }
})
export default class extends Vue {
  @State hero!: Card;
  @State marcketplace!: Card;
  @State monster!: Card;
  @State expansion: any;

  mounted(){
    this.shuffleAll();
  }

  shuffleAll(){
    this.$store.dispatch("shuffleAll");
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.checkbox {
  display: block;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
