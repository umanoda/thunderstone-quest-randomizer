import { expect, test } from "vitest";
import { Deck } from "./Deck";

test("new", () => {
  // blank
  expect(new Deck<string>([]).deck).toStrictEqual([]);
  // native type array
  expect(new Deck<number>([1, 2, 3, 100]).deck).toStrictEqual([1, 2, 3, 100]);
  // object array
  expect(
    new Deck<{ [k: string]: number }>([{ a: 1 }, { a: 2 }, { b: 3 }, { c: 4 }])
      .deck,
  ).toStrictEqual([{ a: 1 }, { a: 2 }, { b: 3 }, { c: 4 }]);
});

test("#drawCard", () => {
  const deck = new Deck<number>([1, 2, 3, 100]);
  expect(deck.drawCard()).toBe(1);
  expect(deck.drawCard()).toBe(2);
  expect(deck.drawCard()).toBe(3);
  expect(deck.drawCard()).toBe(100);
  expect(deck.drawCard()).toBe(null);
  expect(deck.drawCard()).toBe(null);
});

test("#drawCards", () => {
  const deck = new Deck<number>([1, 2, 3, 100]);
  expect(deck.drawCards(2)).toStrictEqual([1, 2]);
  expect(deck.drawCards(4)).toStrictEqual([3, 100]);
  expect(deck.drawCards(1)).toStrictEqual([]);

  const deck2 = new Deck<number>([1, 2, 3, 100]);
  expect(deck2.drawCards(0)).toStrictEqual([]);
  expect(deck2.drawCards(1)).toStrictEqual([1]);
});

test("#shuffle", () => {
  const deck = new Deck<number>([1, 2, 3, 100]);

  deck.shuffle();

  expect(deck.deck).not.toStrictEqual([1, 2, 3, 100]);
  expect(deck.deck.length).toBe(4);
  // include all elements
  for (const n of [1, 2, 3, 100]) {
    expect(deck.deck).toContain(n);
  }

  // reset cursor with shuffle
  expect(deck.drawCards(5).length).toBe(4);
  expect(deck.drawCards(5).length).toBe(0);
  deck.shuffle();
  expect(deck.drawCards(5).length).toBe(4);
});
