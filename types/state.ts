import { Card } from "~/types";

export type RootState = {
  hero: CardState;
  marcketplace: CardState;
  monster: CardState;
  expansion: ExpansionState;
}

export type CardState = {
  cards: Card[];
}

export type ExpansionState = {[key: number]: boolean};
