const user = require("../database/User")

const getAllWorkouts = async () => {
    try {
        const allWorkouts = await user.getAllUser();
        return allWorkouts;
    } catch (error) {
        throw error;
    }
};

const getOneWorkout = async (workoutId) => {
    try {
        // const workout = await user.getOneUser(workoutId);
        const workout = [{
            name:"Deryan",
            nachname:"Keskin"
        }]
        return workout;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllWorkouts,
    getOneWorkout,
};
