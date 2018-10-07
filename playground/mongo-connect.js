const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server')
    const db = client.db('TodoApp');
    // db.collection('Users').insertOne({
    //     name: 'Abdallah',
    //     age: 26,
    //     city: 'Cairo'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to instert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users')
        .find({name: "Abdallah"})
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2))
        }, (err) => {
            console.log('Unable to fetch users', err);
        })
    
    // db.collection('Todos')
    //     .find({_id: new ObjectID('5bba1c4aa462d72e70919d8c')})
    //     .toArray().then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then( (count) => {
    //         console.log(`Todos Count: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err)
    //     })

    client.close();
});