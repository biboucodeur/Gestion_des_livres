const Book = require("../models/bookModel");

const createBook = (req, res) => {
  const { title, author, description } = req.body;

  if (!title || !author)
    return res.status(400).json({ message: "Titre et auteur requis." });

  Book.createBook(title, author, description, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur serveur." });
    res.status(201).json({ message: "Livre ajouté." });
  });
};

const getAllBooks = (req, res) => {
  Book.getAllBooks((err, results) => {
    if (err) return res.status(500).json({ message: "Erreur serveur." });
    res.json(results);
  });
};

const getBookById = (req, res) => {
  const id = req.params.id;
  Book.getBookById(id, (err, results) => {
    if (err) return res.status(500).json({ message: "Erreur serveur." });
    if (results.length === 0)
      return res.status(404).json({ message: "Livre non trouvé." });
    res.json(results[0]);
  });
};

const updateBook = (req, res) => {
  const id = req.params.id;
  const { title, author, description } = req.body;

  Book.updateBook(id, title, author, description, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur serveur." });
    res.json({ message: "Livre modifié." });
  });
};

const deleteBook = (req, res) => {
  const id = req.params.id;

  Book.deleteBook(id, (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur serveur." });
    res.json({ message: "Livre supprimé." });
  });
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
