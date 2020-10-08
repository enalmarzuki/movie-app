import axios from "axios";

const Get = (typeSearch, keyword) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(`http://www.omdbapi.com/?apikey=5c1e9090&${typeSearch}=${keyword}`)
      .then(
        (res) => {
          // console.log(res.data.Search);
          // this.setState({
          //   data: res.data.Search,
          // });
          resolve(res.data);
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );
  });
  return promise;
};

export default Get;
