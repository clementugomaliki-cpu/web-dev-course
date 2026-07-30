const addtocart = (req, res) => {
  res
    .status(200)
    .json(
      `Hello ${req.userData.email.split("@")[0]}! ${req.body.title} added to cart successfully`,
    );
};

const getSingleItem = (req, res) => {
  const singleItem = productsList.filter((item) => item.id == req.params.id);
  res.status(200).json(singleItem);
};

module.exports = { addtocart, getSingleItem };