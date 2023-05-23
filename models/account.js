
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    acctStatus: {
        type: Number,
        min: -1,     //not associated even though it might have been previously
        max: 1,      //associated and completed account data
        default: 0   //associated but incomplete
    },
    userId: { 
        type: String,
        required: true
        },
    actNumber: {
        type: Number,
        maxLength: 8,
        required: true },
    firstName: {
         type: String,
         maxLength: 35},
    middleNameInitial: {
            type: String,
            maxLength: 1},
    lastName: {
            type: String,
            maxLength: 35},
    email:  {
            type: String,
            maxLength:75,
            required: true},
    countryCode: {
            type: Number,
            maxLength: 3
        },
    phone: {
            type: Number,
            maxLength: 12},
    yguser: { 
            type: Schema.Types.ObjectId,
            ref: 'User' },
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Account', accountSchema);