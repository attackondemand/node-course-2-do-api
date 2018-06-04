const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b109402e6f66d09fb8917e4')
  },{
    $inc: {
      age: 1
    }
  }).then((result) => {
    console.log(result);
  })

  // client.close();
});
