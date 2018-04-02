const express = require("express");
const Users = require('./models/users');

//init app and serve
var app = express();
//serve front end single page application written in react.js
app.use("/",express.static("public/build"));
//direct get request and respond with 3 random user profiles
app.get('/users/:index', function(req, res){
    //index is the clients pointer that points to their position inside the list of users in your database
    const index = parseInt( req.params.index )
    //skip to clients position in database-users then return next 3 results 
    Users.find({}).skip(index).limit(3).then((result) => {
        //reformate query results for front end and serve 
        result = [result[0].user, result[1].user, result[2].user]
        return res.status(200).send(result)
    } )
    return res
})
app.listen(3000, () => {console.log("Listening on port 3000")});







