const accessControl = (req, res, next) => {
  const access = true;

  if (!access) {
    res.status(401).json({
      success: false,
      message: "You are not authorized!",
    });
  } else {
    next();
  }
};

const secondMiddleware = (req, res, next) => {
  const access = true;

  if (!access) {
    res.status(401).json({
      success: false,
      message: "You are not authorized! Second Middleware...",
    });
  } else {
    next();
  }
};

module.exports = {
  accessControl,
  secondMiddleware,
};
