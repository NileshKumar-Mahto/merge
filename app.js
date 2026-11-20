const express = require("express");
const loginRouter = require("./features.js");

const app = express();
const PORT = 8080;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//connect the Login routes
app.use("/login",loginRouter);


// Home route
app.get("/",(req, res) =>{
    res.send("Welcome to Git Branch Practice Projects");
})

//Start the server
app.listen(PORT, () =>{
    console.log(`server is listen on ${PORT}`);
})