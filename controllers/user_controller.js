const User = require("../models").user;

// POST Request to create a new user
const createUser = (req, res) => {
  console.log("The first name is: " + req.body.first_name);
  return User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address
  })
    .then(User => {
      console.log(User.dataValues);
      res.status(201).send(User);}
      )
    .catch(error => res.status(400).send(error));
};

// GET Request to list all users in the database
const list = (req, res) => {
  console.log("params is: " + req.query.id);
  return User.findAll()
    .then(User => res.status(200).send(User))
    .catch(error => res.status(400).send(error));
};

// GET Request to get a user
const getUserById = (req, res) => {
  let id = req.params.id;
  console.log("The user id is:", id);

  return User.findAll({
    where: {
      id: id
    }
  })
    .then(User => res.status(200).send(User))
    .catch(error => res.status(400).send(error));
};

// PUT Request to update a user
const updateUser = (req, res) => {
  let id = req.params.id;

  User.update(
    //this can be changed to a dynamic object (for scaling issues) in the future like fields: Object.keys(req.body)
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      address: req.body.address
    },
    { where: { id: id } }
  )
    .then(User => res.status(200).send(User))
    .catch(error => res.status(400).send(error));
};

// DELETE Request to delete a user
const deleteUser = (req, res) => {
  let id = req.params.id;

  return User.destroy({
    where: { id: id }
  })
    .then(User => res.status(200).send(User))
    .catch(error => res.status(204).send(error));
};

module.exports = {
  createUser,
  list,
  getUserById,
  updateUser,
  deleteUser
};
