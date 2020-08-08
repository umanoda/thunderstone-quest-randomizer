<template>
    <div>
      <h2 class="subtitle">Select Expantions</h2>
      <ExpansionCheckbox :expansion=1 />
      <ExpansionCheckbox :expansion=2 />
      <ExpansionCheckbox :expansion=3 />
      <ExpansionCheckbox :expansion=4 />
      <ExpansionCheckbox :expansion=5 />
      <ExpansionCheckbox :expansion=6 />
      <ExpansionCheckbox :expansion=7 />
      <ExpansionCheckbox :expansion=8 />
      <ExpansionCheckbox :expansion=9 />
    </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
} from "nuxt-property-decorator"
import ExpansionCheckbox from './ExpansionCheckbox.vue';

@Component({
  components: { ExpansionCheckbox }
})
export default class extends Vue {
}
</script>
