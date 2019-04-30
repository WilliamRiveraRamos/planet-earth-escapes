// Schema for place
const mongoose = require('mongoose')

var placesSchema = new mongoose.Schema({
    name: String,
    country: String,
    image: String,
    desc: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model('Place', placesSchema);