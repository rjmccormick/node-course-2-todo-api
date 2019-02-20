const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) - will remove one or many records (returns nothing)
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove - similar to findOne, but will remove a doc and return it
// Todo.findOneAndRemove({_id: '5c6d3d2fc35e6cececdef6e3'}).then((todo) => {

// });

// Todo.findByIdAndRemove - will also return the doc
Todo.findByIdAndRemove('5c6d3d2fc35e6cececdef6e3').then((todo) => {
    console.log(todo);
});