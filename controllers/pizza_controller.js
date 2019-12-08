const Pizza = require("../models").pizza;

// POST Request to create a new pizza
const createPizza = (req, res) => {
  return Pizza.create({
    type: req.body.type,
    description: req.body.description,
    ingredients: req.body.ingredients,
    base_price: req.body.base_price
  })
    .then(Pizza => res.status(201).send(Pizza))
    .catch(error => res.status(400).send(error));
};

// GET Request to list all pizzas in the database
const list = (req, res) => {
  return Pizza.findAll()
    .then(Pizza => res.status(200).send(Pizza))
    .catch(error => res.status(400).send(error));
};

// GET Request to get a pizza
const getPizzaById = (req, res) => {
  let id = req.params.id;

  return Pizza.findAll({
    where: {
      id: id
    }
  })
    .then(Pizza => res.status(200).send(Pizza))
    .catch(error => res.status(400).send(error));
};

// PUT Request to update a pizza
const updatePizza = (req, res) => {
  let id = req.params.id;

  Pizza.update(
    //this can be changed to a dynamic object (for scaling issues) in the future like fields: Object.keys(req.body)
    {
      type: req.body.type,
      description: req.body.description,
      ingredients: req.body.ingredients,
      base_price: req.body.base_price
    },
    { where: { id: id } }
  )
    .then(Pizza => res.status(200).send(Pizza))
    .catch(error => res.status(400).send(error));
};

// DELETE Request to delete a user
const deletePizza = (req, res) => {
  let id = req.params.id;

  return Pizza.destroy({
    where: { id: id }
  })
    .then(Pizza => res.status(200).send(Pizza))
    .catch(error => res.status(204).send(error));
};

module.exports = {
  createPizza,
  list,
  getPizzaById,
  updatePizza,
  deletePizza
};
