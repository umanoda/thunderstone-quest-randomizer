import { MutationTree, ActionTree, GetterTree } from "vuex";
import { ExpansionState,RootState } from "~/types";

const state = (): ExpansionState => ({
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
})

const mutations: MutationTree<ExpansionState> = {
  setUse(state: ExpansionState, next: { expansionNumber: number, enable: boolean}): void {
    state[next.expansionNumber] = next.enable;
  }
};

const actions: ActionTree<ExpansionState, RootState> = {
  changeUseExpansion({ commit, rootState }, payload: { expansionNumber: number, enable: boolean}) {
    commit("setUse", { expansionNumber: payload.expansionNumber, enable: payload.enable });
    this.dispatch("shuffleAll");
  },
};

const getters: GetterTree<ExpansionState, ExpansionState> = {
  regexp (state: ExpansionState) {
    const enables = Object.entries(state).filter(x => x[1]).map(x => x[0]).join("|");
    return new RegExp(`^#(${enables})$`);
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters
};
