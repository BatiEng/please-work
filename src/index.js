const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("batikan ocal");
});

app.listen(3000, () => {
  console.log("app is listening via port 3000");
});
