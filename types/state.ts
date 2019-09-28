import { Card } from "~/types";

export type CardState = {
  cards: Card[];
}

export type ExpansionState = {[key: number]: boolean};