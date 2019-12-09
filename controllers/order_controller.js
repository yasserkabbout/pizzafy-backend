const Order = require("../models").order;
const User = require("../models").user;
const OrderItem = require("../models").order_item;

// POST Request to create a new order
const createOrder = (req, res) => {
  
  return User.create({
    first_name: req.body.userData.first_name,
    last_name: req.body.userData.last_name,
    email: req.body.userData.email,
    phone_number: req.body.userData.phone_number,
    address: req.body.userData.address
  })
    .then(User => {
      let createdUserid = User.dataValues.id;
      return Order.create({
        user_id: createdUserid,
        status: req.body.status,
        total_price: req.body.total_price
        
      }).then(Order => {
        let createdOrderid = Order.dataValues.id;
        return OrderItem.create({
          order_id: createdOrderid,
          pizza_id: req.body.orderItem.pizza_id,
          size: req.body.orderItem.size,
          quantity: req.body.orderItem.quantity,
          price: req.body.orderItem.price

        })
      }).then(OrderItem => res.status(201).send(OrderItem))
      
    })
 
};

// GET Request to list all orders in the database
const list = (req, res) => {
  return Order.findAll()
    .then(Order => res.status(200).send(Order))
    .catch(error => res.status(400).send(error));
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

// PUT Request to update an Order
const updateOrder = (req, res) => {
  let id = req.params.id;

  Order.update(
    //this can be changed to a dynamic object (for scaling issues) in the future like fields: Object.keys(req.body)
    {
      status: req.body.status
    },
    { where: { id: id } }
  )
    .then(Order => res.status(200).send(Order))
    .catch(error => res.status(400).send(error));
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
