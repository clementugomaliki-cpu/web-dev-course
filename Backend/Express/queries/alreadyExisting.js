async function findUser() {
    const foundUser = UserModel.find({email: req.body.email})
}