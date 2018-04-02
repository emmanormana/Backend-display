const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Users = require('./models/users');

//connect to mongodb with mongoose
const dbUrl = 'mongodb://localhost:27017/pigKnow';
const connect = mongoose.connect(dbUrl, {});

// Define Functions
loadDB = (users) => {
    connect.then(() => {
        var db =  mongoose.connection;
        console.log('Connected correctly to DBserver');
        users.forEach(element => {
            Users({"user":element}).save( (err, response) => {
                if (err) console.log(err,response)
            }) 
        });        
    });               
}
readDB = (index) => {//dead code
    connect.then(
        () => {
            let db = mongoose.connection
            console.log('Connected correctly to DBserver');
        }
    )
}
function retrieveUsers(url, quantity){
    const request = require('request')
    url += quantity
    request(url, (err, response, body) => {
        if (err) throw "random user api returned error"
        let users = JSON.parse(body).results;
        loadDB(users)
    })
};

//only run once
retrieveUsers("https://randomuser.me/api/?results=", "500")
