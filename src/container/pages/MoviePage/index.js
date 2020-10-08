import React, { Component } from "react";
import { connect } from "react-redux";
import { setImdbId, getMovieFromAPI } from "../../../config/Redux/action";
import Card from "../../../components/atoms/Card";

import Fade from "react-reveal/Fade";
import "./MoviePage.scss";
import Button from "../../../components/atoms/Button";

class MoviePage extends Component {
  state = {
    data: [],
  };

  getImdbId = async (id) => {
    this.props.keyImdbId(id);
    const detailMovie = await this.props.getMovieDetail("i", id);
    console.log("Detail Movie", detailMovie);
    this.props.history.push(`/movie-detail/${id}`);
  };

  render() {
    // console.log(this.props);
    const { keySearch, history, movies } = this.props;
    // console.log(movies);
    if (keySearch === "") {
      return (
        <Fade delay={300}>
          <div>
            <p>You haven't been looking for a movie</p>
            <Button
              title="back"
              className="btn"
              isPrimary
              onClick={() => history.goBack()}
            />
          </div>
        </Fade>
      );
    }

    if (movies) {
      return (
        <div className="container my-3">
          <p>Search Results "{keySearch}"</p>
          <div className="row">
            {movies.map((movie, i) => {
              return (
                <div className="col-md-4 my-3" key={i} id="card-wrapper">
                  <Fade delay={300 * i}>
                    <Card
                      data={movie}
                      imdmID={(id) => this.getImdbId(id)}
                      isHide={false}
                    />
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <Fade delay={300}>
        <div>
          <p>"{keySearch}" Not Found</p>
          <Button
            title="back"
            className="btn"
            isPrimary
            onClick={() => history.goBack()}
          />
        </div>
      </Fade>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keySearch: state.search,
    movies: state.movies,
    imdbId: state.imdbId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    keyImdbId: (imdbId) => dispatch(setImdbId(imdbId)),
    getMovieDetail: (typeSearch, keyword) =>
      dispatch(getMovieFromAPI(typeSearch, keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
