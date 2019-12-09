const user_controller = require("../controllers").user_controller;
const pizza_controller = require("../controllers").pizza_controller;
const size_controller = require("../controllers").size_controller;
const order_controller = require("../controllers").order_controller;
const order_item_controller = require("../controllers").order_item_controller;

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

  //Order routes (GET POST PUT DELETE)
  app.post("/api/v1/orders", order_controller.createOrder);
  app.get("/api/v1/orders", order_controller.list); //Provide userId or status as query parameters to filter the orders
  app.get("/api/v1/orders/:id", order_controller.getOrderById);
  app.put("/api/v1/orders/:id", order_controller.updateOrder);
  app.delete("/api/v1/orders/:id", order_controller.deleteOrder);

  //Order Item routes (GET POST PUT DELETE)
  app.post("/api/v1/orderitems", order_item_controller.createOrderItem);
  app.get("/api/v1/orderitems", order_item_controller.list); 
  app.get("/api/v1/orderitems/:id", order_item_controller.getOrderItemById);
  app.put("/api/v1/orderitems/:id", order_item_controller.updateOrderItem);
  app.delete("/api/v1/orderitems/:id", order_item_controller.deleteOrderItem);
};
