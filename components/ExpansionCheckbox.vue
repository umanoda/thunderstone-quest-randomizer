<template>
  <label class="checkbox">
    <input
      type="checkbox"
      :checked="checked"
      :disabled="isForce"
      @click="handleChange"/>
    <span>#{{$props.expansion}}</span>
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
  checked?: boolean;

  get isForce() {
    return this.$props.force !== undefined;
  }

  created() {
    if(this.isForce) {
      this.checked = this.$props.force;
    } else {
      this.checked = this.$store.state.expansion[this.$props.expansion]
    }
  }

  handleChange(val: any, val2: any) {
    this.checked = !this.checked
    this.$store.commit("expansion/setUse", {expansionNumber: this.$props.expansion, enable: this.checked})
  }
}
</script>
