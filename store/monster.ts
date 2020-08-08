import { RootState, CardState, Card, EXPANSION } from "~/types";
import { MutationTree, ActionTree } from "vuex";

type SEED = "UNDEAD" | "DEMON"
type Candidate = {
  name: string;
  tags?: SEED[];
  expansion: EXPANSION;
}

const candidates : Candidate[][] = [
  [
    // #1
    { name: "Goblin Grunts", expansion: "#1"},
    { name: "Kobold Skirmishers", expansion: "#1" },
    // #2
    // #3
    { name: "Bog Zombies", tags: ["UNDEAD"], expansion: "#3" },
    { name: "Ensnaring Vines", expansion: "#3" },
    // #4
    { name: "Air Servitors", expansion: "#4" },
    { name: "Water Servitors", expansion: "#4" },
    // #5
    { name: "Gnoll Raiders", expansion: "#5" },
    { name: "Dommknighys", tags: ["UNDEAD"], expansion: "#5" },
    // #6
    { name: "Drain Dwellers", expansion: "#6" },
    { name: "Plague Rats",  expansion: "#6" },
    // #7
    { name: "Arctic Animals", expansion: "#7" },
    { name: "Abyssal Servants",  expansion: "#7" },
  ],
  [
    // #1
    { name: "Hobgoblin Brutes", expansion: "#1"},
    { name: "Spider Terror", expansion: "#1" },
    // #2
    // #3
    { name: "Moor Skeletons", tags: ["UNDEAD"] , expansion: "#3" },
    { name: "Chaos Lizards", expansion: "#3" },
    // #4
    { name: "Fire Priest", expansion: "#4"},
    { name: "Earth Priest", expansion: "#4" },
    // #5
    { name: "Minions of Chaos", tags: ["DEMON"], expansion: "#5" },
    { name: "Torments", expansion: "#5" },
    // #6
    { name: "Choulish Scavengers", tags: ["UNDEAD"], expansion: "#6" },
    { name: "Sewer Trogs",  expansion: "#6" },
    // #7
    { name: "Bloodfrost Clan", expansion: "#7" },
    { name: "Tundra Wolf Pack",  expansion: "#7" },
  ],
  [
    // #1
    { name: "Ancient Adventurers", tags: ["UNDEAD"], expansion: "#1" },
    { name: "Goblin King's Guard", expansion: "#1" },
    // #2
    // #3
    { name: "Marsh Trolls", expansion: "#3" },
    { name: "Swamp Sprits", tags: ["UNDEAD"], expansion: "#3" },
    // #4
    { name: "Abyssal Founders", expansion: "#4" },
    { name: "Divine Founders", tags: ["DEMON"], expansion: "#4" },
    // #5
    { name: "Ancient Protectors", expansion: "#5" },
    { name: "Ancient Wyrms", expansion: "#5" },
    // #6
    { name: "Shapeless Spawns", expansion: "#6" },
    { name: "Waste Wyrms",  expansion: "#6" },
    // #7
    { name: "Frozen Natives", expansion: "#7" },
    { name: "Ice Behemoths",  expansion: "#7" },
  ]
];


const state = (): CardState => ({ cards: [] })

const mutations: MutationTree<CardState> = {
    setCards(state: CardState, cards: Card[]): void {
      state.cards = cards;
    }
};

const _sample = (arr: Candidate[], level: number, expansionRegexp: RegExp): Card | null => {
    const candidates = arr.filter(enemy => enemy.expansion.match(expansionRegexp));
    const card = candidates[Math.floor(Math.random() * candidates.length)];
    if (!card) return null;
    return new Card(`Lv${level} ${card.name}`, card.tags || [], "monster", card.expansion);
};

const _shuffle = (expansionRegexp: RegExp) => {
    return [
        _sample(candidates[0], 1, expansionRegexp),
        _sample(candidates[1], 2, expansionRegexp),
        _sample(candidates[2], 3, expansionRegexp),
    ].filter(elm => !!elm);
}

const actions: ActionTree<CardState, RootState> = {
  shuffle({ commit, rootGetters }) {
    const expansionRegexp = rootGetters["expansion/regexp"];
    const cards = _shuffle(expansionRegexp);
    commit("setCards", cards);
  },
};
export default {
    namespace: true,
    state,
    mutations,
    actions,
};
