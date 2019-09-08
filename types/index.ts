export * from './state';

export type CARD_TYPE = "weapon" | "magic" | "item" | "hero" | "monster"; 

export interface CardStore {
  shuffle: Function;
}

export class Card {
  name: string;
  tags: string[];
  card_type: CARD_TYPE;

  constructor(name: string, tags: string[], card_type: CARD_TYPE) {
    this.name = name;
    this.tags = tags;
    this.card_type = card_type;
  }

  id(): string {
    return `${this.card_type}-${this.name}`
  };
}