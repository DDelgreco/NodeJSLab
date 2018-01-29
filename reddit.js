const path = require("path");
const fs = require("fs");
const request = require("request-promise");

let redditArray = [];

let redditPath = path.join(__dirname, "./popular-articles.json");

request("https://reddit.com/r/popular.json", (error, response, body) => {
  if (error) console.log(error);

  JSON.parse(body).data.children.forEach(item => {
    redditArray.push({
      Title: item.data.title,
      URL: item.data.URL,
      Author: item.data.author
    });
    let redditNewArray = JSON.stringify(redditArray);
    fs.writeFile(redditPath, redditNewArray, error => {
      if (error) console.log(error);
    });
  });
});
