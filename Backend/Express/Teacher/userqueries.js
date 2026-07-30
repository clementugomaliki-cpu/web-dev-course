const UserModel = require("../models/usermodel");
module.exports = async function findUser(userDetails) {
  const foundUser = await UserModel.find({ ...userDetails });
  console.log(foundUser);
  
  return [...foundUser];
};

//   if (!foundUser) return "";