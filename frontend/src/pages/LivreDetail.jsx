import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LivreDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/"); 
      return;
    }

    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error("Erreur :", err));
  }, [id, navigate]);

  if (!book) return <p className="text-center text-xl text-gray-500">Chargement...</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Détails du Livre</h2>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <p className="text-xl font-bold mb-2"><strong>Titre :</strong> {book.title}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Auteur :</strong> {book.author}</p>
        <p className="text-lg text-gray-700 mb-4"><strong>Description :</strong></p>
        <p className="text-gray-600">{book.description}</p>
      </div>
    </div>
  );
}

export default LivreDetail;
