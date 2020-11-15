<template>
  <label class="checkbox is-block">
    <input
      type="checkbox"
      :checked="checked"
      :disabled="isForce"
      @click="handleChange"/>
      <span class="symbol">{{symbol($props.expansion)}}</span>
      <span>{{title($props.expansion)}}</span>
    <slot />
  </label>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
} from "nuxt-property-decorator"

@Component
export default class ExpansionCheckbox extends Vue {
  @Prop() expansion?: number;
  @Prop() force?: boolean;

  get isForce() {
    return this.$props.force !== undefined;
  }

  get checked() {
    if(this.isForce) return this.$props.force;

    return this.$store.state.expansion[this.$props.expansion];
  }

  handleChange(val: any, val2: any) {
    this.$store.dispatch("expansion/changeUseExpansion", {expansionNumber: this.$props.expansion, enable: !this.checked})
  }

  title(expansionNum: number) {
    const expansionMetadata = this.$metadatas.expansion[expansionNum]
    return `#${this.expansion} ${expansionMetadata.title}`;
  }

  symbol(expansionNum: number) {
    const expansionMetadata = this.$metadatas.expansion[expansionNum]
    return expansionMetadata.symbol;
  }
}
</script>

<style>
.checkbox {
  padding-right: 8px;
  color: rgb(243,235,235);
}
.symbol {
  width: 1.5em;
  display: inline-block;
  margin-left: 4px;
}
.checkbox:hover {
  color: gray;
}
</style>
