const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
    res.send("hello from the server");
});

app.use("/test", (req, res) => {
    res.send("test from the server!");
});

app.use("/", (req, res) => {
    res.send("Hello Saptarshi!");
});

app.listen(3000, () => {
    console.log("server is successfully listening the port 3000!");
});