import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListLivre() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    const user = localStorage.getItem("user");
    if (!user) {
      return;
    }
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => {
        setBooks(response.data); 
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des livres:", error);
      });
  }, []);

  const handleDelete = (id) => {
    
    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      .then(() => {
        setBooks(books.filter((book) => book.id !== id)); 
        alert("Livre supprimé");
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression :", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Liste des livres</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-2">{book.title}</h3>
            <p className="text-gray-600"><strong>Auteur:</strong> {book.author}</p>
            <p className="text-gray-600 mt-2"><strong>Description:</strong> {book.description}</p>
            <div className="mt-4 flex justify-between space-x-4">
              <Link to={`/livre/${book.id}`}>
                <button className="w-full py-2 bg-blue-200 text-blue-600 rounded  ">
                  Voir
                </button>
              </Link>
              <Link to={`/edit/${book.id}`}>
                <button className="w-full py-2 bg-yellow-200 text-yellow-600 rounded ">
                  Modifier
                </button>
              </Link>
              <button
                onClick={() => handleDelete(book.id)}
                className="w-full py-2 bg-red-200 text-red-600 rounded "
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListLivre;
