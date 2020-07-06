const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "gr7AsdsdASAweFVFdggfFDFQWE123321FD123435dfABt";

exports.ensureAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(403)
      .send({ message: "La petición no tiene cabezera de autenticación." });
  }

  const token = req.headers.authorization.replace(/['"]+/g, "");

  try {
    var payload = jwt.decode(token, SECRET_KEY);

    if (payload.exp <= moment.unix()) {
      return res.status(404).send({ message: "El Token ha expirado." });
    }
  } catch (ex) {
    console.log(ex);
    return res.status(404).send({ message: "Token invalido." });
  }

  req.user = payload;
  next();
};
