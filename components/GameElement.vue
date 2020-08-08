<template>
  <div class="tsq-card" :class="'tsq-'+card.card_type">
    <span class="card_expansion">{{card.symbol()}}</span>
    <span class="card_expansion">{{card.expansion}}</span>
    <span class="card_name">{{card.name}}</span>
    <span v-if="card.tags.length">
      <span class="tag" v-for="tag in card.tags" :key="`tsq-${card.name}-${tag}`">
        {{ tag }}
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import { Card } from "~/types";

@Component({})
export default class GameElement extends Vue {
  @Prop() card!: Card
}
</script>

<style scoped>
/* tsq = Thunder Stone Quest */
.tsq-card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  padding: 8px;
  border: 2px solid #010203;
  border-radius: 5px;
  list-style-type: none;
}
.tsq-card .card_name{
  size: 1.2em;
  font-weight: bold;
}
.tsq-weapon {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f9f9f9+0,f9f9f9+66,fbdf93+100 */
background: #f9f9f9; /* Old browsers */
background: -moz-linear-gradient(top,  #f9f9f9 0%, #f9f9f9 66%, #fbdf93 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #f9f9f9 0%,#f9f9f9 66%,#fbdf93 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #f9f9f9 0%,#f9f9f9 66%,#fbdf93 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9f9f9', endColorstr='#fbdf93',GradientType=0 ); /* IE6-9 */
}
.tsq-magic {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f9f9f9+0,f9f9f9+66,ed8bc7+100 */
background: #f9f9f9; /* Old browsers */
background: -moz-linear-gradient(top,  #f9f9f9 0%, #f9f9f9 66%, #ed8bc7 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #f9f9f9 0%,#f9f9f9 66%,#ed8bc7 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #f9f9f9 0%,#f9f9f9 66%,#ed8bc7 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9f9f9', endColorstr='#ed8bc7',GradientType=0 ); /* IE6-9 */
}
.tsq-item {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f9f9f9+0,f9f9f9+66,7cd37c+100 */
background: #f9f9f9; /* Old browsers */
background: -moz-linear-gradient(top,  #f9f9f9 0%, #f9f9f9 66%, #7cd37c 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #f9f9f9 0%,#f9f9f9 66%,#7cd37c 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #f9f9f9 0%,#f9f9f9 66%,#7cd37c 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9f9f9', endColorstr='#7cd37c',GradientType=0 ); /* IE6-9 */
}
.tsq-hero {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f9f9f9+0,f9f9f9+66,6d9de0+100 */
background: #f9f9f9; /* Old browsers */
background: -moz-linear-gradient(top,  #f9f9f9 0%, #f9f9f9 66%, #6d9de0 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #f9f9f9 0%,#f9f9f9 66%,#6d9de0 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #f9f9f9 0%,#f9f9f9 66%,#6d9de0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9f9f9', endColorstr='#6d9de0',GradientType=0 ); /* IE6-9 */
}
.tsq-monster {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f9f9f9+0,f9f9f9+66,f40e1e+100 */
background: #f9f9f9; /* Old browsers */
background: -moz-linear-gradient(top,  #f9f9f9 0%, #f9f9f9 66%, #f40e1e 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #f9f9f9 0%,#f9f9f9 66%,#f40e1e 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #f9f9f9 0%,#f9f9f9 66%,#f40e1e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9f9f9', endColorstr='#f40e1e',GradientType=0 ); /* IE6-9 */
}
</style>
