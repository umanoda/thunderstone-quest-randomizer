import { CardState, Card } from "~/types";
import { MutationTree, ActionTree } from "vuex";

type Candidate = {
  name: string;
  tags?: string[];
}

const candidates : Candidate[][] = [
  [
    { name: "AIR SERVITOR", tags: ["ELEMENTAL"] },
    { name: "BLACK ROCKBANDIT", tags: ["HUMANOID"] },
    { name: "BOG ZOMBIE", tags: ["UNDEAD"] },
    { name: "DOOMKNIGHT", tags: ["UNDEAD "] },
    { name: "ENSNARING", tags: ["VINEPLANT"] },
    { name: "GOBLIN GRUNT", tags: ["HUMANOID"] },
    { name: "KOBOLD SKIRMISHER", tags: ["HUMANOID"] },
    { name: "GNOLL RAIDER", tags: ["HUMANOID"] },
    { name: "TWISTED CREATURE", tags: ["BEAST "] },
    { name: "WOODLAND SPRITE", tags: ["FEY"] },
    { name: "WATER SERVITOR", tags: ["ELEMENTAL"] },
  ],
  [
    { name: "CHAOS LIZARDH", tags: ["UMANOID"] },
    { name: "CORRUPTED ELF" },
    { name: "ELEMENTAL", tags: ["TORMENT"] },
    { name: "FIRE SERVITOR" },
    { name: "FOUNDATIONAL", tags: ["HUMANOID・KEEPER・ELEMENTAL・GIANT"] },
    { name: "HOBGOBLINBRUTE", tags: ["HUMANOID"] },
    { name: "SPIDER VERMIN TERROR", tags: ["GIANT"] },
    { name: "MINION OF CHAOS", tags: ["DEMON"] },
    { name: "MOORSKELETON", tags: ["UNDEAD"] },
  ],
  [
    { name: "ABYSSALFOUNDER", tags: ["ELEMIENTAL","DEMON"] },
    { name: "ANCIENT ADVENTURER", tags: ["UNDEAD"] },
    { name: "CORRUPTEDCENTAUR", tags: ["BEAST","HUMANOID"] },
    { name: "DIVINE FOUNDERE", tags: ["LEMENTAL","CELESTIAL"] },
    { name: "GOBLIN KING'S", tags: ["GUARDHUMANOID"] },
    { name: "GOLEM ANCIENT PROTECTOR" },
    { name: "MARSH TROLL", tags: ["GIANT"] },
    { name: "SWANP SPIRIT", tags: ["UNDEAD"] },
    { name: "TREEFOLK", tags: ["GIANT", "PLANT"]},
  ]
];


const state = (): CardState => ({ cards: [] })

const mutations: MutationTree<CardState> = {
    setCards(state: CardState, cards: Card[]): void {
      state.cards = cards;
    }
};

const _sample = (arr: Candidate[]): Card => {
    const card = arr[Math.floor(Math.random() * arr.length)];
    return new Card(card.name, card.tags || [], "monster");
};

const _shuffle = () => {
    return [
        _sample(candidates[0]),
        _sample(candidates[1]),
        _sample(candidates[2]),
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
