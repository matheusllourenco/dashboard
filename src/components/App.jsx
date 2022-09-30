import React from "react";
import SideBar from "./SideBar";
import { Switch, Route } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import Genres from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";
import { NotFound } from "./NotFound";

function App() {
  return (
    <div id="wrapper">
      <SideBar />

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/genres">
          <Genres />
        </Route>
        <Route path="/last-movie">
          <LastMovieInDb />
        </Route>
        <Route path="/content-movies">
          <ContentRowMovies />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
