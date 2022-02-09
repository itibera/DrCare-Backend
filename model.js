const mongoose = require('mongoose');

var appointmentsSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required: true
    },
    lastName : {
        type : String,
        required: true
    },
    selectYourService : {
        type : String,
        required: true
    },
    phone : {
        type:Number,
        required:true
    },
    date: {
        type:String,
        required:true
    },
    time: {
        type:String,
        required: true
    }
    
})

var doctorsSchema = new mongoose.Schema({
    image : {
        type : String,
        required: true
    },
    name: {
        type : String,
        required: true
    },
    department : {
        type : String,
        required: true
    },
    socialLink: {
        type: Object
    },
    description: {
        type: String
    }
})


exports.Appointmentsdb = mongoose.model('appointmentsdb', appointmentsSchema);
exports.Doctorsdb = mongoose.model('doctorsdb', doctorsSchema);