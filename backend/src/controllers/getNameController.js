const getName = (req, res) => {
  res.status(200);
  const message = `Ruairidh`;
  res.send(message);
};

export default getName;
