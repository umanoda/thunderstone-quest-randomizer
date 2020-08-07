import { RootState, CardState, Card, EXPANTION } from "~/types";
import { MutationTree, ActionTree } from "vuex";

type SEED = "UNDEAD" | "DEMON"
type Candidate = {
  name: string;
  tags?: SEED[];
  expantion: EXPANTION;
}

const candidates : Candidate[][] = [
  [
    // #1
    { name: "Goblin Grunts", expantion: "#1"},
    { name: "Kobold Skirmishers", expantion: "#1" },
    // #2
    // #3
    { name: "Bog Zombies", tags: ["UNDEAD"], expantion: "#3" },
    { name: "Ensnaring Vines", expantion: "#3" },
    // #4
    { name: "Air Servitors", expantion: "#4" },
    { name: "Water Servitors", expantion: "#4" },
    // #5
    { name: "Gnoll Raiders", expantion: "#5" },
    { name: "Dommknighys", tags: ["UNDEAD"], expantion: "#5" },
    // #6
    { name: "Drain Dwellers", expantion: "#6" },
    { name: "Plague Rats",  expantion: "#6" },
    // #7
    { name: "Arctic Animals", expantion: "#7" },
    { name: "Abyssal Servants",  expantion: "#7" },
  ],
  [
    // #1
    { name: "Hobgoblin Brutes", expantion: "#1"},
    { name: "Spider Terror", expantion: "#1" },
    // #2
    // #3
    { name: "Moor Skeletons", tags: ["UNDEAD"] , expantion: "#3" },
    { name: "Chaos Lizards", expantion: "#3" },
    // #4
    { name: "Fire Priest", expantion: "#4"},
    { name: "Earth Priest", expantion: "#4" },
    // #5
    { name: "Minions of Chaos", tags: ["DEMON"], expantion: "#5" },
    { name: "Torments", expantion: "#5" },
    // #6
    { name: "Choulish Scavengers", tags: ["UNDEAD"], expantion: "#6" },
    { name: "Sewer Trogs",  expantion: "#6" },
    // #7
    { name: "Bloodfrost Clan", expantion: "#7" },
    { name: "Tundra Wolf Pack",  expantion: "#7" },
  ],
  [
    // #1
    { name: "Ancient Adventurers", tags: ["UNDEAD"], expantion: "#1" },
    { name: "Goblin King's Guard", expantion: "#1" },
    // #2
    // #3
    { name: "Marsh Trolls", expantion: "#3" },
    { name: "Swamp Sprits", tags: ["UNDEAD"], expantion: "#3" },
    // #4
    { name: "Abyssal Founders", expantion: "#4" },
    { name: "Divine Founders", tags: ["DEMON"], expantion: "#4" },
    // #5
    { name: "Ancient Protectors", expantion: "#5" },
    { name: "Ancient Wyrms", expantion: "#5" },
    // #6
    { name: "Shapeless Spawns", expantion: "#6" },
    { name: "Waste Wyrms",  expantion: "#6" },
    // #7
    { name: "Frozen Natives", expantion: "#7" },
    { name: "Ice Behemoths",  expantion: "#7" },
  ]
];


const state = (): CardState => ({ cards: [] })

const mutations: MutationTree<CardState> = {
    setCards(state: CardState, cards: Card[]): void {
      state.cards = cards;
    }
};

const _sample = (arr: Candidate[], level: number, expansionRegexp: RegExp): Card | null => {
    const candidates = arr.filter(enemy => enemy.expantion.match(expansionRegexp));
    const card = candidates[Math.floor(Math.random() * candidates.length)];
    if (!card) return null;
    return new Card(`Lv${level} ${card.name}`, card.tags || [], "monster", card.expantion);
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
