import { ActionTree } from "vuex";
import { RootState } from '~/types';
import hero from "./hero";
import marcketplace from "./marcketplace";
import configMarcketplace from "./configMarcketplace"
import monster from "./monster";
import expansion from "./expansion"

export const modules = { hero, marcketplace, monster, expansion, configMarcketplace };
export const actions: ActionTree<RootState, RootState> = {
  shuffleAll({dispatch}){
    dispatch("hero/shuffle");
    dispatch("marcketplace/shuffle");
    dispatch("monster/shuffle");
  }
}
