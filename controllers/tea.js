const newTea = (req, res, next) => {
  const body = req.body;
  console.log(body);
  res.json({ message: "POST new tea", body }); // dummy function for now
};

const getAllTea = (req, res, next) => {
  res.json({ message: "GET all tea" });
  next();
};

const deleteAllTea = (req, res, next) => {
  res.json({ message: "DELETE all tea" });
};

export default { newTea, getAllTea, deleteAllTea };
