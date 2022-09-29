import React from "react";
import SideBar from "./SideBar";
import { Switch, Route } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";

function App() {
  return (
    <div id="wrapper">
      <SideBar />

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/dashboard">
          <h1>Teste</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
