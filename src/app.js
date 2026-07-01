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

app.use("/test", (req, res) => {
    res.send("test from the server! 1st response");
},
(req, res) => {
    res.send("2nd response! ");
});



app.listen(3000, () => {
    console.log("server is successfully listening the port 3000!");
});