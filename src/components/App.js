import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Todos } from "./Todos";
import { Header } from "./Header";
import { About } from "./About";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/about" component={About} />
            <Route path="/todos" render={() => <Todos title="Most awesome todolist" />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
