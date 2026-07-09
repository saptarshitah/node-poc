const express = require("express");

const app = express();

app.get("/user/:userId", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send({username : "Sap", password: 'test'});
});

app.post("/user", (req, res) => {
    res.send("Save to database!");
});

app.delete("/user", (req, res) => {
    res.send("deleted successfully!");
});

app.use("/test", (req, res, next) => {
    next();
    // res.send("test from the server! 1st response");
    console.log("test1");
},
(req, res, next) => {
    //next();
    res.send("2nd response! ");
    console.log("test2");
});


app.get("/test1", (req, res, next) => {
    console.log("1st route handler");
    next();
});

app.get("/test1", (req, res, next) => {
    console.log("2nd route handler");
    res.send("send from res of test1");
});


app.listen(3000, () => {
    console.log("server is successfully listening the port 3000!");
});