const isAuth = (req, res, next) => {
  req.session
    ? req.session.userId
      ? req.session.cookie.expires < new Date()
        ? next()
        : res.status(401).json({ message: "Sesión expirada" })
      : res.status(401).json({ message: "Usuario no autenticado" })
    : res.status(401).json({ message: "No se encontró sesión" });
};

export default isAuth;
