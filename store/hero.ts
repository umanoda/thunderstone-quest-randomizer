import { RootState, CardState, Card, EXPANTION } from "~/types";
import { MutationTree, ActionTree } from "vuex";

type Job ='FIGHTER' | 'ROGUE' | 'WIZARD' | 'CLERIC';
type Candidate = {
  name: string;
  jobs: Job[];
  expantion: EXPANTION;
}

const DECK: Candidate[] = [
  // #1
  { name: "Grolandor", jobs: ["FIGHTER"], expantion: "#1" },
  { name: "Hawkswood", jobs: ["ROGUE"], expantion: "#1" },
  { name: "Pylorian", jobs: ["WIZARD"], expantion: "#1" },
  { name: "Scathian", jobs: ["ROGUE", "WIZARD"], expantion: "#1" },
  { name: "Silverhelm", jobs: ["CLERIC", "FIGHTER"], expantion: "#1" },
  { name: "Stormhand", jobs: ["FIGHTER"], expantion: "#1" },
  // #2
  // #3
  { name: "Baharan", jobs: ["CLERIC"], expantion: "#3" },
  { name: "Darameric", jobs: ["CLERIC", "WIZARD"], expantion: "#3" },
  { name: "Linsha", jobs: [ "FIGHTER"], expantion: "#3" },
  { name: "Markennan", jobs: ["FIGHTER"], expantion: "#3" },
  { name: "Nimblefingers", jobs: ["ROGUE"], expantion: "#3" },
  { name: "Regalen", jobs: ["WIZARD"], expantion: "#3" },
  // #4
  { name: "Darkrend", jobs: ["WIZARD"], expantion: "#4" },
  { name: "Grimwolf", jobs: ["FIGHTER"], expantion: "#4" },
  { name: "Honormain", jobs: ["CLERIC"], expantion: "#4" },
  { name: "Jadress", jobs: ["ROGUE"], expantion: "#4" },
  { name: "Moonblades", jobs: ["FIGHTER", "ROGUE"], expantion: "#4" },
  { name: "Stormskull", jobs: ["WIZARD"], expantion: "#4" },
  // #5
  { name: "Aird", jobs: ["ROGUE"], expantion: "#5" },
  { name: "Arcanian", jobs: ["WIZARD"], expantion: "#5" },
  { name: "Dunardic", jobs: ["FIGHTER"], expantion: "#5" },
  { name: "Regian", jobs: ["CLERIC"], expantion: "#5" },
  { name: "Terakian", jobs: ["CLERIC", "FIGHTER"], expantion: "#5" },
  { name: "Veris", jobs: ["WIZARD"], expantion: "#5" },
  // #6
  { name: "Graeme Crawford", jobs: ["CLERIC", "FIGHTER"], expantion: "#6" },
  { name: "Khomros", jobs: ["FIGHTER"], expantion: "#6" },
  { name: "Ophialyn the Tracker", jobs: ["FIGHTER"], expantion: "#6" },
  { name: "Runiva Highstone", jobs: ["WIZARD"], expantion: "#6" },
  { name: "Uvina the Delver", jobs: ["ROGUE"], expantion: "#6" },
  { name: "Wiltran Proudmore", jobs: ["CLERIC"], expantion: "#6" },
  // #7
  { name: "Breezy", jobs: ["WIZARD"], expantion: "#7" },
  { name: "Drulfal the Primordial", jobs: ["CLERIC"], expantion: "#7" },
  { name: "Lefira", jobs: ["FIGHTER"], expantion: "#7" },
  { name: "Lilande Songweaver", jobs: ["ROGUE"], expantion: "#7" },
  { name: "Rugduhr Blackmane", jobs: ["ROGUE"], expantion: "#7" },
  { name: "Samly Thrackson", jobs: ["CLERIC"], expantion: "#7" },
  // #8
  { name: "Heman Granitesunder", jobs: ["FIGHTER"], expantion: "#8" },
  { name: "Duriggim Soulbrand", jobs: ["CLERIC", "WIZARD"], expantion: "#8" },
  { name: "Rien Mandroux", jobs: ["FIGHTER"], expantion: "#8" },
  { name: "Shakir the Sailor", jobs: ["ROGUE"], expantion: "#8" },
  { name: "Cirrok", jobs: ["ROGUE"], expantion: "#8" },
  { name: "Shawna Hopesinger", jobs: ["ROGUE", "WIZARD"], expantion: "#8" },
  // #9
  { name: "Baraqiel", jobs: ["CLERIC"], expantion: "#9" },
  { name: "Shenaris", jobs: ["CLERIC"], expantion: "#9" },
  { name: "Hamrulir Oakenborn", jobs: ["FIGHTER"], expantion: "#9" },
  { name: "Tilka the Sculptor", jobs: ["ROGUE"], expantion: "#9" },
  { name: "Caslech", jobs: ["ROGUE", "WIZARD"], expantion: "#9" },
  { name: "Liss", jobs: ["WIZARD"], expantion: "#9" },
]

const state = (): CardState => ({ cards: [] })

const mutations: MutationTree<CardState> = {
  setCards(state: CardState, cards: Card[]): void {
        state.cards = cards;
  }
};


const _sample = (arr: Candidate[]): [Card, Candidate[]] => {
  const get_index = Math.floor(Math.random() * arr.length)
  const card = arr[get_index];
  arr.splice(get_index, 1)
  if (!card) {
    console.error(`Invalid card: ${card}`);
    return [new Card("---", [], "hero", "#1"), arr];
  }
  if (card.jobs.length === 1) {
    /**
     * Multiple cards with the same job must not be drawn more than once
     *
     * OK:
     *   FIGHTER, FIGHTER/WIZARD, ROGUE/WIZARD, CLERIC
     *   FIGHTER/WIZARD, FIGHTER/WIZARD, ROGUE, CLERIC
     *
     * NG:
     *   FIGHTER, ROGUE/WIZARD, FIGHTER, CLERIC
     *   WIZARD, ROGUE/CLERIC, WIZARD, FIGHTER/CLERIC
     *
     * NG but unsupported, because it is a rare case:
     *   FIGHTER/WIZARD, FIGHTER/WIZARD, FIGHTER/WIZARD, ROGUE/CLERIC
     */
    arr = arr.filter(c => c.jobs.toString() !== card.jobs.toString());
  }

  return [new Card(card.name, card.jobs, "hero", card.expantion), arr];
};

const _shuffle = (expansionRegexp: RegExp) => {
  let cards: Card[] = []
  const candidates: Candidate[] = DECK.filter(candidate => candidate.expantion.match(expansionRegexp));
  if (candidates.length < 4) {
    console.error("card is less");
    return cards;
  }
  let nextCandidates = Array.from(candidates);
  let newCard: Card;
  for (let i = 0; i < 4; i++) {
    [newCard, nextCandidates] = _sample(nextCandidates)
    cards.push(newCard);
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

const actions: ActionTree<CardState, RootState> = {
  shuffle({ commit, rootGetters }) {
    let cards: Card[] = []
    let i = 0
    const expansionRegexp = rootGetters["expansion/regexp"];
    while (!_checkHeroJobs(cards)) {
      cards = _shuffle(expansionRegexp);
      if (cards.length == 0) break;
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
