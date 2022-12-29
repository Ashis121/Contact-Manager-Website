const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    Userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    contactName:{
        type:String,
        require:true
    },
    contactEmail:{
        type:String,
        require:true
    },
    contactPhone:{
        type:String,
        require:true
    },
    contactType:{
        type:String
    }
})

module.exports =  mongoose.model('contact',ContactSchema);