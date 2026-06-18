const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
    res.send("hello from the server");
});

app.use("/test", (req, res) => {
    res.send("Hello from the server!");
});

app.listen(3000, () => {
    console.log("server is successfully listening the port 3000!");
});