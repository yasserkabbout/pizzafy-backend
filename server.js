const express = require("express");
const bodyParser = require("body-parser");
//const db = require("./models/index");
const app = express();
const PORT = process.env.PORT || 5000;

//TODO add database variables in config.json to ENV file
//db.sequelize.sync({ force: true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Allow all cors origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Load the routes into the server
require("./routes")(app);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to Pizzafy!"
  })
);

app.listen(PORT, () => console.log("Pizaafy listening on port " + PORT));

module.exports = {
  app
};
