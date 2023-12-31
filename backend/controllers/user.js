let User = require("../models/user");

const getAllUsers = (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: "+ err))
};

const addNewUser = (req, res) => {
    const username = req.body.username;
    
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json("New User Added!!"))
    .catch(err => res.status(400).json("Error: "+ err))
};

module.exports = { getAllUsers, addNewUser };