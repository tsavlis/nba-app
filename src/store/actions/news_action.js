import { GET_NEWS } from "../types";
import axios from "axios";
import { FIREBASEURL, convertFIrebase } from "../../utils/misc";

// export function getNews() {
//   const request = axios({
//     method: "GET",
//     url: `${FIREBASEURL}/news.json`
//   })
//     .then(response => {
//       const articles = convertFIrebase(response.data);

//       return articles;
//     })
//     .catch(e => {
//       return false;
//     });
//   return {
//     type: GET_NEWS,
//     payload: request
//   };
// }

export function getNews() {
  const request = axios({
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/markets?page=1&sparkline=false&per_page=100&order=market_cap_desc&vs_currency=usd`,
    headers: {
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
      "X-RapidAPI-Key": "1f547f950bmshe9e0fc5fe318da5p187dcdjsn602cc0fb835c"
    }
  })
    .then(response => {
      console.log(response);
      const articles = [];
      for (let key in response.data) {
        articles.push({
          ...response.data[key],
          id: key
        });
      }
      return articles;
    })
    .catch(e => {
      return false;
    });
  return {
    type: GET_NEWS,
    payload: request
  };
}
