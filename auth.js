const jwt = require("jsonwebtoken");

exports.createToken = (obj) =>
  jwt.sign(obj, process.env.JSON_SECERET_TOKEN, { expiresIn: "1m" });

exports.decodeToken = (token) => jwt.decode(token);
