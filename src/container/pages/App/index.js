import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../../../assets/scss/style.scss";
import { store } from "../../../config/Redux";
import LandingPage from "../LandingPage";
import MovieDetail from "../MovieDetail";
import MoviePage from "../MoviePage";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Route path="/" exact component={LandingPage} />
          <Route path="/movie-page" component={MoviePage} />
          <Route path="/movie-detail/:id" component={MovieDetail} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
