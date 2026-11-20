const express = require("express");

const router = express.Router();

router.get("/", (req, res) =>{
    res.send(`
        <h1>Login page </h1>
        <form method="post" action="/login">
        <label for="username">username</label>
        <input type="text" id ="username" name = "username" placeholder = "enter username" required />
        <label for="pass">password</label>
        <input type="text" id ="pass" name = "password" placeholder = "enter password" required />
        <button type = "submit">Login </button>
        </form>
        `);
})

router.post("/", (req, res) =>{
    let {username, password} = req.body;

    if(!username && !password){
        return res.status(401).send("Username and Password are required");
    }

    res.send(`Welcome ${username} ! Your Login request received`);
})

module.exports = router;