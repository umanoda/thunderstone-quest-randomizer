import { RootState, CardState, Card, EXPANSION } from "~/types";
import { MutationTree, ActionTree } from "vuex";

type Job = "FIGHTER" | "ROGUE" | "WIZARD" | "CLERIC";
type Candidate = {
  name: string;
  jobs: Job[];
  expansion: EXPANSION;
};

const DECK: Candidate[] = [
  // #1
  {
    name: "Grolandor",
    jobs: ["FIGHTER"],
    expansion: "#1",
  },
  {
    name: "Hawkswood",
    jobs: ["ROGUE"],
    expansion: "#1",
  },
  {
    name: "Pylorian",
    jobs: ["WIZARD"],
    expansion: "#1",
  },
  {
    name: "Scathian",
    jobs: ["ROGUE", "WIZARD"],
    expansion: "#1",
  },
  {
    name: "Silverhelm",
    jobs: ["CLERIC", "FIGHTER"],
    expansion: "#1",
  },
  {
    name: "Stormhand",
    jobs: ["FIGHTER"],
    expansion: "#1",
  },
  // #2
  {
    name: "Sephilest",
    jobs: ["FIGHTER"],
    expansion: "#2",
  },
  {
    name: "Avania",
    jobs: ["CLERIC"],
    expansion: "#2",
  },
  {
    name: "Ehrlingal",
    jobs: ["ROGUE"],
    expansion: "#2",
  },
  {
    name: "Gendarme",
    jobs: ["WIZARD"],
    expansion: "#2",
  },
  {
    name: "Brimstone",
    jobs: ["ROGUE"],
    expansion: "#2",
  },
  {
    name: "Felin",
    jobs: ["CLERIC", "WIZARD"],
    expansion: "#2",
  },
  // #3
  {
    name: "Baharan",
    jobs: ["CLERIC"],
    expansion: "#3",
  },
  {
    name: "Darameric",
    jobs: ["CLERIC", "WIZARD"],
    expansion: "#3",
  },
  {
    name: "Linsha",
    jobs: ["FIGHTER"],
    expansion: "#3",
  },
  {
    name: "Markennan",
    jobs: ["FIGHTER"],
    expansion: "#3",
  },
  {
    name: "Nimblefingers",
    jobs: ["ROGUE"],
    expansion: "#3",
  },
  {
    name: "Regalen",
    jobs: ["WIZARD"],
    expansion: "#3",
  },
  // #4
  {
    name: "Darkrend",
    jobs: ["WIZARD"],
    expansion: "#4",
  },
  {
    name: "Grimwolf",
    jobs: ["FIGHTER"],
    expansion: "#4",
  },
  {
    name: "Honormain",
    jobs: ["CLERIC"],
    expansion: "#4",
  },
  {
    name: "Jadress",
    jobs: ["ROGUE"],
    expansion: "#4",
  },
  {
    name: "Moonblades",
    jobs: ["FIGHTER", "ROGUE"],
    expansion: "#4",
  },
  {
    name: "Stormskull",
    jobs: ["WIZARD"],
    expansion: "#4",
  },
  // #5
  {
    name: "Aird",
    jobs: ["ROGUE"],
    expansion: "#5",
  },
  {
    name: "Arcanian",
    jobs: ["WIZARD"],
    expansion: "#5",
  },
  {
    name: "Dunardic",
    jobs: ["FIGHTER"],
    expansion: "#5",
  },
  {
    name: "Regian",
    jobs: ["CLERIC"],
    expansion: "#5",
  },
  {
    name: "Terakian",
    jobs: ["CLERIC", "FIGHTER"],
    expansion: "#5",
  },
  {
    name: "Veris",
    jobs: ["WIZARD"],
    expansion: "#5",
  },
  // #6
  {
    name: "Graeme Crawford",
    jobs: ["CLERIC", "FIGHTER"],
    expansion: "#6",
  },
  {
    name: "Khomros",
    jobs: ["FIGHTER"],
    expansion: "#6",
  },
  {
    name: "Ophialyn the Tracker",
    jobs: ["FIGHTER"],
    expansion: "#6",
  },
  {
    name: "Runiva Highstone",
    jobs: ["WIZARD"],
    expansion: "#6",
  },
  {
    name: "Uvina the Delver",
    jobs: ["ROGUE"],
    expansion: "#6",
  },
  {
    name: "Wiltran Proudmore",
    jobs: ["CLERIC"],
    expansion: "#6",
  },
  // #7
  {
    name: "Breezy",
    jobs: ["WIZARD"],
    expansion: "#7",
  },
  {
    name: "Drulfal the Primordial",
    jobs: ["CLERIC"],
    expansion: "#7",
  },
  {
    name: "Lefira",
    jobs: ["FIGHTER"],
    expansion: "#7",
  },
  {
    name: "Lilande Songweaver",
    jobs: ["ROGUE"],
    expansion: "#7",
  },
  {
    name: "Rugduhr Blackmane",
    jobs: ["ROGUE"],
    expansion: "#7",
  },
  {
    name: "Samly Thrackson",
    jobs: ["CLERIC"],
    expansion: "#7",
  },
  // #8
  {
    name: "Heman Granitesunder",
    jobs: ["FIGHTER"],
    expansion: "#8",
  },
  {
    name: "Duriggim Soulbrand",
    jobs: ["CLERIC", "WIZARD"],
    expansion: "#8",
  },
  {
    name: "Rien Mandroux",
    jobs: ["FIGHTER"],
    expansion: "#8",
  },
  {
    name: "Shakir the Sailor",
    jobs: ["ROGUE"],
    expansion: "#8",
  },
  {
    name: "Cirrok",
    jobs: ["ROGUE"],
    expansion: "#8",
  },
  {
    name: "Shawna Hopesinger",
    jobs: ["ROGUE", "WIZARD"],
    expansion: "#8",
  },
  // #9
  { name: "Baraqiel", jobs: ["CLERIC"], expansion: "#9" },
  { name: "Shenaris", jobs: ["CLERIC"], expansion: "#9" },
  { name: "Hamrulir Oakenborn", jobs: ["FIGHTER"], expansion: "#9" },
  { name: "Tilka the Sculptor", jobs: ["ROGUE"], expansion: "#9" },
  { name: "Caslech", jobs: ["ROGUE", "WIZARD"], expansion: "#9" },
  { name: "Liss", jobs: ["WIZARD"], expansion: "#9" },
  // #10
  { name: "Mirak Ilaskas", jobs: ["CLERIC", "ROGUE"], expansion: "#10" },
  { name: "Barmin Ironclaw", jobs: ["FIGHTER"], expansion: "#10" },
  { name: "Kaiya Winters", jobs: ["FIGHTER", "WIZARD"], expansion: "#10" },
  { name: "Stelias the Dark", jobs: ["ROGUE"], expansion: "#10" },
  { name: "Karn Wulfric", jobs: ["CLERIC"], expansion: "#10" },
  { name: "Ursulette", jobs: ["WIZARD"], expansion: "#10" },
  // #11
  { name: "Armatir the Proud", jobs: ["FIGHTER"], expansion: "#11" },
  { name: "Corster the Shade", jobs: ["ROGUE"], expansion: "#11" },
  { name: "Donatien Pinnick", jobs: ["FIGHTER"], expansion: "#11" },
  { name: "Gilora the Trickster", jobs: ["WIZARD", "ROGUE"], expansion: "#11" },
  { name: "Leila and Zurien", jobs: ["ROGUE", "CLERIC"], expansion: "#11" },
  { name: "Sibyl", jobs: ["WIZARD", "CLERIC"], expansion: "#11" },
];

