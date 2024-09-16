import type { EXPANSION } from "./consts";

export type ConfigMarcketplaceState = {
	numOfWeapons: number;
	numOfMagics: number;
	numOfItems: number;
	numOfAny: number;
};

export type ConfigExpansion = Record<EXPANSION, boolean>;
