import { MutationTree, ActionTree, GetterTree } from "vuex";
import { ExpansionState, RootState } from "~/types";

const state = (): ExpansionState => ({
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
});

const mutations: MutationTree<ExpansionState> = {
  setUse(
    state: ExpansionState,
    next: {
      expansionNumber: number;
      enable: boolean;
    }
  ): void {
    state[next.expansionNumber] = next.enable;
  },
  setAllUse(state: ExpansionState, next: { enable: boolean }): void {
    for (const expansionNumber in state) {
      state[expansionNumber] = next.enable;
    }
  },
};

const actions: ActionTree<ExpansionState, RootState> = {
  changeUseExpansion(
    { commit },
    payload: {
      expansionNumber: number;
      enable: boolean;
    }
  ) {
    commit("setUse", {
      expansionNumber: payload.expansionNumber,
      enable: payload.enable,
    });
    this.dispatch("shuffleAll");
  },
  changeAllUseExpansion(
    { commit },
    payload: {
      enable: boolean;
    }
  ) {
    commit("setAllUse", {
      enable: payload.enable,
    });
    this.dispatch("shuffleAll");
  },
};

const getters: GetterTree<ExpansionState, ExpansionState> = {
  regexp(state: ExpansionState) {
    const enables = Object.entries(state)
      .filter((x) => x[1])
      .map((x) => x[0])
      .join("|");
    return new RegExp(`^#(${enables})$`);
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters,
};