const state = (): CardState => ({
  cards: [],
});

const mutations: MutationTree<CardState> = {
  setCards(state: CardState, cards: Card[]): void {
    state.cards = cards;
  },
};

const _sample = (arr: Candidate[]): [Card, Candidate[]] => {
  const getIndex = Math.floor(Math.random() * arr.length);
  const card = arr[getIndex];
  arr.splice(getIndex, 1);
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
    arr = arr.filter((c) => c.jobs.toString() !== card.jobs.toString());
  }

  return [new Card(card.name, card.jobs, "hero", card.expansion), arr];
};

const _shuffle = (expansionRegexp: RegExp) => {
  const cards: Card[] = [];
  const candidates: Candidate[] = DECK.filter((candidate) => candidate.expansion.match(expansionRegexp));
  if (candidates.length < 4) {
    console.error("card is less");
    return cards;
  }
  let nextCandidates = Array.from(candidates);
  let newCard: Card;
  for (let i = 0; i < 4; i++) {
    [newCard, nextCandidates] = _sample(nextCandidates);
    cards.push(newCard);
  }
  return cards;
};

const _checkHeroJobs = (cards: Card[]) => {
  const counter: {
    [k in Job]: number;
  } = {
    FIGHTER: 0,
    ROGUE: 0,
    WIZARD: 0,
    CLERIC: 0,
  };
  for (const card of cards) {
    for (const jobName in counter) {
      if (card.tags.includes(jobName as Job)) counter[jobName as Job]++;
    }
  }

  // Check: Are all jobs appeared ?
  for (const jobName in counter) {
    if (counter[jobName as Job] < 1) return false;
  }
  return true;
};

const actions: ActionTree<CardState, RootState> = {
  shuffle({ commit, rootGetters }) {
    let cards: Card[] = [];
    let i = 0;
    const expansionRegexp = rootGetters["expansion/regexp"];
    while (!_checkHeroJobs(cards)) {
      cards = _shuffle(expansionRegexp);
      if (cards.length === 0) break;
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
