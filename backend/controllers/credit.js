const Credit = require("../models/Credit");

exports.updateCredit = async (req, res, next) => {
  try {
    if (!req.admin) return res.status(400).send("You dont have permission");
    const creditObj = { ...req.body };
    const newCredit = await Credit(creditObj).save();
    return res.status(200).json(newCredit);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error);
  }
};
