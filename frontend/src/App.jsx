import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  
import Login from "./pages/Login";  
import Register from "./pages/Register";  
import ListLivre from "./pages/ListLivre";  
import LivreDetail from "./pages/LivreDetail";  
import AjoutLivre from "./pages/AjoutLivre";  
import EditLivre from "./pages/EditLivre";  

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/livres" element={<ListLivre />} />
          <Route path="/livre/:id" element={<LivreDetail />} />
          <Route path="/ajout" element={<AjoutLivre />} />
          <Route path="/edit/:id" element={<EditLivre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
