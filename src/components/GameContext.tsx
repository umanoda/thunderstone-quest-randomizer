import {
  type Dispatch,
  type FC,
  type ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

import type {
  ConfigGame,
  ConfigMarketplace,
  EXPANSION,
  ITEM_TYPE,
} from "../types";

type ProviderProp = {
  children: ReactNode;
};

type ActionChangeExpansion = {
  type: "change-expansion";
  expansion: EXPANSION;
  check: boolean;
};

type ActionCheckAllExpansion = {
  type: "check-all-expansion";
};

type ActionUncheckAllExpansion = {
  type: "uncheck-all-expansion";
};

type ActionChangeMarketplace = {
  type: "change-marketplace";
  card: ITEM_TYPE;
  number: number;
};

type Action =
  | ActionChangeExpansion
  | ActionCheckAllExpansion
  | ActionUncheckAllExpansion
  | ActionChangeMarketplace;

const initGameConfig = {
  configExpansion: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
  },
  configMarketplace: {
    numOfWeapons: 3,
    numOfMagics: 3,
    numOfItems: 2,
    numOfAny: 0,
  },
};
const GameContext = createContext<ConfigGame>(initGameConfig);
const GameDispatchContext = createContext<Dispatch<Action>>(
  {} as Dispatch<Action>
);

export const useGame = () => useContext(GameContext);
export const useGameDispatch = () => useContext(GameDispatchContext);

const nextMarketplace = (
  oldMarketplace: ConfigMarketplace,
  changeType: ITEM_TYPE,
  numOfCard: number
): ConfigMarketplace => {
  let numOfWeapons = oldMarketplace.numOfWeapons;
  let numOfMagics = oldMarketplace.numOfMagics;
  let numOfItems = oldMarketplace.numOfItems;
  switch (changeType) {
    case "weapon":
      numOfWeapons = numOfCard;
      break;
    case "magic":
      numOfMagics = numOfCard;
      break;
    case "item":
      numOfItems = numOfCard;
      break;
  }
  const numOfAny = 8 - numOfWeapons - numOfMagics - numOfItems;

  // 全体の数が8枚を超えるなら更新させない
  if (numOfAny < 0 || numOfItems < 0 || numOfMagics < 0 || numOfWeapons < 0) {
    return oldMarketplace;
  }

  return {
    numOfWeapons,
    numOfMagics,
    numOfItems,
    numOfAny,
  };
};

const gameReducer = (game: ConfigGame, action: Action): ConfigGame => {
  switch (action.type) {
    case "change-expansion":
      return {
        configExpansion: Object.fromEntries(
          Object.entries(game.configExpansion).map(([key, v]) => {
            if (key === String(action.expansion)) {
              return [key, action.check];
            }
            return [key, v];
          })
        ) as Record<EXPANSION, boolean>,
        configMarketplace: game.configMarketplace,
      };
    case "check-all-expansion":
      return {
        configExpansion: Object.fromEntries(
          Object.entries(game.configExpansion).map(([key, _]) => [key, true])
        ) as Record<EXPANSION, boolean>,
        configMarketplace: game.configMarketplace,
      };
    case "uncheck-all-expansion":
      return {
        configExpansion: Object.fromEntries(
          Object.entries(game.configExpansion).map(([key, _]) => [key, false])
        ) as Record<EXPANSION, boolean>,
        configMarketplace: game.configMarketplace,
      };
    case "change-marketplace":
      return {
        configExpansion: game.configExpansion,
        configMarketplace: nextMarketplace(
          game.configMarketplace,
          action.card,
          action.number
        ),
      };
    default:
      return game;
  }
};

export const GameProvider: FC<ProviderProp> = ({ children }) => {
  const [game, dispatch] = useReducer(gameReducer, initGameConfig);

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
};
