import React, { Component } from "react";
import Button from "../../../components/atoms/Button";
import Zoom from "react-reveal/Zoom";
import { setKeySearch, getMovieFromAPI } from "../../../config/Redux/action";

import "./LandingPage.scss";
import { connect } from "react-redux";

class LandingPage extends Component {
  state = {
    search: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  searchMovie = async () => {
    let data = this.state.search;
    if (data === "") {
      alert("Anda belum memasukkan judul film");
    } else {
      this.props.KeywordSearch(data);
      await this.props.getMovie("s", data);
      // console.log(data);
      // console.log(movie.Search);
      this.props.history.push("/movie-page");
    }
  };

  render() {
    return (
      <Zoom delay={300}>
        <div className="form-search">
          <p className="form-title">Find Your Favorite Movie</p>
          <input
            type="text"
            className="form-control input-search mb-3"
            name="input-search"
            id="search"
            onChange={this.handleOnChange}
          />
          <Button
            className="btn"
            isPrimary
            title="search"
            onClick={this.searchMovie}
          />
        </div>
      </Zoom>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keySearch: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    KeywordSearch: (keyword) => dispatch(setKeySearch(keyword)),
    getMovie: (typeSearch, keyword) =>
      dispatch(getMovieFromAPI(typeSearch, keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
