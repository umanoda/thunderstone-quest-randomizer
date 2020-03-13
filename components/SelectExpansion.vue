<template>
    <div>
      <h2 class="subtitle">Select Expantions</h2>
      <ExpansionCheckbox :expansion=1 :force=true>A mirror in the Dark</ExpansionCheckbox>
      <ExpansionCheckbox :expansion=2 :force=false>Total Eclipse of the Sun</ExpansionCheckbox>
      <ExpansionCheckbox :expansion=3>Risen from Mire</ExpansionCheckbox>
      <ExpansionCheckbox :expansion=4>At the Foundations of the World</ExpansionCheckbox>
      <ExpansionCheckbox :expansion=5>Ripples in Time</ExpansionCheckbox>
      <ExpansionCheckbox :expansion=6>What Lies Beneath</ExpansionCheckbox>
      <ExpansionCheckbox :expansion=7>Frozen in Time</ExpansionCheckbox>
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
