import { RootState, CardState, Card, CARD_TYPE, EXPANTION } from "~/types";
import { MutationTree, ActionTree } from "vuex";
type ITEM_TYPE = "weapon" | "magic" | "item";
type Candidate = {
  name: string;
  expantion: EXPANTION;
}

const candidate: {[k in ITEM_TYPE]:Candidate[]} = {
  weapon: [
    // #1
    { name: "Hummer", expantion: "#1" },
    { name: "Maul", expantion: "#1" },
    { name: "Shortbow", expantion: "#1" },
    { name: "Shortsword", expantion: "#1" },
    { name: "Shortspear", expantion: "#1" },
    // #2
    // #3
    { name: "Battle Axe", expantion: "#3" },
    { name: "Boomerang", expantion: "#3" },
    { name: "Crystal Dagger", expantion: "#3" },
    { name: "Hory Mace", expantion: "#3" },
    // #4
    { name: "Broadsword", expantion: "#4" },
    { name: "Crossbow", expantion: "#4" },
    { name: "Flail", expantion: "#4" },
    { name: "Two-Handed Sword", expantion: "#4" },
    // #5
    { name: "Cursed Mace", expantion: "#5" },
    { name: "King's Sword", expantion: "#5" },
    { name: "Longspear", expantion: "#5" },
    { name: "Magi Staff", expantion: "#5" },
    // #6
    { name: "Fire Rod", expantion: "#6" },
    { name: "Flaming Hammer", expantion: "#6" },
    { name: "Frost Bow", expantion: "#6" },
    { name: "Mechanical Harpoon", expantion: "#6" },
    // #7
    { name: "Bastard Sword", expantion: "#7" },
    { name: "Battlepick", expantion: "#7" },
    { name: "Cleaner's Net", expantion: "#7" },
    { name: "The Five Points", expantion: "#7" },
  ],
  magic: [
    // #1
    { name: "Fireball", expantion: "#1" },
    { name: "Future Vison", expantion: "#1" },
    { name: "Magic Missile", expantion: "#1" },
    { name: "Moonligh", expantion: "#1" },
    // #2
    // #3
    { name: "Arcane Aura", expantion: "#3" },
    { name: "Charm Monster", expantion: "#3" },
    { name: "Snchant Weapons", expantion: "#3" },
    { name: "Vampiric Touch", expantion: "#3" },
    // #4
    { name: "Death Pact", expantion: "#4" },
    { name: "Mirror Image", expantion: "#4" },
    { name: "Tempest", expantion: "#4" },
    { name: "True Seeing", expantion: "#4" },
    // #5
    { name: "Creeping Death", expantion: "#5" },
    { name: "Frost Bolt", expantion: "#5" },
    { name: "Mind Control", expantion: "#5" },
    { name: "Summon Storm", expantion: "#5" },
    // #6
    { name: "Acid Burst", expantion: "#6" },
    { name: "Ascendance", expantion: "#6" },
    { name: "Cure Disease", expantion: "#6" },
    { name: "Heast", expantion: "#6" },
    // #7
    { name: "Blizzard", expantion: "#7" },
    { name: "Cone of Cold", expantion: "#7" },
    { name: "Create Fire", expantion: "#7" },
    { name: "Inner Fire", expantion: "#7" },
  ],
  item: [
    // #1
    { name: "Amulet of Infravision", expantion: "#1" },
    { name: "Gem of Healing", expantion: "#1" },
    { name: "Tom of Knowledge", expantion: "#1" },
    // #2
    // #3
    { name: "Crystal of Scrying", expantion: "#3" },
    { name: "Holy Symbol", expantion: "#3" },
    { name: "Potion of Stamina", expantion: "#3" },
    { name: "Ring of Learning", expantion: "#3" },
    // #4
    { name: "Damilu Huskie", expantion: "#4" },
    { name: "Daramere's Cloak", expantion: "#4" },
    { name: "Potion of Light", expantion: "#4" },
    { name: "Ring of Proficiency", expantion: "#4" },
    // #5
    { name: "Amulet of Power", expantion: "#5" },
    { name: "Lightstone Gem", expantion: "#5" },
    { name: "Nature's Amulet", expantion: "#5" },
    { name: "Ring of Spell Storing", expantion: "#5" },
    // #6
    { name: "Bracers of Cleansing", expantion: "#6" },
    { name: "Neverending Rope Spool", expantion: "#6" },
    { name: "Studded Leather Shirt", expantion: "#6" },
    { name: "Wand of Illumination", expantion: "#6" },
    // #7
    { name: "Eternal Flame", expantion: "#7" },
    { name: "Ice Climbing Gear", expantion: "#7" },
    { name: "Snow Trekking Tools", expantion: "#7" },
    { name: "Tent", expantion: "#7" },
  ]
}

const state = (): CardState => ({ cards: [] })

const mutations: MutationTree<CardState> = {
  setCards(state: CardState, cards: Card[]): void {
    state.cards = cards;
  }
};

const _sample = (arr: Candidate[], card_type: CARD_TYPE): Card => {
  const get_index = Math.floor(Math.random() * arr.length)
  const card = arr[get_index];
  arr.splice(get_index, 1)
  return new Card(card.name, [], card_type, card.expantion);
};

const _shuffle = (card_type: "weapon" | "magic" | "item", draw_num: number, expansionRegexp: RegExp) => {
  let temp_candidate = Array.from(candidate[card_type]).filter(card => card.expantion.match(expansionRegexp));
  let cards = []
  for(let i = 0;  i < draw_num; i++) {
      cards.push(_sample(temp_candidate, card_type));
  }
  return  cards;
}

const actions: ActionTree<CardState, RootState> = {
  shuffle({ commit, rootGetters }) {
    const expansionRegexp = rootGetters["expansion/regexp"];
    const weapons: Card[] = _shuffle("weapon", 3, expansionRegexp);
    const magics: Card[] = _shuffle("magic", 3, expansionRegexp);
    const items: Card[] = _shuffle("item", 2, expansionRegexp);

    commit("setCards", [...weapons, ...magics, ...items]);
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
