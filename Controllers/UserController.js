const { User } = require("../Models/UserModel");

// FETCHING ALL USERS FOR ADMIN
exports.getAllUser = async (req, res) => {

    try {
        console.log("FETCHING ALL USER");
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        console.log("ERROR IN GETTING ALL USER");
        console.log(error);
        res.status(400).json({ 'message': 'Error in ALL user' });
    }
}

exports.addUser = async (req, res) => {
    try {

        const user = new User(req.body)
        let newUser = await user.save();

        res.status(200).json(newUser);

    } catch (error) {
        console.log(error);
        res.status(400).json({ 'message': 'Error in making new user' });
    }
}


