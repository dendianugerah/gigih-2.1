const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("About Page");
})

app.use((req, res) => {
    res.status(404).send("404 Not Founddddddd");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
