exports.products = (req, res) => {
  // como Json - http://localhost:3000/cliente/11/3
  res.send(req.params);
};
