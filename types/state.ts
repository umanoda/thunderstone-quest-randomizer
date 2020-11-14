import { Card } from "~/types";

export type RootState = {
  hero: CardState;
  marcketplace: CardState;
  monster: CardState;
  expansion: ExpansionState;
  configMarcketplace: ConfigMarcketplaceState;
}

export type CardState = {
  cards: Card[];
}

export type ConfigMarcketplaceState = {
  numOfWeapons: number,
  numOfMagics: number,
  numOfItems: number,
  numOfAny: number,
};

export type ExpansionState = {[key: number]: boolean};
