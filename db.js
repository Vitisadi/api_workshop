const { MongoClient } = require('mongodb');
require('dotenv').config();
dotenv.config();

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
        return client.db('CartX'); 
    } catch (e) {
        console.error(e);
    }
}

connect().then(db => {
    module.exports.db = db;
}).catch(error => {
    console.error('Database connection failed', error);
    process.exit(1);
});

