import React from "react";

import { Todos } from "./Todos";
import { Header } from "./Header";
import { About } from "./About";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Todos />
      </div>
    );
  }

}

export default App;
