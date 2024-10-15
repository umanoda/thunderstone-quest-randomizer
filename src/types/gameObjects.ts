import type { CARD_TYPE, EXPANSION } from "./consts";

export type ExpansionMetadata = {
  title: string;
  symbol: string;
  deck: GameDeck;
};

export type Card = {
  name: string;
  tags: string[];
  cardType: CARD_TYPE;
  expansion: EXPANSION;

  // Auxiliary information
  id: string;
  symbol: string;
};

export type Deck = Card[];

export type GameDeck = {
  hero: Deck;
  marketplace: Deck;
  monster: Deck;
};
