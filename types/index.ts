import { expansionMetadatas } from "~/plugins/thunderStoneQuestMetadata";
export * from "./state";

<<<<<<< HEAD
export type EXPANSION = '#1'|'#2'|'#3'|'#4'|'#5'|'#6'|'#7'|'#8'|'#9' | '#10' | '#11';
=======
export type EXPANSION = "#1" | "#2" | "#3" | "#4" | "#5" | "#6" | "#7" | "#8" | "#9";
>>>>>>> origin/master

export type ITEM_TYPE = "weapon" | "magic" | "item";
export type CARD_TYPE = ITEM_TYPE | "hero" | "monster";

/* eslint-disable @typescript-eslint/ban-types */
export interface CardStore {
  shuffle: Function;
}

export class Card {
  name: string;
  tags: string[];
  cardType: CARD_TYPE;
  expansion: EXPANSION;

  constructor(name: string, tags: string[], cardType: CARD_TYPE, expansion: EXPANSION) {
    this.name = name;
    this.tags = tags;
    this.cardType = cardType;
    this.expansion = expansion;
  }

  id(): string {
    return `${this.cardType}-${this.name}`;
  }

  symbol(): string {
    const expansionSymbol = expansionMetadatas[Number(this.expansion.replace("#", ""))];
    if (!expansionSymbol) return "";
    return expansionSymbol.symbol;
  }
}
