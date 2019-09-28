import { CardState, Card, EXPANTION } from "~/types";
import { MutationTree, ActionTree } from "vuex";

type Job ='FIGHTER' | 'ROGUE' | 'WIZARD' | 'CLERIC';
type Candidate = {
  name: string;
  tags: Job[];
}

const DECK: {[k in EXPANTION]: Candidate[]} = {
  "#1": [
    { name: "Grolandor", tags: ["FIGHTER"] },
    { name: "Hawkswood ", tags: ["ROGUE"] },
    { name: "Pylorian ", tags: ["WIZARD"] },
    { name: "Scathian", tags: ["ROGUE", "WIZARD"] },
    { name: "Silverhelm", tags: ["CLERIC", "FIGHTER"] },
    { name: "Stormhand", tags: ["FIGHTER"] },
  ],
  "#2": [
  ],
  "#3": [
    { name: "Baharan ", tags: ["CLERIC"] },
    { name: "Darameric", tags: ["CLERIC", "WIZARD"] },
    { name: "Linsha", tags: [ "FIGHTER"] },
    { name: "Markennan ", tags: ["FIGHTER"] },
    { name: "Nimblefingers", tags: ["ROGUE"] },
    { name: "Regalen", tags: ["WIZARD"] },
  ],
  "#4": [
    { name: "Darkrend", tags: ["WIZARD"] },
    { name: "Grimwolf", tags: ["FIGHTER"] },
    { name: "Honormain", tags: ["CLERIC"] },
    { name: "Jadress", tags: ["ROGUE"] },
    { name: "Moonblades", tags: ["FIGHTER", "ROGUE"] },
    { name: "Stormskull", tags: ["WIZARD"] },
  ],
  "#5": [
    { name: "Aird", tags: ["ROGUE"] },
    { name: "Arcanian", tags: ["WIZARD"] },
    { name: "Dunardic", tags: ["FIGHTER"] },
    { name: "Regian", tags: ["CLERIC"] },
    { name: "Terakian", tags: ["CLERIC", "FIGHTER"] },
    { name: "Veris", tags: ["WIZARD"] },
  ]
}

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
  let cards: Card[] = []
  const candidates: Candidate[] = DECK["#1"].concat(DECK["#3"], DECK["#4"], DECK["#5"]);
  if (candidates.length < 4) {
    console.error("card is less");
    return cards;
  }
  let temp_candidates = Array.from(candidates);
  for (let i = 0; i < 4; i++) {
    cards.push(_sample(temp_candidates));
  }
  return cards;
}

const _checkHeroJobs = (cards: Card[]) => {
  let counter: { [k in Job]: number } = {
    FIGHTER: 0,
    ROGUE: 0,
    WIZARD: 0,
    CLERIC: 0,
  };
  for (let card of cards) {
    for (let jobName in counter) {
      if (card.tags.includes(jobName as Job)) counter[jobName as Job]++;
    }
  }

  // Check: Are all jobs appeared ?
  for (let jobName in counter) {
    if (counter[jobName as Job] < 1) return false;
  }
  return true;
};

const actions: ActionTree<CardState, CardState> = {
  shuffle({ commit }) {
    let cards: Card[] = []
    let i = 0
    while (!_checkHeroJobs(cards)) {
      cards = _shuffle();
      if (i++ > 10000) {
        console.error("counter out");
        break; // against for infinity loop
      }
    }
    console.info(`try ${i} times`);
    commit("setCards", cards);
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
