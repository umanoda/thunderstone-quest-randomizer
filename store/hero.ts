import { CardState, Card } from "~/types";
import { MutationTree, ActionTree } from "vuex";

const candidate = {
  weapons: ["Short Sword**", "Mace**", "Long Sword**", "Halberd**", "Axe**", "Shortsear**"],
  magics: ["Fireball**", "Feature**", "Ice Needle**", "Teleport**", "Magic Weapon**"],
  items: ["Orb A**", "Orb B**", "Orb C**", "Orb D**", "Orb E**", "Orb F**"],
};


const state = (): CardState => ({ cards: [] }) 

const mutations: MutationTree<CardState> = {
    setCards(state: CardState, cards: Card[]): void {
      state.cards = cards;
    }
};

const _sample = (arr: string[]): Card => {
    const name = arr[Math.floor(Math.random() * arr.length)];
    return new Card(name, [], "hero");
};

const _shuffle = () => {
    return  [
        new Card("Hero 1**", ["HUMAN","FIGHTER"], "hero"),
        new Card("Hero 2**", ["HUMAN","MAGICIAN"], "hero"),
        new Card("Hero 3**", ["ELF","CLERIC"], "hero"),
        new Card("Hero 4**", ["HUMAN","FIGHTER","ROAGE"], "hero"),
    ];
}

const actions: ActionTree<CardState, CardState> = {
    shuffle({ commit }) {
        const cards = _shuffle();
        commit("setCards", cards);
    },
};
export default {
    namespace: true,
    state,
    mutations,
    actions,
};