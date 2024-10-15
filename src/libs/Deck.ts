export class Deck<T> {
  private _deck: T[] = [];
  private _cursor = 0;

  constructor(deck: T[]) {
    this._deck = deck;
  }

  get deck(): T[] {
    return structuredClone(this._deck);
  }

  drawCard(): T | null {
    const card = this._deck[this._cursor++];
    if (card === undefined) {
      return null;
    }
    return card;
  }

  drawCards(count: number): T[] {
    const cards = this._deck.slice(this._cursor, this._cursor + count);
    this._cursor += count;
    return cards;
  }

  shuffle(): void {
    const array = this.deck;

    // shuffle using Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this._deck = array;

    this._cursor = 0;
  }
}
