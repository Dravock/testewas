const express = require("express");

const testController = require("../../controllers/testController");


const router = express.Router();


router.get("/", testController.getAllWorkouts);

// router.get("/", (req, res) => {
//         res.send('Hello World! im TestRoutes.js')
//     });
router.get("/:userid", testController.getOneWorkout);



module.exports = router;