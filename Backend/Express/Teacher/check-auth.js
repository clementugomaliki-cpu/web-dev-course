const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const secret = process.env.SECRET;
  const decodedToken = jwt.verify(req.headers.authorization, secret);
//   console.log(decodedToken);
  req.userData = decodedToken;
  next()
};