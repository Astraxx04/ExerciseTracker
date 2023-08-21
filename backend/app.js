const express = require("express");
const cors = require("cors");
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
const connectWithDb = require("./config/dbConnection");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectWithDb(process.env.ATLAS_URI);

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});