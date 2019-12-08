const Size = require("../models").size;

// POST Request to create a new pizza Size
const createSize = (req, res) => {
    return Size.create({
      name: req.body.name,
      coefficient: req.body.coefficient
    })
      .then(Size => res.status(201).send(Size))
      .catch(error => res.status(400).send(error));
  };
  
  // GET Request to list all pizza Size => size options
  const list = (req, res) => {
    return Size.findAll()
      .then(Size => res.status(200).send(Size))
      .catch(error => res.status(400).send(error));
  };
  
  // GET pizza size by Id
  const getSizeById = (req, res) => {
    let id = req.params.id;
  
    return Size.findAll({
      where: {
        id: id
      }
    })
      .then(Size => res.status(200).send(Size))
      .catch(error => res.status(400).send(error));
  };
  
  // PUT Request to update a pizza size
  const updateSize = (req, res) => {
    let id = req.params.id;
  
    Size.update(
      //this can be changed to a dynamic object (for scaling issues) in the future like fields: Object.keys(req.body)
      {
        name: req.body.name,
        coefficient: req.body.coefficient
      },
      { where: { id: id } }
    )
      .then(Size => res.status(200).send(Size))
      .catch(error => res.status(400).send(error));
  };
  
  // DELETE Request to delete a pizza size
  const deleteSize = (req, res) => {
    let id = req.params.id;
  
    return Size.destroy({
      where: { id: id }
    })
      .then(Size => res.status(200).send(Size))
      .catch(error => res.status(204).send(error));
  };
  
  module.exports = {
    createSize,
    list,
    getSizeById,
    updateSize,
    deleteSize
  };