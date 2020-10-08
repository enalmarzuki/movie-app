import React from "react";
import "./Card.scss";

import notFound from "../../../assets/img/icon/il_no_poster.png";
import { withRouter } from "react-router-dom";

function Card({ data, imdmID }) {
  const handleClick = (data) => {
    if (!data.imdbID) {
      return null;
    }
    return imdmID(data.imdbID);
  };

  return (
    <div
      className="card text-white bg-dark rounded"
      onClick={() => handleClick(data)}
    >
      <div className="poster-wrapper">
        <img
          className="card-img-top"
          src={data.Poster == "N/A" ? notFound : data.Poster}
          alt="Poster"
        />
      </div>
      <div className="card-body">
        <h5 className="card-year">{data.Year}</h5>
        <p className="card-text">{data.Title}</p>
      </div>
    </div>
  );
}

export default withRouter(Card);
