import { MongoClient } from 'mongodb';

// Connection URI for MongoDB
const uri = process.env.MONGODB_URI || 'mongodb+srv://tanmayshahare998_db_user:Tanmay2435@cluster0.tunhw7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = process.env.MONGODB_DB || 'urjaTradingAcademy';

let client;
let db;

/**
 * Connects to MongoDB database
 */
export async function connectToDatabase() {
  if (client && db) {
    return { client, db };
  }

  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB');
    
    db = client.db(dbName);
    return { client, db };
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

/**
 * Closes the MongoDB connection
 */
export async function closeDatabaseConnection() {
  if (client) {
    await client.close();
    console.log('Closed MongoDB connection');
  }
}