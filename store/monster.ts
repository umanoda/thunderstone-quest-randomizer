import { RootState, CardState, Card, EXPANSION } from "~/types";
import { MutationTree, ActionTree } from "vuex";

type SEED = "UNDEAD" | "DEMON";
type Candidate = {
  name: string;
  tags?: SEED[];
  expansion: EXPANSION;
};

const candidates: Candidate[][] = [
  [
    // #1
    {
      name: "Goblin Grunts",
      expansion: "#1",
    },
    {
      name: "Kobold Skirmishers",
      expansion: "#1",
    },
    // #2
    {
      name: "Goblin Grunts",
      expansion: "#2",
    },
    {
      name: "Twisted Creatures",
      expansion: "#2",
    },
    {
      name: "Woodland Sprites",
      expansion: "#2",
    },
    // #3
    {
      name: "Bog Zombies",
      tags: ["UNDEAD"],
      expansion: "#3",
    },
    {
      name: "Ensnaring Vines",
      expansion: "#3",
    },
    // #4
    {
      name: "Air Servitors",
      expansion: "#4",
    },
    {
      name: "Water Servitors",
      expansion: "#4",
    },
    // #5
    {
      name: "Gnoll Raiders",
      expansion: "#5",
    },
    {
      name: "Dommknighys",
      tags: ["UNDEAD"],
      expansion: "#5",
    },
    // #6
    {
      name: "Drain Dwellers",
      expansion: "#6",
    },
    {
      name: "Plague Rats",
      expansion: "#6",
    },
    // #7
    {
      name: "Arctic Animals",
      expansion: "#7",
    },
    {
      name: "Abyssal Servants",
      expansion: "#7",
    },
    // #8
    { name: "Beetle Bevy", expansion: "#8" },
    { name: "Desert Dwellers",  expansion: "#8" },
    // #9
    { name: "Material Spirits", expansion: "#9" },
    { name: "Mystical Kobolds",  expansion: "#9" },
    // #10
    { name: "Bloodthirsty Beasts", expansion: "#10" },
    { name: "Possessed Objects",  expansion: "#10" },
    // #11
    { name: "Possessed Protagonists", expansion: "#11" },
    { name: "Treacherous Turncoats",  expansion: "#11" },
    // #12
    { name: "Flowering Fauna", expansion: "#12" },
    { name: "Mutant Beasties", expansion: "#12" },
    // #13
    { name: "Army Ants", expansion: "#13" },
    { name: "Birds and Creatures", expansion: "#13" },
    // #14
    { name: "Brigands", expansion: "#14" },
    { name: "House of Klubba", expansion: "#14" },
    // #15
    { name: "Halfling Mystics", expansion: "#15" },
    { name: "Jungle Threats", expansion: "#15" },
  ],
  [
    // #1
    {
      name: "Hobgoblin Brutes",
      expansion: "#1",
    },
    {
      name: "Spider Terror",
      expansion: "#1",
    },
    // #2
    {
      name: "Foundational Keepers",
      expansion: "#2",
    },
    {
      name: "Corrupted Elves",
      expansion: "#2",
    },
    // #3
    {
      name: "Moor Skeletons",
      tags: ["UNDEAD"],
      expansion: "#3",
    },
    {
      name: "Chaos Lizards",
      expansion: "#3",
    },
    // #4
    {
      name: "Fire Priest",
      expansion: "#4",
    },
    {
      name: "Earth Priest",
      expansion: "#4",
    },
    // #5
    {
      name: "Minions of Chaos",
      tags: ["DEMON"],
      expansion: "#5",
    },
    {
      name: "Torments",
      expansion: "#5",
    },
    // #6
    {
      name: "Choulish Scavengers",
      tags: ["UNDEAD"],
      expansion: "#6",
    },
    {
      name: "Sewer Trogs",
      expansion: "#6",
    },
    // #7
    { name: "Bloodfrost Clan", expansion: "#7" },
    { name: "Tundra Wolf Pack",  expansion: "#7" },
    // #8
    { name: "Naga Nomads", expansion: "#8" },
    { name: "Sand Spirits",  expansion: "#8" },
    // #9
    { name: "C.C.O.V Gang", expansion: "#9" },
    { name: "Gremlins",  expansion: "#9" },
    // #10
    { name: "Enthralled Villagers", expansion: "#10" },
    { name: "Fearsome Phantasms",  expansion: "#10" },
    // #11
    { name: "Orcish Allies", expansion: "#11" },
    { name: "Resurrected Remnants",  expansion: "#11" },
    // #12
    { name: "Elven Rebels", expansion: "#12" },
    { name: "Troll Ruffians", expansion: "#12" },
    // #13
    { name: "Diminutive Druids", expansion: "#13" },
    { name: "Tree Spirits", expansion: "#13" },
    // #14
    { name: "Murderous Mermaids", expansion: "#14" },
    { name: "Queen's Crew", expansion: "#14" },
    // #15
    { name: "Explorer Ghosts", expansion: "#15" },
    { name: "Tribal Elves", expansion: "#15" },
  ],
  [
    // #1
    {
      name: "Ancient Adventurers",
      tags: ["UNDEAD"],
      expansion: "#1",
    },
    {
      name: "Goblin King's Guard",
      expansion: "#1",
    },
    // #2
    {
      name: "Corrupted Centaurs",
      expansion: "#2",
    },
    {
      name: "Treefolk",
      expansion: "#2",
    },
    // #3
    {
      name: "Marsh Trolls",
      expansion: "#3",
    },
    {
      name: "Swamp Sprits",
      tags: ["UNDEAD"],
      expansion: "#3",
    },
    // #4
    {
      name: "Abyssal Founders",
      expansion: "#4",
    },
    {
      name: "Divine Founders",
      tags: ["DEMON"],
      expansion: "#4",
    },
    // #5
    {
      name: "Ancient Protectors",
      expansion: "#5",
    },
    {
      name: "Ancient Wyrms",
      expansion: "#5",
    },
    // #6
    {
      name: "Shapeless Spawns",
      expansion: "#6",
    },
    {
      name: "Waste Wyrms",
      expansion: "#6",
    },
    // #7
    { name: "Frozen Natives", expansion: "#7" },
    { name: "Ice Behemoths",  expansion: "#7" },
    // #8
    { name: "Arid Atrocities", expansion: "#8" },
    { name: "Amtephetes's Forces",  expansion: "#8" },
    // #9
    { name: "Automatons", expansion: "#9" },
    { name: "Mech Menaces",  expansion: "#9" },
    // #10
    { name: "Lost Lycanthropes", expansion: "#10" },
    { name: "Vicious Vampires",  expansion: "#10" },
    // #11
    { name: "Rift Natives", expansion: "#11" },
    { name: "Scion Invaders",  expansion: "#11" },
    // #12
    { name: "Ent Army", expansion: "#12" },
    { name: "The Consumed", expansion: "#12" },
    // #13
    { name: "Fiendish Fairies", expansion: "#13" },
    { name: "Mushroom Herd", expansion: "#13" },
    // #14
    { name: "Ghost Ship", expansion: "#14" },
    { name: "Sea Creatures", expansion: "#14" },
    // #15
    { name: "Celestial Half-Breeds", expansion: "#15" },
    { name: "Lava Dwarves", expansion: "#15" },
  ]
];

const state = (): CardState => ({
  cards: [],
});

const mutations: MutationTree<CardState> = {
  setCards(state: CardState, cards: Card[]): void {
    state.cards = cards;
  },
};

const _sample = (arr: Candidate[], level: number, expansionRegexp: RegExp): Card | null => {
  const candidates = arr.filter((enemy) => enemy.expansion.match(expansionRegexp));
  const card = candidates[Math.floor(Math.random() * candidates.length)];
  if (!card) return null;
  return new Card(`Lv${level} ${card.name}`, card.tags || [], "monster", card.expansion);
};

const _shuffle = (expansionRegexp: RegExp) => {
  return [_sample(candidates[0], 1, expansionRegexp), _sample(candidates[1], 2, expansionRegexp), _sample(candidates[2], 3, expansionRegexp)].filter(
    (elm) => !!elm
  );
};

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
