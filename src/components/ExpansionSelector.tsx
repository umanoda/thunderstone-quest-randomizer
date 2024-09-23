import { type EXPANSION, EXPANSIONS } from "../types";
import { useGame, useGameDispatch } from "./GameContext";

const SelectExpansionCheckbox = ({
  expansionNumber,
  checked,
  dispatch,
}: {
  expansionNumber: EXPANSION;
  checked: boolean;
  dispatch: ReturnType<typeof useGameDispatch>;
}) => {
  const expansion = EXPANSIONS.find((exp) => exp.number === expansionNumber);
  if (!expansion) return;

  return (
    <div>
      <label style={{ gap: "2px", cursor: "pointer" }}>
        <input
          type="checkbox"
          defaultChecked={checked}
          onClick={() => {
            dispatch({
              type: "change-expansion",
              expansion: expansionNumber,
              check: !checked,
            });
          }}
        />
        <span>{expansion.symbol}</span>
        <span style={{ fontWeight: "bold", fontSize: "0.7em", color: "gray" }}>
          #{expansionNumber}
        </span>
        <span>{expansion.title}</span>
      </label>
    </div>
  );
};

export const ExpansionSelector = () => {
  const game = useGame();
  const dispatch = useGameDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: "check-all-expansion" })}
      >
        All
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "uncheck-all-expansion" })}
      >
        Clear
      </button>
      {Object.entries(game.configExpansion).map(([key, v]) => {
        return (
          <SelectExpansionCheckbox
            key={key}
            dispatch={dispatch}
            checked={v}
            expansionNumber={Number(key) as EXPANSION}
          />
        );
      })}
    </div>
  );
};
