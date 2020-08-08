export * from './state';

export type EXPANSION = '#1'|'#2'|'#3'|'#4'|'#5'|'#6'|'#7'|'#8'|'#9';

export type CARD_TYPE = "weapon" | "magic" | "item" | "hero" | "monster";

export interface CardStore {
  shuffle: Function;
}

export class Card {
  name: string;
  tags: string[];
  card_type: CARD_TYPE;
  expansion: EXPANSION;

  constructor(name: string, tags: string[], card_type: CARD_TYPE, expansion: EXPANSION) {
    this.name = name;
    this.tags = tags;
    this.card_type = card_type;
    this.expansion = expansion;
  }

  id(): string {
    return `${this.card_type}-${this.name}`
  };
}
