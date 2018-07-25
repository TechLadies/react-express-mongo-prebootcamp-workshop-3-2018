const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            // required: [true, 'cannot be blank'],
        },
        isDone: {
            type: Boolean,
        },
    }
);

TodoSchema.methods.toJSON = function() {
    return {
        id: this._id,
        description: this.description,
        isDone: this.isDone,
    };
};

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };