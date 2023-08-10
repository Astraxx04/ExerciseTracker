const mongoose = require('mongoose');
ATLAS_URI = "mongodb+srv://Astraxx:Gagan2542@cluster0.ye1nna6.mongodb.net/?retryWrites=true&w=majority";

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established successfully");
});

module.exports = connection;