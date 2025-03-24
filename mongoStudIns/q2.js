const { MongoClient } = require('mongodb');


const url = 'mongodb://localhost:27017';
const dbName = 'mscdb5'; 


const client = new MongoClient(url);

async function run() {
    try {

        await client.connect();
        console.log('Connected to the database.');


        const db = client.db(dbName);
        const collection = db.collection('student');


        const students = [
            { name: 'John Doe', age: 20, grade: 'A' },
            { name: 'Jane Smith', age: 22, grade: 'B' },
            { name: 'Emily Johnson', age: 21, grade: 'A' }
        ];


        const result = await collection.insertMany(students);
        console.log('Records inserted:', result);

    } catch (error) {
        console.error('Error inserting records:', error);
    } finally {

        await client.close();
    }
}


run().catch(console.error);

