const getStores = async (req, res) => {
  res.status(200).json({ message: 'success' });
};

module.exports = {
  getStores,
};
