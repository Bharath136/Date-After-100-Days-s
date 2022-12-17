const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const result = addDays(date, 100);
  response.send(
    `0${result.getDay()}/0${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
app.listen(3000);
