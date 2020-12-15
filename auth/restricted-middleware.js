const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./secrets.js");

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "give" });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "bad" });
    }

    console.log("decoded token", decoded);
    req.decoded = decoded;
    next();
  });
};
