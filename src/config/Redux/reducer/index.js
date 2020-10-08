const initialState = {
  search: "",
  movies: [],
  movieDetail: "",
  imdbId: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "KEYWORD_SEARCH":
      return {
        ...state,
        search: action.value,
      };

    case "GET_MOVIES":
      return {
        ...state,
        movies: action.value,
      };

    case "GET_DETAIL_MOVIES":
      return {
        ...state,
        movieDetail: action.value,
      };

    case "SET_IMDBID":
      return {
        ...state,
        imdbId: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
