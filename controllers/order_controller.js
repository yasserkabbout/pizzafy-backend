const Order = require("../models").order;
const User = require("../models").user;
const OrderItem = require("../models").order_item;

// POST Request to create a new order
const createOrder = (req, res) => {
  //Create the User for the order
  return User.create({
    first_name: req.body.userData.first_name,
    last_name: req.body.userData.last_name,
    email: req.body.userData.email,
    phone_number: req.body.userData.phone_number,
    address: req.body.userData.address
  }).then(User => {
    let createdUserid = User.dataValues.id;

    //Create the Order having the createdUserid as a foreign key referencing users table
    return Order.create({
      user_id: createdUserid,
      status: req.body.status,
      total_price: req.body.total_price
    })
      .then(Order => {
        let createdOrderid = Order.dataValues.id;

        //Create the order item having the createdOrder as a foreign key referencing orders table
        return OrderItem.create({
          order_id: createdOrderid,
          pizza_id: req.body.orderItem.pizza_id,
          size: req.body.orderItem.size,
          quantity: req.body.orderItem.quantity,
          price: req.body.orderItem.price
        });
      })
      .then(OrderItem => res.status(201).send(OrderItem));
  });
};

// GET Request to list all orders in the database
const list = (req, res) => {
  console.log(req.query.status);
  console.log(req.query.userId);
  let status = req.query.status;
  let userId = req.query.userId;

  //Filter order by Status
  if (status !== undefined && userId === undefined) {
    return Order.findAll({
      where: {
        status: status
      }
    })
      .then(Order => res.status(200).send(Order))
      .catch(error => res.status(400).send(error));
  }

  //Filter order by userId
  if (userId !== undefined && status === undefined) {
    return Order.findAll({
      where: {
        user_id: userId
      }
    })
      .then(Order => res.status(200).send(Order))
      .catch(error => res.status(400).send(error));
  }

  //Filter order by staus and userId
  if (userId !== undefined && status !== undefined) {
    return Order.findAll({
      where: {
        user_id: userId,
        status: status
      }
    })
      .then(Order => res.status(200).send(Order))
      .catch(error => res.status(400).send(error));
  }
  if (userId === undefined && status === undefined) {
    return Order.findAll()
      .then(Order => res.status(200).send(Order))
      .catch(error => res.status(400).send(error));
  }
};

// GET Request to get an Order
const getOrderById = (req, res) => {
  let id = req.params.id;

  return Order.findAll({
    where: {
      id: id
    }
  })
    .then(Order => res.status(200).send(Order))
    .catch(error => res.status(400).send(error));
};

// PUT Request to update an Order (Orders in delivered status can not be updated)
const updateOrder = (req, res) => {
  let id = req.params.id;
  let status = req.body.status;

  return Order.findAll({
    where: {
      id: id
    }
  }).then(result => {
    let currentOrderStatus = result[0].dataValues.status;

    //if the order status is "Delivered", return 400
    if (currentOrderStatus.includes("Delivered")) {
      return res.status(400).send("Order in Delivery can not be modified");
    } else {
      return Order.update(
        {
          status: status
        },
        { where: { id: id } }
      )
        .then(result => res.status(200).send(result))
        .catch(error => res.status(400).send(error));
    }
  });
};

// DELETE Request to delete a user
const deleteOrder = (req, res) => {
  let id = req.params.id;

  return Order.destroy({
    where: { id: id }
  })
    .then(Order => res.status(200).send(Order))
    .catch(error => res.status(204).send(error));
};

module.exports = {
  createOrder,
  list,
  getOrderById,
  updateOrder,
  deleteOrder
};
