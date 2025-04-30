import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const user = localStorage.getItem("user");

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">SN-BIBLIO</Link>
        </div>
        <ul className="flex space-x-1 text-white">
          {user && (
            <>
              
              <li><button  className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
                <Link to="/ajout">
                  Ajouter un livre
                </Link></button>
              </li>

              <li>
                <button
                  className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 "
                  onClick={handleLogout}
                >
                  Déconnexion
                </button>
              </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <Link to="/" className="py-2 bg-gray-700 text-gray-100 rounded px-4 hover:bg-gray-800">
                  Connexion
                </Link>
              </li>
              <li>
                <Link to="/register" className="py-2 bg-blue-600 text-gray-100 rounded px-4 hover:bg-blue-700">
                  Inscription
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
