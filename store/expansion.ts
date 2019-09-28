import { MutationTree, GetterTree } from "vuex";
import { ExpansionState } from "~/types";

const state = (): ExpansionState => ({
  1: true,
  2: false,
  3: true,
  4: true,
  5: true,
})

const mutations: MutationTree<ExpansionState> = {
  setUse(state: ExpansionState, next: { expansionNumber: number, enable: boolean}): void {
    state[next.expansionNumber] = next.enable;
  }
};

const getters: GetterTree<ExpansionState, ExpansionState> = {
  regexp (state: ExpansionState) {
    const enables = Object.entries(state).filter(x => x[1]).map(x => x[0]).join("|");
    return new RegExp(`^#(${enables})$`);
  }
};

export default {
  namespace: true,
  state,
  mutations,
  getters
};
