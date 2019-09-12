import { CardState, Card } from "~/types";
import { MutationTree, ActionTree } from "vuex";

type Candidate = {
  name: string;
  tags: string[];
}

const candidates : Candidate[] = [
  { name: "Aird", tags: ["HUMAN", "ROGUE"] },
  { name: "Arcanian", tags: ["HUMAN", "WIZARD"] },
  { name: "Avania", tags: ["CELESTIAL", "HUMAN", "CLERIC"] },
  { name: "Baharan ", tags: ["TRITON ", "CLERIC"] },
  { name: "Brimstone ", tags: ["DWARF", "ROGUE "] },
  { name: "Darameric", tags: ["ELF", " CLERIC", " WIZARD "] },
  { name: "Darkrend", tags: ["HUMAN", "WIZARD"] },
  { name: "Dunardic", tags: ["HUMAN", "FIGHTER"] },
  { name: "Edlin", tags: ["HUMAN", "FIGHTER"] },
  { name: "Ehrlingal", tags: ["HALFLING", "ROGUE"] },
  { name: "Felin", tags: ["ELF", "CLERIC", "WIZARD"] },
  { name: "Gendarme ", tags: ["DWARF", "WIZARD"] },
  { name: "Grimwolf", tags: ["UNDEAD", "HUMAN", "FIGHTER"] },
  { name: "Gorlandor", tags: ["HUMAN", "FIGHTER"] },
  { name: "Hawkswood ", tags: ["AVIAN", "ELF", "ROGUE"] },
  { name: "Honormain", tags: ["HUMAN", "CLERIC"] },
  { name: "Linsha", tags: ["HUMAN", "FIGHTER"] },
  { name: "Markennan ", tags: ["HUMAN", "FIGHTER"] },
  { name: "Moonblades", tags: ["HUMAN", "FIGHTER", "ROGUE"] },
  { name: "Nimblefingers", tags: ["ELF", "ROGUE"] },
  { name: "Outlands", tags: ["HUMAN", "FIGHTER"] },
  { name: "Pylorian ", tags: ["HUMAN", "WIZARD"] },
  { name: "Regian", tags: ["HUMAN", " CLERIC "] },
  { name: "Regalen", tags: ["ELF", "WIZARD"] },
  { name: "Scathian", tags: ["HALFLING", "ROGUE", "WIZARD"] },
  { name: "Sephilest ", tags: ["ELF", "FIGHTER"] },
  { name: "Silverhelm", tags: ["DWARF", "CLERIC", "FIGHTIR"] },
  { name: "Stormhand", tags: ["DWARE", "FIGHTER"] },
  { name: "Stormskull", tags: ["HUMAN", "ORC", "WIZARD"] },
  { name: "Stalker", tags: ["ELF", "ROGUE"] },
  { name: "Terakian", tags: ["HUMAN", "CLERIC", "FIGHTER"] },
  { name: "The Yellow Knight", tags: ["HUMAN", "FIGHTER"] },
  { name: "Veris", tags: ["ELF", "WIZARD"] },
];


const state = (): CardState => ({ cards: [] })

const mutations: MutationTree<CardState> = {
  setCards(state: CardState, cards: Card[]): void {
    state.cards = cards;
  }
};


const _sample = (arr: Candidate[]): Card => {
  const get_index = Math.floor(Math.random() * arr.length)
  const card = arr[get_index];
  arr.splice(get_index, 1)
  return new Card(card.name, card.tags, "hero");
};

const _shuffle = () => {
  let temp_candidates = Array.from(candidates);
  let cards = []
  for(let i = 0;  i < 4; i++) {
      cards.push(_sample(temp_candidates));
  }
  return  cards;
}

const _checkHeroJobs = (cards: Candidate[]) => {
  let counter: { [key: string]: number} =  {
    "FIGHTER": 0,
    "ROAGE": 0,
    "MAGICIAN": 0,
    "CLERIC": 0,
  };
  for (let card of cards) {
    for (let jobName in counter) {
      if(card.tags.includes(jobName)) counter[jobName]++;
    }
  }

  // Check: Are all jobs appeared ?
  for (let jobName in counter) {
    if(counter[jobName] < 1) return false;
  }
  return true;
};

const actions: ActionTree<CardState, CardState> = {
  shuffle({ commit }) {
    let cards: Candidate[] = []
    let i = 0
    while(!_checkHeroJobs(cards)) {
      cards = _shuffle();
      if(i++ > 100) break; // against for infinity loop
    }
    commit("setCards", cards);
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
