import { CardState, Card, CARD_TYPE } from "~/types";
import { MutationTree, ActionTree } from "vuex";

const candidate = {
  weapon: ["Short Sword**", "Mace**", "Long Sword**", "Halberd**", "Axe**", "Shortsear**"],
  magic: ["Fireball**", "Feature**", "Ice Needle**", "Teleport**", "Magic Weapon**"],
  item: ["Orb A**", "Orb B**", "Orb C**", "Orb D**", "Orb E**", "Orb F**"],
};


const state = (): CardState => ({ cards: [] }) 

const mutations: MutationTree<CardState> = {
    setCards(state: CardState, cards: Card[]): void {
        state.cards = cards;
    }
};

const _sample = (arr: string[], card_type: CARD_TYPE): Card => {
    const get_index = Math.floor(Math.random() * arr.length) 
    const name = arr[get_index];
    arr.splice(get_index, 1)
    return new Card(name, [], card_type);
};

const _shuffle = (card_type: "weapon" | "magic" | "item", draw_num: number) => {
    let temp_candidate = Array.from(candidate[card_type]);
    let cards = []
    for(let i = 0;  i < draw_num; i++) {
        cards.push(_sample(temp_candidate, card_type));
    }
    return  cards;
}

const actions: ActionTree<CardState, CardState> = {
    shuffle({ commit }) {
        const weapons: Card[] = _shuffle("weapon", 3);
        const magics: Card[] = _shuffle("magic", 3);
        const items: Card[] = _shuffle("item", 2);

        commit("setCards", [...weapons, ...magics, ...items]);
    },
};
export default {
    namespace: true,
    state,
    mutations,
    actions,
};