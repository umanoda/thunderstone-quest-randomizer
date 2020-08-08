<template>
  <section>
    <h1 class="title header">Thunderstone QUEST : informal randamizer</h1>

    <div class="container">
      <SelectExpansion />
      <button class="button" @click="shuffleAll">
        <i class="fas fa-sync-alt">ALL</i>
      </button>
      <button class="button" @click="copyToClipboard">
        <span style="padding-right: 4px">Copy to clipboard</span>
        <i class="fas fa-copy"></i>
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
import { CardState } from "~/types";
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
  @State hero!: CardState;
  @State marcketplace!: CardState;
  @State monster!: CardState;
  @State expansion: any;

  mounted(){
    this.shuffleAll();
  }

  shuffleAll(){
    this.$store.dispatch("shuffleAll");
  }

  copyToClipboard(){
    let str = "";
    const tmp = document.createElement("div"),
          pre = document.createElement('pre');
    if (this.hero == null || this.marcketplace == null || this.monster == null) {
      return;
    }

    // does not copy when parent elements user-select: none
    pre.style.webkitUserSelect = 'auto';
    pre.style.userSelect = 'auto';

    str += "Marcketplace\n"
    this.marcketplace.cards.forEach(card => str += `${card.symbol()} ${card.expansion} ${card.name}\n`);
    str += "Hero\n"
    this.hero.cards.forEach(card => str += `${card.symbol()} ${card.expansion} ${card.name}\n`);
    str += "Monster\n"
    this.monster.cards.forEach(card => str += `${card.symbol()} ${card.expansion} ${card.name}\n`);
    tmp.appendChild(pre).textContent = str;

    // hide tmp element
    const s = tmp.style;
    s.position = 'fixed';
    s.right = '200%';

    // add body
    document.body.appendChild(tmp);
    // select element
    const selection = document.getSelection();
    if (selection != null) {
      selection.selectAllChildren(tmp);
    }

    // copy to clipboard
    var result = document.execCommand("copy");

    // remove tempolary element
    document.body.removeChild(tmp);
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
