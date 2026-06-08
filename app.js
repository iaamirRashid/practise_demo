const express = require("express");
const app = express();


const port = 2000;

app.get("/random", (req, res) => {
    res.send("this is random Path");
})

app.get("/:username", (req, res) => {
    let {username} = req.params;
    res.send(`this is ${username} path`);
})

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q) {
        res.send("No search query provided");
    } else {
        res.send(`there are the results for : ${q}`);
    }
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

