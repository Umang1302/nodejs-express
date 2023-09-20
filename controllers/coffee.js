const getCoffee = (req, res, next) => {
  res.status(200).json({ message: "hmm nice" });
};

export default { getCoffee };
