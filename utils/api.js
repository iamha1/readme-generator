const axios = require("axios");



function getUser(username) {
  return axios.get(`https://api.github.com/users/${username}`)
    // .then(function (response) {
    //   // handle success
    //   // console.log(response);
    // })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  // console.log(username);
}
module.exports = getUser;
