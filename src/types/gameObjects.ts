import type { CARD_TYPE, EXPANSION } from "./consts";

type ExpansionMetadata = {
	title: string;
	symbol: string;
};

export const expansionMetadatas: Record<EXPANSION, ExpansionMetadata> = {
	1: { title: "A mirror in the Dark ", symbol: "💏" },
	2: { title: "Total Eclipse of the Sun", symbol: "🌜" },
	3: { title: "Risen from the Mire", symbol: "➕" },
	4: { title: "At the Foundations of the World", symbol: "🌲" },
	5: { title: "Ripples in Time", symbol: "🌀" },
	6: { title: "What Lies Beneath", symbol: "🚇" },
	7: { title: "Frozen in Time", symbol: "❄" },
	8: { title: "Vengeful Sands", symbol: "🏜️" },
	9: { title: "Clockwork Destiny", symbol: "⌛" },
	10: { title: "Darkness Rising", symbol: "💀" },
	11: { title: "Miricelle's Return", symbol: "🚪" },
	12: { title: "Nature’s Wrath", symbol: "🐺" },
	13: { title: "Rotten Roots", symbol: "🦋" },
	14: { title: "Raging Seas", symbol: "🏴‍☠️" },
	15: { title: "Ancient Adversaries", symbol: "🗿" },
};

export type Card = {
	name: string;
	tags: string[];
	cardType: CARD_TYPE;
	expansion: EXPANSION;

	id: string;
	symbol: string;
};

export type Deck = Card[];

export type GameDeck = {
	hero: Deck;
	marcketplace: Deck;
	monster: Deck;
};
