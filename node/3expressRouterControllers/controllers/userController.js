exports.user = (req, res) => {
  // /users/1
  res.send(`Id do usuário: ${req.params.id}`);
};
