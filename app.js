const express = require("express");
const app = express();


const port = 2000;

app.get("/rrot", (req, res) => {
    res.send("this is root path");
})

app.get("/about", (req, res) => {
     res.send("this is about path");
})

app.get("/:username", (req, res) => {
    let {username} = req.params;
    res.send(`this is ${username} path`);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

