const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete (very useful as returns the record as well as deletes it)
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // TEST
    // db.collection('Users').deleteMany({name: 'Rob'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c6ad4840c7f9534da692ab9')
    }).then((result) => {
        console.log(result);
    });
    // db.close();
});
