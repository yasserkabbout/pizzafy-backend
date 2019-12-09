# pizzafy-backend

## Scripts

In the project directory, you can run:

### `npm install`

Installs all the project's dependencies and packages.


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:5000/api/v1/](http://localhost:5000/api/v1/) to view it in the browser.

## API Routes
```
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
  app.put("/api/v1/orders/:id", order_controller.updateOrder); //Delivered orders can not be updated
  app.delete("/api/v1/orders/:id", order_controller.deleteOrder);

  //Order Item routes (GET POST PUT DELETE)
  app.post("/api/v1/orderitems", order_item_controller.createOrderItem);
  app.get("/api/v1/orderitems", order_item_controller.list);
  app.get("/api/v1/orderitems/:id", order_item_controller.getOrderItemById);
  app.put("/api/v1/orderitems/:id", order_item_controller.updateOrderItem);
  app.delete("/api/v1/orderitems/:id", order_item_controller.deleteOrderItem);
  ```
