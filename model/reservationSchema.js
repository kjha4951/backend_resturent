const mongoose = require('mongoose');
const validator=require('validator');

const reservationSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minLength: [3,'First name must contain atleast 3 characters'],
        maxLength: [20,'First name must contain atmost 20 characters'],
    },
    lastname:{
        type:String,
        required:true,
        minLength: [3,'Last name must contain atleast 3 characters'],
        maxLength: [20,'Last name must contain atmost 20 characters'],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,'Please enter a valid email'],
    },
    phone:{
        type:String,
        required:true,
        validate:[validator.isMobilePhone,'Please enter a valid phone number'],
        minLength: [10,'Phone number must contain atleast 10 characters'],
        maxLength: [10,'Phone number must contain atmost 10 characters'],
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model('Reservation',reservationSchema);

