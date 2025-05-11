const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashed],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "User registered" });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, users) => {
    if (err || users.length === 0) return res.status(401).json({ error: "Invalid credentials" });
    
    const user = users[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  });
};
