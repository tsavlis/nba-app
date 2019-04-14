import { GET_GAMES } from "../types";
import axios from "axios";
import { FIREBASEURL, convertFIrebase, findTeamData } from "../../utils/misc";

// export function getGames() {
//   const promise = new Promise((resolve, reject) => {
//     const request = axios({
//       method: "GET",
//       url: `${FIREBASEURL}/teams.json`
//     })
//       .then(response => {
//         const teams = convertFIrebase(response.data);
//         axios({
//           method: "GET",
//           url: `${FIREBASEURL}/games.json`
//         }).then(response => {
//           const articles = convertFIrebase(response.data);
//           const responseData = [];
//           for (let key in articles) {
//             responseData.push({
//               ...articles[key],
//               awayData: findTeamData(articles[key].away, teams),
//               localData: findTeamData(articles[key].local, teams)
//             });
//           }
//           resolve(responseData);
//         });
//       })
//       .catch(e => {
//         reject(false);
//       });
//   });
//   return {
//     type: GET_GAMES,
//     payload: promise
//   };
// }
export function getGames() {
  const request = axios({
    method: "GET",
    url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25470e1aac5b44b889cf7bc59276e55a`
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
    type: GET_GAMES,
    payload: request
  };
}

const url =
  "https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-14&sortBy=publishedAt&apiKey=25470e1aac5b44b889cf7bc59276e55a";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
