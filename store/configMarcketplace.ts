import { RootState, ConfigMarcketplaceState } from "~/types";
import { MutationTree, ActionTree, GetterTree } from "vuex";

const state = (): ConfigMarcketplaceState => ({
  numOfWeapons: 3,
  numOfMagics: 3,
  numOfItems: 2,
  numOfAny: 0,
});

const mutations: MutationTree<ConfigMarcketplaceState> = {
  setNumOfCards(
    state: ConfigMarcketplaceState,
    next: {
      numOfWeapons: number;
      numOfMagics: number;
      numOfItems: number;
      numOfAny: number;
    }
  ): void {
    state.numOfWeapons = next.numOfWeapons;
    state.numOfMagics = next.numOfMagics;
    state.numOfItems = next.numOfItems;
    state.numOfAny = next.numOfAny;
  },
};

const actions: ActionTree<ConfigMarcketplaceState, RootState> = {
  changeNumOfCards(
    { commit, rootState, state },
    payload: {
      cardType: "weapons" | "magics" | "items";
      value: number;
    }
  ) {
    let numOfWeapons = state.numOfWeapons;
    let numOfMagics = state.numOfMagics;
    let numOfItems = state.numOfItems;
    switch (payload.cardType) {
      case "weapons":
        numOfWeapons = payload.value;
        break;
      case "magics":
        numOfMagics = payload.value;
        break;
      case "items":
        numOfItems = payload.value;
        break;
    }
    const numOfAny = 8 - numOfWeapons - numOfMagics - numOfItems;

    if (numOfAny < 0) {
      return;
    }

    commit("setNumOfCards", {
      numOfWeapons: numOfWeapons,
      numOfMagics: numOfMagics,
      numOfItems: numOfItems,
      numOfAny: numOfAny,
    });
    this.dispatch("shuffleAll");
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
