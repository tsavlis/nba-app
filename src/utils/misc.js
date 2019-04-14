import AsyncStorage from "@react-native-community/async-storage";

export const FIREBASEURL = "https://rn-nba.firebaseio.com";
export const APIKEY = "AIzaSyBwpCF81gCXC21F0nj4jhjRnzP734YZFX8";
export const SIGNUP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${APIKEY}`;
export const SIGNIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;
export const APIKEY2 = `25470e1aac5b44b889cf7bc59276e55a
`;
export const setTokens = (values, cb) => {
  const dateNow = new Date();
  const expiration = dateNow.getTime() + 3600 * 1000;

  AsyncStorage.multiSet([
    ["@nba_app@token", values.token],
    ["@nba_app@refreshToken", values.refToken],
    ["@nba_app@expireToken", expiration.toString()],
    ["@nba_app@uid", values.uid]
  ]).then(response => {
    cb();
  });
};

export const getTokens = cb => {
  AsyncStorage.multiGet([
    "@nba_app@token",
    "@nba_app@refreshToken",
    "@nba_app@expireToken",
    "@nba_app@uid"
  ]).then(value => {
    cb(value);
  });
};

export const convertFIrebase = data => {
  const newData = [];
  for (let key in data) {
    newData.push({
      ...data[key],
      id: key
    });
  }
  return newData;
};

export const findTeamData = (Id, teams) => {
  const value = teams.find(team => {
    return team.id === Id;
  });
  return value;
};
