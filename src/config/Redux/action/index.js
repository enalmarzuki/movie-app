import axios from "axios";

export const setKeySearch = (keyword) => (dispatch) => {
  return dispatch({ type: "KEYWORD_SEARCH", value: keyword });
};

export const getMovieFromAPI = (typeSearch, keyword) => (dispatch) => {
  return new Promise((resolve, reject) => {
    if (typeSearch === "s") {
      axios
        .get(`http://www.omdbapi.com/?apikey=5c1e9090&${typeSearch}=${keyword}`)
        .then(
          (res) => {
            resolve(res.data);
            dispatch({ type: "GET_MOVIES", value: res.data.Search });
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    } else {
      axios
        .get(`http://www.omdbapi.com/?apikey=5c1e9090&${typeSearch}=${keyword}`)
        .then(
          (res) => {
            resolve(res.data);
            dispatch({ type: "GET_DETAIL_MOVIES", value: res.data });
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    }
  });
};

export const setImdbId = (imdbId) => (dispatch) => {
  return dispatch({ type: "SET_IMDBID", value: imdbId });
};
