const OrderItem = require("../models").order_item;

// POST Request to create a new Order Item
const createOrderItem = (req, res) => {
  return OrderItem.create({
   
  })
    .then(OrderItem => res.status(201).send(OrderItem))
    .catch(error => res.status(400).send(error));
};

// GET Request to list all Order Items in the database
const list = (req, res) => {
  return OrderItem.findAll()
    .then(OrderItem => res.status(200).send(OrderItem))
    .catch(error => res.status(400).send(error));
};

// GET Request to get an Order Item
const getOrderItemById = (req, res) => {
  let id = req.params.id;

  return OrderItem.findAll({
    where: {
      id: id
    }
  })
    .then(OrderItem => res.status(200).send(OrderItem))
    .catch(error => res.status(400).send(error));
};

// PUT Request to update an Order Item
const updateOrderItem = (req, res) => {
  let id = req.params.id;

  OrderItem.update(
 
 
  )
    .then(OrderItem => res.status(200).send(OrderItem))
    .catch(error => res.status(400).send(error));
};

// DELETE Request to delete an OrderItem
const deleteOrderItem = (req, res) => {
  let id = req.params.id;

  return OrderItem.destroy({
    where: { id: id }
  })
    .then(OrderItem => res.status(200).send(OrderItem))
    .catch(error => res.status(204).send(error));
};

module.exports = {
  createOrderItem,
  list,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem
};