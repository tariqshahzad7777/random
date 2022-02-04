const express = require("express");
const path = require("path");
const hbs = require("hbs");
const res = require("express/lib/response");
const request = require("request");
const forecast = require("../express/utils");
const app = express();

//console.log(__dirname);
// console.log(__filename);

// const dirpath = path.join(__dirname, "../public");
// console.log(dirpath);

app.set("view engine", "hbs");
const partialpath = path.join(__dirname, "/partials");
hbs.registerPartials(partialpath);
// app.use(express.static(dirpath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Home Weather App",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Weather App",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.search) {
    return res.send("<h1>Enter a search term</h1>");
  }
  forecast(req.query.search, (error, data) => {
    if (error) {
      return res.send(error);
    } else {
      return res.send({
        title: "Weather App",
        data,
        location: req.query.search,
      });
    }
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errortext: "Sorry the page does not exists",
  });
});

// app.get("/about", (req, res) => {
//   res.send("About page");
// });
// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });
// app.get("/weather", (req, res) => {
//   res.send({
//     name: "Weather",
//     age: "23*c",
//   });
// });

app.listen(4000, () => {
  console.log("Server is up and running");
});
