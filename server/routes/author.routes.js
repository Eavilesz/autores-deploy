const AuthorController = require("../controllers/author.controller");

module.exports = function (app) {
  app.get("/api", AuthorController.createAuthor);
  app.get("/api/all-authors", AuthorController.findAllAuthors);
  app.get("/api/author/:id", AuthorController.getAuthor);
  app.post("/api/author", AuthorController.createAuthor);
  app.put("/api/author/:id", AuthorController.updateAuthor);
  app.delete("/api/author/:id", AuthorController.deleteAuthor);
};
