require('dotenv').config();
const express = require("express"); 
const bodyParser = require("body-parser");

// const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const v1TestRouter = require("./v1/routes/testRoutes");

const app = express(); 
const API_PORT = process.env.API_PORT || 5000; 

app.use(bodyParser.json());

// app.use("/api/v1/workouts", v1WorkoutRouter);
app.use("/api/v1/test", v1TestRouter);

app.listen(API_PORT, () => { 
    console.log(`API is listening on port ${API_PORT}`); 
    console.log(process.env.ENV)
    console.log(process.env.MSG)
});