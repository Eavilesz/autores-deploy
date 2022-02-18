const { response, request } = require("express");
const { Author } = require("../models/author.model");

//Esto es para imprimir todos los documentos de la coleccion
module.exports.findAllAuthors = (request, response) => {
  Author.find()
    .then((allAuthors) => response.json({ author: allAuthors }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};

//Esto es para que muestre los detalles de un autor en particular
module.exports.getAuthor = (request, response) => {
  Author.findOne({ _id: request.params.id })
    .then((author) => response.json(author))
    .catch((err) => response.json(err));
};

module.exports.createAuthor = (request, response) => {
  const { name } = request.body;
  Author.create({
    name,
  })
    .then((author) => response.json(author))
    .catch((err) => response.status(400).json(err));
};

module.exports.updateAuthor = (request, response) => {
  Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true, //Esto enciende las validaciones en la edicion de un documento
  })
    .then((updateAuthor) => response.json(updateAuthor))
    .catch((err) => response.status(400).json(err));
};

module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
