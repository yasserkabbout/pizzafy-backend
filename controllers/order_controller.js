const Order = require("../models").order;

// POST Request to create a new order
const createOrder = (req, res) => {
  return Order.create({})
    .then(Order => res.status(201).send(Order))
    .catch(error => res.status(400).send(error));
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
      type: req.body.type,
      description: req.body.description,
      ingredients: req.body.ingredients,
      base_price: req.body.base_price
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
