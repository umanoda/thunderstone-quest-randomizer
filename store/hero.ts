import { CardState, Card, EXPANTION } from "~/types";
import { MutationTree, ActionTree } from "vuex";

type Job ='FIGHTER' | 'ROGUE' | 'WIZARD' | 'CLERIC';
type Candidate = {
  name: string;
  tags: Job[];
  expantion: EXPANTION;
}

const DECK: Candidate[] = [
  // #1
  { name: "Grolandor", tags: ["FIGHTER"], expantion: "#1" },
  { name: "Hawkswood", tags: ["ROGUE"], expantion: "#1" },
  { name: "Pylorian", tags: ["WIZARD"], expantion: "#1" },
  { name: "Scathian", tags: ["ROGUE", "WIZARD"], expantion: "#1" },
  { name: "Silverhelm", tags: ["CLERIC", "FIGHTER"], expantion: "#1" },
  { name: "Stormhand", tags: ["FIGHTER"], expantion: "#1" },
  // #2
  // #3
  { name: "Baharan", tags: ["CLERIC"], expantion: "#3" },
  { name: "Darameric", tags: ["CLERIC", "WIZARD"], expantion: "#3" },
  { name: "Linsha", tags: [ "FIGHTER"], expantion: "#3" },
  { name: "Markennan", tags: ["FIGHTER"], expantion: "#3" },
  { name: "Nimblefingers", tags: ["ROGUE"], expantion: "#3" },
  { name: "Regalen", tags: ["WIZARD"], expantion: "#3" },
  // #4
  { name: "Darkrend", tags: ["WIZARD"], expantion: "#4" },
  { name: "Grimwolf", tags: ["FIGHTER"], expantion: "#4" },
  { name: "Honormain", tags: ["CLERIC"], expantion: "#4" },
  { name: "Jadress", tags: ["ROGUE"], expantion: "#4" },
  { name: "Moonblades", tags: ["FIGHTER", "ROGUE"], expantion: "#4" },
  { name: "Stormskull", tags: ["WIZARD"], expantion: "#4" },
  // #5
  { name: "Aird", tags: ["ROGUE"], expantion: "#5" },
  { name: "Arcanian", tags: ["WIZARD"], expantion: "#5" },
  { name: "Dunardic", tags: ["FIGHTER"], expantion: "#5" },
  { name: "Regian", tags: ["CLERIC"], expantion: "#5" },
  { name: "Terakian", tags: ["CLERIC", "FIGHTER"], expantion: "#5" },
  { name: "Veris", tags: ["WIZARD"], expantion: "#5" },
]

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
  const candidates: Candidate[] = DECK.filter(candidate => candidate.expantion.match(/^#(1|2|3|4|5)$/));
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
