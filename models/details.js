const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const detailSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    description:{
        type:String
    }
    
});
module.exports = mongoose.model('contactDetails', detailSchema);
