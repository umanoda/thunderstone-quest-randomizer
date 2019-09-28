import { MutationTree } from "vuex";
import { ExpansionState } from "~/types";

const state = (): ExpansionState => ({
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
})

const mutations: MutationTree<ExpansionState> = {
  setCards(state: ExpansionState, next: { expantionNumber: number, enable: boolean}): void {
    state[next.expantionNumber] = next.enable;
  }
};

export default {
  namespace: true,
  state,
  mutations,
};