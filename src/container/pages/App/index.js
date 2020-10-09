import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../../../assets/scss/style.scss";
import { store } from "../../../config/Redux";
import LandingPage from "../LandingPage";
import MovieDetail from "../MovieDetail";
import MoviePage from "../MoviePage";
// import Header from "../../../components/atoms/Header";
import "./App.scss";

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          {/* <Header {...props}></Header> */}
          <Route path="/" exact component={LandingPage} />
          <Route path="/movie-page" component={MoviePage} />
          <Route path="/movie-detail/:id" component={MovieDetail} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
