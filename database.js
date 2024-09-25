const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://abhishek50503:Aksingh%4050503@testingmongocloud.fiddxnz.mongodb.net';
const client = new MongoClient(url);

// Database Name
const dbName = 'Node';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('NodeDB');

    // the following code examples can be pasted here...

    const data = {
        name:"Abhi",
        city:"Delhi",
        contact:"87431234555",
        
    }
    const insertResult = await collection.insertMany([data]);
        console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({}).countDocuments({city:"Sundargardh"});
    console.log('Found documents =>', findResult);

    const countDocuments= await collection.countDocuments({})
    console.log("The total documents = >", countDocuments)

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());