import { CardState, Card } from "~/types";
import { MutationTree, ActionTree } from "vuex";

const candidate = [
  ["Goblin**", "Animal**", "Cobold**", "Nature Trap**"],
  ["Spider**", "Bandet**", "Deamon**", "Gigant**", "Trent**"],
  ["Dragon**", "Raice**", "Great Deamon**", "Forgat Gods**"],
];


const state = (): CardState => ({ cards: [] }) 

const mutations: MutationTree<CardState> = {
    setCards(state: CardState, cards: Card[]): void {
      state.cards = cards;
    }
};

const _sample = (arr: string[]): Card => {
    const name = arr[Math.floor(Math.random() * arr.length)];
    return new Card(name, [], "monster");
};

const _shuffle = () => {
    return [
        _sample(candidate[0]),
        _sample(candidate[1]),
        _sample(candidate[2]),
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