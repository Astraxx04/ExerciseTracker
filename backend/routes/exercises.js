const express = require('express');
const router = express.Router();
const { getAllExercises, getExerciseWithId, deleteExerciseWithId, updateExerciseWithId, addNewExercise } = require("../controllers/exercise");

router.route("/").get(getAllExercises);
router.route("/:id").get(getExerciseWithId);
router.route("/:id").delete(deleteExerciseWithId);
router.route("/update/:id").post(updateExerciseWithId);
router.route("/add").post(addNewExercise);

module.exports = router;