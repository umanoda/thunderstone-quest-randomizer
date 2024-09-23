import type { EXPANSION } from "./consts";

export type ConfigGame = {
  configExpansion: ConfigExpansion;
  configMarketplace: ConfigMarketplace;
}

export type ConfigMarketplace = {
  numOfWeapons: number;
  numOfMagics: number;
  numOfItems: number;
  numOfAny: number;
};

export type ConfigExpansion = Record<EXPANSION, boolean>;
