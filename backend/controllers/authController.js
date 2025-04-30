const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const login = (req, res) => {
  const { email, password } = req.body;

  User.findUserByEmail(email, (err, results) => {
    if (results.length === 0)
      return res.status(400).json({ message: "Email incorrect." });

    const user = results[0];
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword)
      return res.status(401).json({ message: "Mot de passe incorrect." });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  });
};

const register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "Tous les champs sont requis." });

  User.findUserByEmail(email, (err, results) => {
    if (results.length > 0) {
      return res.status(400).json({ message: "Email déjà utilisé." });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    User.createUser(name, email, hashedPassword, (err, result) => {
      if (err) return res.status(500).json({ message: "Erreur serveur." });
      res.status(201).json({ message: "Inscription réussie." });
    });
  });
};

module.exports = { login, register };
