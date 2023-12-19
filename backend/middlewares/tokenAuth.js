const jwt = require("jsonwebtoken");

const errorHandler = require("../utils/errorHandler");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    // because token is not storing in the cookie, we are hardcoding it here
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODAwMGNkODAzODhhY2VjMjQwZDk5YiIsImlhdCI6MTcwMjk3ODA1MCwiZXhwIjoxNzAzNTgyODUwfQ.D9SVvr6aE5RPvzQ3ESgA9szCGOmcQtxasgVh2HFTRyw";

    if (!token) {
      errorHandler("User not authorized", 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET ?? "");

    if (!decoded) {
      errorHandler("User not authorized", 401);
    }

    req.user = {
      userId: decoded.id,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = verifyToken;
