import { CardState, Card, CARD_TYPE } from "~/types";
import { MutationTree, ActionTree } from "vuex";

const candidate = {
  weapon: [
    "Battle Axe",
    "Boomerang",
    "Broads word",
    "Crossbaw",
    "Crystal Dagger",
    "Cursed Mace",
    "Flail",
    "Hammer",
    "Hand Axe",
    "Holy Mace",
    "King's Sword",
    "Longbow",
    "Longspear",
    "Longsword",
    "Maggi Staff",
    "Maul",
    "Punching Dagger",
    "Quarterstaff",
    "Rapier",
    "Shortbow",
    "Shortspear ",
    "Shortsword",
    "Two-Handed Sword",
  ],
  magic: [
    "Arcane Aura",
    "Arcane Touch",
    "Charm Monster",
    "Consecration",
    "Creeping Death",
    "Dark Fire Touch",
    "Death Pact",
    "Enchant Weapons",
    "Fireball",
    "Form of the Juggernaut",
    "Frost Bolt",
    "Future Vision ",
    "Lightning Bolt",
    "Magic Missile",
    "Mind Control",
    "Mirror Image",
    "Moonlight",
    "Nature's Fury",
    "Summon Storm",
    "Tempest",
    "True Seeing",
    "Vampiric Touch",
  ],
  item: [
    "Amulet of Infravision",
    "Amulet of Power",
    "Crystal of Scrying",
    "Damilu Huskie",
    "Daramere's Cloak",
    "Elven Ring",
    "Gem of Healing",
    "Headband of Intellect",
    "Holy Symbol",
    "Lightstone Gem",
    "Nature's Amulet",
    "Necklace of Dawn",
    "Potion of Light",
    "Potion of Stamina",
    "Ring of Learning",
    "Ring of Proficiency",
    "Ring of Spell Storing",
    "Scionic Annals",
    "Strength Gauntlets",
    "Tome of Knowledge",
    "Wand of Light",
  ]
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
