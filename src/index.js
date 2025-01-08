const express = require("express");
const cors = require("cors");
const RSSParser = require("rss-parser");

const app = express();
app.use(cors());

const rssUrl = "https://www.trthaber.com/ekonomi_articles.rss";

const parser = new RSSParser();
let articles = [];

const parse = async (url) => {
  let counter = 1;
  let feed = null;
  while (feed === null) {
    counter += 1;
    feed = await parser.parseURL(url);
    if (counter > 9) {
      break;
    }
  }
  feed.items.forEach((item) => {
    articles.push(item);
  });
};
parse(rssUrl);

app.get("/", (req, res) => {
  res.send(articles);
});

app.listen(3000, () => {
  console.log("app is listening via port 3000");
});
