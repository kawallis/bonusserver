const mongoose = require('hapi-mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
    },
    team: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Baller', schema);