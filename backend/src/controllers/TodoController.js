const Todo = require('../models/Todo');

module.exports = {
    async index(request, response) {
        const user_id = request.headers.authorization;
        try{
            const todos = await Todo.find({user_id: user_id});
            response.json(todos);
        } catch(err) {
            response.status(500).send(err);
        }
    },
    
    async create(request, response) {
        const { text } = request.body;
        const user_id = request.headers.authorization;

        const todo = new Todo({
            text: text,
            user_id: user_id
        });
        
        try {
            const savedTodo = await todo.save();
            response.json(savedTodo);
        } catch (err) {
            response.status(500).send(err);
        }
    },

    async delete(request, response) {
        try {
            const removedTodo = await Todo.deleteOne({ _id: request.params.todoId});
            response.json(removedTodo);
        } catch(err) {
            response.status(500).send(err);
        }
    }
}