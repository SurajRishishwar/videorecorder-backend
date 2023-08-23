const jwt = require("jsonwebtoken");
const config = require("../config/auth");

verifyToken = (req, res, next) => {
  
  let token = req.cookies.VideoRecorder;
  
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
    // return res.redirect('/signin');
  }

  jwt.verify(token,
            config.secret,
            (err, decoded) => {
              if (err) {
                return res.status(401).send({
                  message: "Unauthorized!",
                });
              }
              req.userId = decoded.id;
              next();
            });
};

const authJwt = {
    verifyToken
};
module.exports = authJwt;