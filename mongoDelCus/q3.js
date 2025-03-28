const { MongoClient } = require('mongodb');


const url = 'mongodb://localhost:27017';
const dbName = 'mscdb5';


const client = new MongoClient(url);

async function run() {
    try {

        await client.connect();
        console.log('Connected to the database.');


        const db = client.db(dbName);
        const collection = db.collection('customers');

        const cust = [
            { name: 'John Doe', age: 20, grade: 'A' },
            { name: 'Jane Smith', age: 22, grade: 'B' },
            { name: 'Emily Johnson', age: 21, grade: 'A' }
        ];
      
      
        const result = await collection.insertMany(cust);
        // console.log('Records inserted:', result);
        
        const allCustomers = await collection.find({}).toArray();
        console.log('All Customers:', allCustomers);


        const customerIdToDelete = '67ce6990b54b37f09712f154'; 
        const deleteResult = await collection.deleteOne({ _id: customerIdToDelete });
        
        console.log('Deleted customer:', deleteResult);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
        console.log('Database connection closed.');
    }
}

// Run the function
run().catch(console.error);

