import { Plugin } from '@nuxt/types'

type tExpansionMetadata = {
  title: string,
  symbol: string,
};

type tExpansionMetadatas = {
  [key: number]: tExpansionMetadata,
};

export const expansionMetadatas: tExpansionMetadatas = {
  1: { title: "A mirror in the Dark ", symbol: "💏"},
  2: { title: "Total Eclipse of the Sun", symbol: "🌜"},
  3: { title: "Risen from the Mire", symbol: "➕"},
  4: { title: "At the Foundations of the World", symbol: "🌲"},
  5: { title: "Ripples in Time", symbol: "🌀"},
  6: { title: "What Lies Beneath", symbol: "🚇"},
  7: { title: "Frozen in Time", symbol: "❄"},
  8: { title: "Vengeful Sands", symbol: "🏜️"},
  9: { title: "Clockwork Destiny", symbol: "⌛"},
}

declare module 'vue/types/vue' {
  interface Vue {
    $metadatas: { expansion: tExpansionMetadatas }
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $metadatas: { expansion: tExpansionMetadatas }
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $metadatas: { expansion: tExpansionMetadatas }
  }
}

const tsqPlugin: Plugin = (context: any, inject: any) => {
  const metadatas = {
    expansion: expansionMetadatas,
  };
  inject('metadatas', metadatas);
}

export default tsqPlugin;
