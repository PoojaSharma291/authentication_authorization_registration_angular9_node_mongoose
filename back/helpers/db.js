const config = require('config.json');
const mongoose = require('mongoose');
const User = require('../users/user.model');
const Role = require('../helpers/role');
const userService = require('../users/user.service');
 
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions)
.then(() => {
    console.log("db connected");
    initial();
})
.catch(err => {
    console.error("connection error", err);
});

function initial(){
    User.estimatedDocumentCount((err, count) => {
        if(!err && count === 5){
            let userParam = { username: 'admin', password: 'admin@123', firstName: 'admin', lastName: 'admin', role: Role.Admin };
            console.log(userParam.username);
            
            // try{
                 userService.create(userParam)
                 .then(result => console.log("Admin user created!"))
                 .catch(err => console.log("Error", err));
            // }
            // catch{

            // }
             
        }
    }
);
}

mongoose.Promise = global.Promise;

module.exports = {
    User: User
};