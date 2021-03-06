const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    task: {type: String, required: true, max: 100},
    id: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Task', TaskSchema);