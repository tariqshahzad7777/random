const request = require("request");
// const url =
//   "http://api.weatherstack.com/current?access_key=2d19e7187a01a48f30f625bcba38abe5&query=karachi";
// request({ url: url, json: true }, (error, response) => {
//   //const data = JSON.parse(response.body);
//   console.log(response.body);
// });

const weatherupdate = (city, callback) => {
  setTimeout(() => {
    const url =
      "http://api.weatherstack.com/current?access_key=2d19e7187a01a48f30f625bcba38abe5&query=" +
      city +
      "";
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        callback(error, undefined);
      } else {
        callback(undefined, response.body.current);
      }
    });
  }, 2000);
};

weatherupdate("delhi", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };

// add(1, 2, (sum) => {
//   console.log(sum);
// });
