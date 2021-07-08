const express = require("express");

const app = express();

require("./src/route/blogposts.route")(app);
require("./src/route/user.route")(app);
require('./src/route/todos.route')(app);

app.listen(3000, function () {
  console.log("Blog post activity is listening on port 3000");
});

app.get("/", function (req, res) {
  res.send("This is the top route in the Blog Post API");
});
