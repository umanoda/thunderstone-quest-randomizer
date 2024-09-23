export type EXPANSION =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;

export type ITEM_TYPE = "weapon" | "magic" | "item";
export type CARD_TYPE = ITEM_TYPE | "hero" | "monster";

type ExpansionMetadata = {
  number: number;
  title: string;
  symbol: string;
};

export const EXPANSIONS: ExpansionMetadata[] = [
  { number: 1, title: "A mirror in the Dark ", symbol: "💏" },
  { number: 2, title: "Total Eclipse of the Sun", symbol: "🌜" },
  { number: 3, title: "Risen from the Mire", symbol: "➕" },
  { number: 4, title: "At the Foundations of the World", symbol: "🌲" },
  { number: 5, title: "Ripples in Time", symbol: "🌀" },
  { number: 6, title: "What Lies Beneath", symbol: "🚇" },
  { number: 7, title: "Frozen in Time", symbol: "❄" },
  { number: 8, title: "Vengeful Sands", symbol: "🏜️" },
  { number: 9, title: "Clockwork Destiny", symbol: "⌛" },
  { number: 10, title: "Darkness Rising", symbol: "💀" },
  { number: 11, title: "Miricelle's Return", symbol: "🚪" },
  { number: 12, title: "Nature’s Wrath", symbol: "🐺" },
  { number: 13, title: "Rotten Roots", symbol: "🦋" },
  { number: 14, title: "Raging Seas", symbol: "🏴‍☠️" },
  { number: 15, title: "Ancient Adversaries", symbol: "🗿" },
];
