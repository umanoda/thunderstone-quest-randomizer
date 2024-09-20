import { Component } from "react";

import { Controller } from "./components/Controller";
import { GameConfigure } from "./components/GameConfigure";
import { Result } from "./components/Result";

class App extends Component {
  render() {
    return (
      <div>
        <GameConfigure />
        <Controller />
        <Result />
      </div>
    );
  }
}

export default App;
