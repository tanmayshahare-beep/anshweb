import { MongoClient } from 'mongodb';

async function checkMongoDB() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);
  
  try {
    console.log('Attempting to connect to MongoDB...');
    await client.connect();
    console.log('✓ Successfully connected to MongoDB');
    
    // List databases
    const databases = await client.db().admin().listDatabases();
    console.log('Available databases:');
    databases.databases.forEach(db => {
      console.log(`- ${db.name}`);
    });
    
    await client.close();
    console.log('✓ Disconnected from MongoDB');
  } catch (error) {
    console.error('✗ Error connecting to MongoDB:', error.message);
    console.log('Please ensure MongoDB is installed and running on your system.');
    console.log('You can download MongoDB from: https://www.mongodb.com/try/download/community');
  }
}

checkMongoDB();