const db = require("../config/db");

// Créer un livre
const createBook = (title, author, description, callback) => {
  const sql = "INSERT INTO books (title, author, description) VALUES (?, ?, ?)";
  db.query(sql, [title, author, description], callback);
};

// Lire tous les livres
const getAllBooks = (callback) => {
  db.query("SELECT * FROM books", callback);
};

// Lire un livre par ID
const getBookById = (id, callback) => {
  db.query("SELECT * FROM books WHERE id = ?", [id], callback);
};

// Mettre à jour un livre
const updateBook = (id, title, author, description, callback) => {
  const sql =
    "UPDATE books SET title = ?, author = ?, description = ? WHERE id = ?";
  db.query(sql, [title, author, description, id], callback);
};

// Supprimer un livre
const deleteBook = (id, callback) => {
  db.query("DELETE FROM books WHERE id = ?", [id], callback);
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
