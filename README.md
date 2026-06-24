npm init //Inilize project
    -package.json (this file create)


--incoming request-->[listen]

npm i express   //Install express
    -node_modules   : In node module all dependency packages are installed.
    -package-lock.json  : package-lock.json tell the actual version.
    -package.json : dependencys version is mentioned here. **caret(^4.19.2)** (mazor-version.minor-version.patch) : Project will autometically updated new version.
                                                           **tilda(~4.9.2)**

    **Express library also have dependencys and that dependencys are install in node_module

    **Difference between package.json and package-lock.json ?
    -->package-lock.json tell the exact version and package.json tells what version it should use.


const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("Hello from the server!");
});

app.listen(3000, () => {
    console.log("server is successfully listening the port 3000!");
});


npm i -g nodemon   //development dependency to overcome the problem to start server again and again while change any code (Whenever changes any code then it autometically restart the server)

npm run start
npm run dev

H.W. (1st)
-create git repo
-initilize the project
-node_module, package.json, package-lock.json
-Install express
-create a server
-listen to port
-make request handler /hello, /
-install nodemon and update script package.json
-what are dependencies
-what is the use of "-g" before npm install
-diff between (^) and (~)

H.W. (2nd)
-inilize git
-.gitignore
-ignore node_module
-play with route extension
-order of the routes matter
-Install postman and make a test API
-Write logic to handle get, post , patch, put, delete API call and test them on postman.
-Explore different kind of routeing, use of pattern and rejex : /a/ , /.fly$/
-query params ,dynamic routes

/ab?c   -make b optional
/ab+c   -match the pattern , that a and c will be the last and we can add unlimited number of b
/ab*c   -match the pattern , that a and c will be the last and we can add anything over it
/a(bc)?d -bc is optional
/.*fly$/ -end with fly and start anything.


app.get("/user/:userId", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send({username : "Sap", password: 'test'});
});


======Middleware & Error Handler======
