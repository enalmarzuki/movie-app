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

    return (
      <div>
        <Fade>
          <div className="container">
            <Fade delay={500}>
              <div className="row hero-detail d-flex align-items-center ">
                <div className="col-md-7 ">
                  <h1 className="detail-movie-title mb-4">
                    {detailMovie.Title}
                  </h1>
                  <p className="detail-movie-desc mb-3">{detailMovie.Plot}</p>
                  <div className="rating-wrapper">
                    <p className="detail-movie-genre">{detailMovie.Genre}</p>
                    <img src={Bintang} alt="Rating" className="img-rating" />
                    <p className="detail-movie-rating">
                      {detailMovie.imdbRating}
                    </p>
                  </div>
                </div>
                <div className="col-md-5 img-wrapper d-flex">
                  <img
                    src={detailMovie.Poster}
                    className="img-poster ml-auto"
                    alt="Poster"
                  />
                </div>
              </div>
            </Fade>
          </div>

          <div className="container">
            <Fade bottom delay={300}>
              <div className="row my-5 ">
                <div className="col-md-12">
                  <h1>Actors</h1>
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
                  <div className="col-md-4 my-3 " key={index}>
                    <Fade delay={500 * index}>
                      <Card data={data} isHide={true} />
                    </Fade>
                  </div>
                );
              })}
            </div>
          </div>
        </Fade>
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
