const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: {
        type: JSON,
        required: true
    }
},{
    timestamps: true
});

var Users = mongoose.model('User', userSchema);

module.exports = Users;
