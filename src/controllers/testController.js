const testService = require("../services/testService");

const getAllWorkouts = async (req, res) => {
    try {
        const allWorkouts = await testService.getAllWorkouts();
        // console.log('test',allWorkouts)
        res.send({ status: "OK", data: allWorkouts });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getOneWorkout =async (req, res) => {
    const {
        params: { workoutId },
    } = req;
    if (!workoutId) {
        res
        .status(400)
        .send({
            status: "FAILED",
            data: { error: "Parameter ':workoutId' can not be empty" },
        });
    }
    try {
        const workout = await testService.getOneWorkout(workoutId);
        res.send({ status: "OK", data: workout });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};




module.exports = {
    getAllWorkouts,
    getOneWorkout,
};