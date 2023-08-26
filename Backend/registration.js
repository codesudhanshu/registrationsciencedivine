const { mongoose } = require('mongoose')

const registrationschema = new mongoose.Schema({
    name:String,
    email:String,
    address: String,
    phonenumber:Number,
    poc:String,
    submissionTime: { type: Date, default: Date.now }
})

const registrationmodel = mongoose.model("registrations" , registrationschema)

module.exports = registrationmodel