const mongoose = require('mongoose')


// Structure of Database items
const TaskSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
})

module.exports = mongoose.model('Task', TaskSchema)