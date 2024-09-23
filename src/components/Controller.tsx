import type { ITEM_TYPE } from "../types";
import { useGame, useGameDispatch } from "./GameContext";

const CardController = (props: {
  title: string;
  type?: ITEM_TYPE;
  numOfCard: number;
  dispatch?: ReturnType<typeof useGameDispatch>;
}) => {
  const { title, type, numOfCard, dispatch } = props;

  return (
    <div style={{ display: "inline-block", margin: "4px" }}>
      <div>
        <span style={{ fontSize: "0.7em", color: "gray", fontWeight: "bold" }}>
          {title}
        </span>
      </div>
      <div>
        {dispatch && type ? (
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "change-marketplace",
                card: type,
                number: numOfCard - 1,
              })
            }
          >
            &lt;
          </button>
        ) : null}
        <span
          style={{ fontSize: "1.2em", paddingLeft: "2px", paddingRight: "2px" }}
        >
          {numOfCard}
        </span>
        {dispatch && type ? (
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "change-marketplace",
                card: type,
                number: numOfCard + 1,
              })
            }
          >
            &gt;
          </button>
        ) : null}
      </div>
    </div>
  );
};

export const Controller = () => {
  const game = useGame();
  const dispatch = useGameDispatch();
  return (
    <div>
      <div>
        <CardController
          title="Monster"
          type="weapon"
          numOfCard={game.configMarketplace.numOfWeapons}
          dispatch={dispatch}
        />
        <CardController
          title="Magic"
          type="magic"
          numOfCard={game.configMarketplace.numOfMagics}
          dispatch={dispatch}
        />
        <CardController
          title="Item"
          type="item"
          numOfCard={game.configMarketplace.numOfItems}
          dispatch={dispatch}
        />
        <CardController
          title="Random"
          numOfCard={game.configMarketplace.numOfAny}
        />
      </div>
      <div>
        <button type="submit">Shuffle</button>
        <button type="button">Copy to clipboard</button>
      </div>
    </div>
  );
};
