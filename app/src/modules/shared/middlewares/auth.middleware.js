const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  const token = req.cookies["access_token"];
  if (!token) {
    return res.status(403).json({ message: "Không được phép truy cập" });
  }

  try {
    const decoded = jwt.verify(token, "Secret Key");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

module.exports = { isAdmin };
