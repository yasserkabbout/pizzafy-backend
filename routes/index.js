const user_controller = require("../controllers").user_controller;
const pizza_controller = require("../controllers").pizza_controller;
const size_controller = require("../controllers").size_controller;

module.exports = app => {
  app.get("/api/v1/", (req, res) =>
    res.status(200).send({
      message: "Welcome to Pizzafy API"
    })
  );

  //User routes (GET POST PUT DELETE)
  app.post("/api/v1/users", user_controller.createUser);
  app.get("/api/v1/users/", user_controller.list);
  app.get("/api/v1/users/:id", user_controller.getUserById);
  app.put("/api/v1/users/:id", user_controller.updateUser);
  app.delete("/api/v1/users/:id", user_controller.deleteUser);

  //Pizza routes (GET POST PUT DELETE)
  app.post("/api/v1/pizzas", pizza_controller.createPizza);
  app.get("/api/v1/pizzas", pizza_controller.list);
  app.get("/api/v1/pizzas/:id", pizza_controller.getPizzaById);
  app.put("/api/v1/pizzas/:id", pizza_controller.updatePizza);
  app.delete("/api/v1/pizzas/:id", pizza_controller.deletePizza);

  //Pizza Size routes (GET POST PUT DELETE)
  app.post("/api/v1/pizzasizes", size_controller.createSize);
  app.get("/api/v1/pizzasizes/", size_controller.list);
  app.get("/api/v1/pizzasizes/:id", size_controller.getSizeById);
  app.put("/api/v1/pizzasizes/:id", size_controller.updateSize);
  app.delete("/api/v1/pizzasizes/:id", size_controller.deleteSize);
};
