import { CardState, Card } from "~/types";
import { MutationTree, ActionTree } from "vuex";

type Candidate = {
  name: string;
  tags: string[];
}

const candidates : Candidate[] = [
  { name: "Hero 1**", tags: ["HUMAN", "FIGHTER"] },
  { name: "Hero 2**", tags: ["HUMAN", "MAGICIAN"] },
  { name: "Hero 3**", tags: ["HUMAN", "CLERIC"] },
  { name: "Hero 4**", tags: ["HUMAN", "FIGHTER", "ROAGE"] },
  { name: "Hero 5**", tags: ["HUMAN", "ROAGE"] },
  { name: "Hero 6**", tags: ["HUMAN", "FIGHTER", "MAGICIAN"] },
  { name: "Hero 7**", tags: ["HUMAN", "MAGICIAN", "CLERIC"] },
  { name: "Hero 8**", tags: ["HUMAN", "FIGHTER"] },
  { name: "Hero 9**", tags: ["HUMAN", "MAGICIAN"] },
  { name: "Hero 10**", tags: ["HUMAN", "CLERIC"] },
  { name: "Hero 11**", tags: ["HUMAN", "ROAGE"] },
  { name: "Hero 12**", tags: ["HUMAN", "ROAGE", "MAGICIAN"] },
  { name: "Hero 13**", tags: ["HUMAN", "ROAGE", "CLERIC"] },
  { name: "Hero 14**", tags: ["HUMAN", "MAGICIAN"] },
  { name: "Hero 15**", tags: ["HUMAN", "CLERIC", "MAGICIAN"] },
  { name: "Hero 16**", tags: ["HUMAN", "FIGHTER", "MAGICIAN"] },
  { name: "Hero 17**", tags: ["HUMAN", "FIGHTER", "CLERIC"] },
  { name: "Hero 18**", tags: ["HUMAN", "MAGICIAN"] },
  { name: "Hero 19**", tags: ["HUMAN", "FIGHTER"] },
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
