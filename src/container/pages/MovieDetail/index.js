import React, { Component } from "react";
import Bintang from "../../../assets/img/icon/ic_bintang.png";
import Card from "../../../components/atoms/Card";

import Fade from "react-reveal/Fade";
import Button from "../../../components/atoms/Button";

import "./MovieDetail.scss";
import { connect } from "react-redux";

class MovieDetail extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    // console.log(this.props.match.params.id);
    const { detailMovie } = this.props;

    if (!detailMovie) {
      return (
        <Fade delay={300}>
          <div>
            <p>You haven't been looking for a movie</p>
            <Button
              title="back"
              className="btn"
              isPrimary
              onClick={() => this.props.history.push("/")}
            />
          </div>
        </Fade>
      );
    }

    let strActors = detailMovie.Actors;
    let arrActors = strActors.split(",");

    let strDetails = detailMovie.Genre;
    let arrDetails = strDetails.split(",");

    // Cari Durasi
    const a = 60;
    let Runtime = detailMovie.Runtime;
    let time = Runtime.split(" ");

    let hours = Math.floor(time[0] / a);
    let result = a * hours;
    let minute = time[0] - result;

    let Duration = `${hours > 0 ? `${hours} hrs` : ""} ${
      minute < 10 ? `0 ${minute}` : minute
    } mins`;

    return (
      <div>
        <div className="container">
          <Fade delay={500}>
            <div className="row hero-detail d-flex align-items-center ">
              <div className="col-md-7 detail-movie-desc">
                <h1 className="detail-movie-title mb-0">{detailMovie.Title}</h1>
                <p>{detailMovie.Year}</p>
                <p className="detail-movie-desc mb-1">{detailMovie.Plot}</p>
                <div className="rating-wrapper">
                  <div className="genre-wrapper">
                    {arrDetails.map((detail, i) => {
                      return (
                        <span
                          className="detail-movie-genre badge badge-pill badge-dark mr-2 py-1 px-2"
                          key={i}
                        >
                          {detail}
                        </span>
                      );
                    })}
                  </div>
                  <div className="img-rating-wrapper">
                    <img src={Bintang} alt="Rating" className="img-rating" />
                    <p className="detail-movie-rating">
                      {detailMovie.imdbRating}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 img-wrapper d-flex">
                <img
                  src={detailMovie.Poster}
                  className="img-poster"
                  alt="Poster"
                />
              </div>
            </div>
          </Fade>
        </div>

        <div className="container">
          <Fade delay={300}>
            <div className="row my-5 ">
              <div className="col-md-12">
                <h2 className="title-detail-movie">Actors</h2>
              </div>
            </div>
          </Fade>
          <div className="row card-wrapper">
            {arrActors.map((actor, index) => {
              let data = {
                Poster:
                  "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
                Title: actor,
              };

              return (
                <Fade delay={500 * index} key={index}>
                  <div className="col-md-4 my-3">
                    <Card data={data} />
                  </div>
                </Fade>
              );
            })}
          </div>

          <Fade delay={2300}>
            <div className="row my-5 ">
              <div className="col-md-12">
                <h2 className="title-detail-movie">Movie Info</h2>
              </div>
            </div>
          </Fade>

          <div className="row title-movie-info w-100">
            <div className="col-md-3 content-movie-info">
              <Fade delay={2400}>
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="movie-info">Title</td>
                      <td>{detailMovie.Title}</td>
                    </tr>
                    <tr>
                      <td className="movie-info">Runtime</td>
                      <td>{Duration}</td>
                    </tr>
                    <tr>
                      <td className="movie-info">Language</td>
                      <td>{detailMovie.Language}</td>
                    </tr>
                    <tr>
                      <td className="movie-info">Production</td>
                      <td>{detailMovie.Production}</td>
                    </tr>
                    <tr>
                      <td className="movie-info">Director</td>
                      <td>{detailMovie.Director}</td>
                    </tr>
                    <tr>
                      <td className="movie-info">Writer</td>
                      <td>{detailMovie.Writer}</td>
                    </tr>
                    <tr>
                      <td className="movie-info">Awards</td>
                      <td>{detailMovie.Awards}</td>
                    </tr>
                    <tr>
                      <td className="movie-info">Released</td>
                      <td>{detailMovie.Released}</td>
                    </tr>
                  </tbody>
                </table>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detailMovie: state.movieDetail,
  };
};

export default connect(mapStateToProps, null)(MovieDetail);
