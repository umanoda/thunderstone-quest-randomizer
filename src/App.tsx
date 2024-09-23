import { Component, StrictMode } from "react";

import { Controller } from "./components/Controller";
import { ExpansionSelector } from "./components/ExpansionSelector";
import { GameProvider } from "./components/GameContext";
import { Result } from "./components/Result";

class App extends Component {
  render() {
    return (
      <StrictMode>
        <GameProvider>
          <section>
            <ExpansionSelector />
            <Controller />
          </section>
          <hr />
          <section>
            <h2>Result</h2>
            <Result />
          </section>
        </GameProvider>
      </StrictMode>
    );
  }
}

export default App;
