// Reserved for JWT user log in routes

const { verify } = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const authorization = req.headers["authorization"];
  //if (!authorization) throw new Error("You need to login.");//TODO make work with heroku

  const token = authorization.split(" ")[1];
  verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.send({
        success: false,
        message: "No user logged in"
      });
    } else {
      req.userId = decoded.userId;
      next();
    }
  });
};

module.exports = {
  isAuth
};
