<template>
  <div class="label-config-marcketplace">
    <div class="title-config-marcketplace">
      <slot></slot>
    </div>
    <div>
      <button v-if="!readOnly" @click="handleDecrease">
        <i class="fas fa-caret-left"></i>
      </button>
      <span style="font-weight: bold; font-size: 1.2em;">
        {{ this.numOfCards  }}
      </span>
      <button v-if="!readOnly" @click="handleIncrease">
        <i class="fas fa-caret-right"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
} from "nuxt-property-decorator";

@Component
export default class ConfigMarcketplaceInput extends Vue {
  @Prop() cardType?: string;
  @Prop() numOfCards? : number;
  @Prop() readOnly?: boolean;

  handleIncrease() {
    if (this.numOfCards === undefined) return;
    this.changeNumOfCards(this.numOfCards + 1);
  }

  handleDecrease() {
    if (this.numOfCards === undefined) return;
    this.changeNumOfCards(this.numOfCards - 1);
  }

  private changeNumOfCards(nextValue: number) {
    if (!this.cardType) return;

    if (nextValue < 0) return false;

    this.$store.dispatch("configMarcketplace/changeNumOfCards", { cardType: this.cardType, value: nextValue });
  }
}
</script>

<style>
.label-config-marcketplace {
  color: #fff;
  padding-right: 8px;
  display: inline-block;
}
.title-config-marcketplace {
  font-size: 0.8em;
}
.label-config-marcketplace button {
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
