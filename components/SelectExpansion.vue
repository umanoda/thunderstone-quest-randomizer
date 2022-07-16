<template>
    <div>
      <h2 class="subtitle">Select Expantions</h2>

      <div style="margin-top: 8px">
        <button class="button" @click="checkAllCheckbox">
          <i class="far fa-check-square"></i>
        </button>
        <button class="button" @click="uncheckAllCheckbox">
          <i class="far fa-square"></i>
        </button>
      </div>

      <ExpansionCheckbox :expansion=1 />
      <ExpansionCheckbox :expansion=2 />
      <ExpansionCheckbox :expansion=3 />
      <ExpansionCheckbox :expansion=4 />
      <ExpansionCheckbox :expansion=5 />
      <ExpansionCheckbox :expansion=6 />
      <ExpansionCheckbox :expansion=7 />
      <ExpansionCheckbox :expansion=8 />
      <ExpansionCheckbox :expansion=9 />
      <ExpansionCheckbox :expansion=10 />
      <ExpansionCheckbox :expansion=11 />
    </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
} from "nuxt-property-decorator"
import ExpansionCheckbox from './ExpansionCheckbox.vue';

@Component({
  components: { ExpansionCheckbox },
})
export default class SelectExpansion extends Vue {
  setAllCheckbox(val: boolean): void {
    this.$store.dispatch("expansion/changeAllUseExpansion", { enable: val });
  }

  checkAllCheckbox(): void {
    if(this.isAllCheckbox(true)) return;
    this.setAllCheckbox(true);
  }

  uncheckAllCheckbox(): void {
    if(this.isAllCheckbox(false)) return;
    this.setAllCheckbox(false);
  }

  private isAllCheckbox(val: boolean) {
    for (let k in this.$store.state.expansion) {
      if(this.$store.state.expansion[k] !== val) return false;
    }
    return true;
  }
}
</script>
