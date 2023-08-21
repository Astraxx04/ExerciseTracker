const mongoose = require('mongoose');

const ConnectToDb = (uri) => {
    mongoose.connect(uri); //useCreateIndex: true

    const connection = mongoose.connection;
    connection.once("open", () => {
        console.log("MongoDB connection established successfully");
    });
}

module.exports = ConnectToDb;