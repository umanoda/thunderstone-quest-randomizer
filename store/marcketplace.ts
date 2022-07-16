import { RootState, CardState, Card, CARD_TYPE, EXPANSION } from "~/types";
import { MutationTree, ActionTree } from "vuex";
type ITEM_TYPE = "weapon" | "magic" | "item";
type Candidate = {
  name: string;
  expansion: EXPANSION;
}

const candidate: {[k in ITEM_TYPE]:Candidate[]} = {
  weapon: [
    // #1
    { name: "Hummer", expansion: "#1" },
    { name: "Maul", expansion: "#1" },
    { name: "Shortbow", expansion: "#1" },
    { name: "Shortsword", expansion: "#1" },
    { name: "Shortspear", expansion: "#1" },
    // #2
    { name: "Longbow", expansion: "#2" },
    { name: "Punching Dagger", expansion: "#2" },
    { name: "Quarterstaff", expansion: "#2" },
    { name: "Longsword", expansion: "#2" },
    // #3
    { name: "Battle Axe", expansion: "#3" },
    { name: "Boomerang", expansion: "#3" },
    { name: "Crystal Dagger", expansion: "#3" },
    { name: "Hory Mace", expansion: "#3" },
    // #4
    { name: "Broadsword", expansion: "#4" },
    { name: "Crossbow", expansion: "#4" },
    { name: "Flail", expansion: "#4" },
    { name: "Two-Handed Sword", expansion: "#4" },
    // #5
    { name: "Cursed Mace", expansion: "#5" },
    { name: "King's Sword", expansion: "#5" },
    { name: "Longspear", expansion: "#5" },
    { name: "Magi Staff", expansion: "#5" },
    // #6
    { name: "Bastard Sword", expansion: "#6" },
    { name: "Battlepick", expansion: "#6" },
    { name: "Cleaner's Net", expansion: "#6" },
    { name: "The Five Points", expansion: "#6" },
    // #7
    { name: "Fire Rod", expansion: "#7" },
    { name: "Flaming Hammer", expansion: "#7" },
    { name: "Frost Bow", expansion: "#7" },
    { name: "Mechanical Harpoon", expansion: "#7" },
    // #8
    { name: "Khopesh", expansion: "#8" },
    { name: "Avian Bow", expansion: "#8" },
    { name: "Scimitar", expansion: "#8" },
    // #9
    { name: "Keltarian Bow", expansion: "#9" },
    { name: "Theunderstone Hammer", expansion: "#9" },
    { name: "Theunderstone Rod", expansion: "#9" },
    // #10
    { name: "Balanced Staff ", expansion: "#10" },
    { name: "Bow of the Beast", expansion: "#10" },
    { name: "Pitchfork", expansion: "#10" },
    { name: "Whip", expansion: "#10" },
    // #11
    { name: "Glaive", expansion: "#11" },
    { name: "Midnight Katana", expansion: "#11" },
    { name: "Stone Maul", expansion: "#11" },
    { name: "Throwing Dagger", expansion: "#11" },
    // { name: "", expansion: "#" },
  ],
  magic: [
    // #1
    { name: "Fireball", expansion: "#1" },
    { name: "Future Vison", expansion: "#1" },
    { name: "Magic Missile", expansion: "#1" },
    { name: "Moonligh", expansion: "#1" },
    // #2
    { name: "Arcane Touch", expansion: "#2" },
    { name: "Lightning Bolt", expansion: "#2" },
    { name: "Nature's Fury", expansion: "#2" },
    { name: "Consecration", expansion: "#2" },
    // #3
    { name: "Arcane Aura", expansion: "#3" },
    { name: "Charm Monster", expansion: "#3" },
    { name: "Snchant Weapons", expansion: "#3" },
    { name: "Vampiric Touch", expansion: "#3" },
    // #4
    { name: "Death Pact", expansion: "#4" },
    { name: "Mirror Image", expansion: "#4" },
    { name: "Tempest", expansion: "#4" },
    { name: "True Seeing", expansion: "#4" },
    // #5
    { name: "Creeping Death", expansion: "#5" },
    { name: "Frost Bolt", expansion: "#5" },
    { name: "Mind Control", expansion: "#5" },
    { name: "Summon Storm", expansion: "#5" },
    // #6
    { name: "Acid Burst", expansion: "#6" },
    { name: "Ascendance", expansion: "#6" },
    { name: "Cure Disease", expansion: "#6" },
    { name: "Heast", expansion: "#6" },
    // #7
    { name: "Blizzard", expansion: "#7" },
    { name: "Cone of Cold", expansion: "#7" },
    { name: "Create Fire", expansion: "#7" },
    { name: "Inner Fire", expansion: "#7" },
    // #8
    { name: "Mummify", expansion: "#8" },
    { name: "Navigate the Labyrinth", expansion: "#8" },
    { name: "Open Sesame", expansion: "#8" },
    { name: "Summon Help", expansion: "#8" },
    // #9
    { name: "Theunderstone Ritual", expansion: "#9" },
    { name: "Construct Protector", expansion: "#9" },
    { name: "Transmutation", expansion: "#9" },
    { name: "Animate Dead", expansion: "#9" },
    { name: "Mend", expansion: "#9" },
    // #10
    { name: "Dance with the Devil", expansion: "#10" },
    { name: "Exorcise", expansion: "#10" },
    { name: "Morning Dawn", expansion: "#10" },
    { name: "Superior Mind", expansion: "#10" },
    // #11
    { name: "Banish", expansion: "#11" },
    { name: "Phantasm", expansion: "#11" },
    { name: "Sonic Scream", expansion: "#11" },
    { name: "Spirit Shield", expansion: "#11" },
    //{ name: "", expansion: "#" },
  ],
  item: [
    // #1
    { name: "Amulet of Infravision", expansion: "#1" },
    { name: "Gem of Healing", expansion: "#1" },
    { name: "Tom of Knowledge", expansion: "#1" },
    // #2
    { name: "Elven Ring", expansion: "#2" },
    { name: "Headband of Intellect", expansion: "#2" },
    { name: "Wand of Light", expansion: "#2" },
    { name: "Strength Gauntlets", expansion: "#2" },
    // #3
    { name: "Crystal of Scrying", expansion: "#3" },
    { name: "Holy Symbol", expansion: "#3" },
    { name: "Potion of Stamina", expansion: "#3" },
    { name: "Ring of Learning", expansion: "#3" },
    // #4
    { name: "Damilu Huskie", expansion: "#4" },
    { name: "Daramere's Cloak", expansion: "#4" },
    { name: "Potion of Light", expansion: "#4" },
    { name: "Ring of Proficiency", expansion: "#4" },
    // #5
    { name: "Amulet of Power", expansion: "#5" },
    { name: "Lightstone Gem", expansion: "#5" },
    { name: "Nature's Amulet", expansion: "#5" },
    { name: "Ring of Spell Storing", expansion: "#5" },
    // #6
    { name: "Bracers of Cleansing", expansion: "#6" },
    { name: "Neverending Rope Spool", expansion: "#6" },
    { name: "Studded Leather Shirt", expansion: "#6" },
    { name: "Wand of Illumination", expansion: "#6" },
    // #7
    { name: "Eternal Flame", expansion: "#7" },
    { name: "Ice Climbing Gear", expansion: "#7" },
    { name: "Snow Trekking Tools", expansion: "#7" },
    { name: "Tent", expansion: "#7" },
    // #8
    { name: "Bag of Gems", expansion: "#8" },
    { name: "Spices", expansion: "#8" },
    { name: "Theunderstone Potion", expansion: "#8" },
    // #9
    { name: "Theunderstone Elixir", expansion: "#9" },
    { name: "Plate Armor", expansion: "#9" },
    { name: "Theunderstone Ore", expansion: "#9" },
    { name: "Crystal Light", expansion: "#9" },
    // #10
    { name: "Black Cat", expansion: "#10" },
    { name: "Dreamcatcher", expansion: "#10" },
    { name: "Grimwood Wand", expansion: "#10" },
    { name: "Torch", expansion: "#10" },
    // #11
    { name: "Manacles", expansion: "#11" },
    { name: "Potion of Giant Strength", expansion: "#11" },
    { name: "Riftling", expansion: "#11" },
    { name: "Traveling Merchant", expansion: "#11" },
    //{ name: "", expansion: "#" },
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
  return new Card(card.name, [], card_type, card.expansion);
};

const _shuffle = (card_type: "weapon" | "magic" | "item", draw_num: number, expansionRegexp: RegExp) => {
  let temp_candidate = Array.from(candidate[card_type]).filter(card => card.expansion.match(expansionRegexp));
  if (temp_candidate.length == 0) return [];
  let cards = []
  for(let i = 0;  i < draw_num; i++) {
      cards.push(_sample(temp_candidate, card_type));
  }
  return  cards;
}

const actions: ActionTree<CardState, RootState> = {
  shuffle({ commit, rootGetters }) {
    const expansionRegexp = rootGetters["expansion/regexp"],
          weapons: Card[] = _shuffle("weapon", 3, expansionRegexp),
          magics: Card[]  = _shuffle("magic", 3, expansionRegexp),
          items: Card[]   = _shuffle("item", 2, expansionRegexp);

    commit("setCards", [...weapons, ...magics, ...items]);
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
