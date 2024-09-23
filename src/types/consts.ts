export type EXPANSION =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15';

export type ITEM_TYPE = "weapon" | "magic" | "item";
export type CARD_TYPE = ITEM_TYPE | "hero" | "monster";

type ExpansionMetadata = {
  title: string;
  symbol: string;
};

export const EXPANSIONS: Record<EXPANSION, ExpansionMetadata> = {
  1: { title: "A mirror in the Dark ", symbol: "💏"},
  2: { title: "Total Eclipse of the Sun", symbol: "🌜"},
  3: { title: "Risen from the Mire", symbol: "➕"},
  4: { title: "At the Foundations of the World", symbol: "🌲"},
  5: { title: "Ripples in Time", symbol: "🌀"},
  6: { title: "What Lies Beneath", symbol: "🚇"},
  7: { title: "Frozen in Time", symbol: "❄"},
  8: { title: "Vengeful Sands", symbol: "🏜️"},
  9: { title: "Clockwork Destiny", symbol: "⌛"},
  10: { title: "Darkness Rising", symbol: "💀"},
  11: { title: "Miricelle's Return", symbol: "🚪"},
  12: { title: "Nature’s Wrath", symbol: "🐺"},
  13: { title: "Rotten Roots", symbol: "🦋"},
  14: { title: "Raging Seas", symbol: "🏴‍☠️"},
  15: { title: "Ancient Adversaries", symbol: "🗿"},
};
