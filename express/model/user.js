const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    tech :{
        type:String,
        required:true
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '0.5m' },
    }
});

module.exports =mongoose.model('User',userSchema);