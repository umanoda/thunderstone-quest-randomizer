<template>
    <div style="padding-top: 4px;">
      <ConfigMarcketplaceInput cardType="weapons" :numOfCards="numOfWeapons">
        Weapon
      </ConfigMarcketplaceInput>
      <ConfigMarcketplaceInput cardType="magics" :numOfCards="numOfMagics">
        Magic
      </ConfigMarcketplaceInput>
      <ConfigMarcketplaceInput cardType="items" :numOfCards="numOfItems">
        Item
      </ConfigMarcketplaceInput>
      <ConfigMarcketplaceInput cardType="any" :readOnly=true :numOfCards="numOfAny">
        Random
      </ConfigMarcketplaceInput>
    </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
} from "nuxt-property-decorator"
import { mapState } from "vuex";

import ConfigMarcketplaceInput from './ConfigMarcketplaceInput.vue';

@Component({
  components: { ConfigMarcketplaceInput },
  computed: {
    ...mapState("configMarcketplace", ["numOfWeapons", "numOfMagics", "numOfItems", "numOfAny"])
  },
})
export default class ConfigMarcketplace extends Vue {
  numOfWeapons?: number;
  numOfMagics?: number;
  numOfItems?: number;
  numOfAny?: number;
}
</script>
