import React from "react";

import { Todos } from "./Todos";
import { Header } from "./Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Todos />
      </div>
    );
  }

}

export default App;
