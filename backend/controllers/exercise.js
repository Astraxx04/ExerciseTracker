let Exercise = require("../models/exercise");

const getAllExercises = (req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error: "+ err))
};

const getExerciseWithId = (req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: "+ err))
};

const deleteExerciseWithId = (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise Deleted Successfully!!"))
    .catch(err => res.status(400).json("Error: "+ err))
};

const updateExerciseWithId = (req, res) => {
    Exercise.findById(req.params.id)
    .then((exercise) => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.time = Date.parse(req.body.time);

        exercise.save()
        .then(() => res.json("Exercise Updated Successfully!!"))
        .catch(err => res.status(400).json("Error: "+ err))
    })
    .catch(err => res.status(400).json("Error: "+ err))
};

const addNewExercise = (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
    .then(() => res.json("New Exercise Added!!"))
    .catch(err => res.status(400).json("Error: "+ err))
};

module.exports = { getAllExercises, getExerciseWithId, deleteExerciseWithId, updateExerciseWithId, addNewExercise };