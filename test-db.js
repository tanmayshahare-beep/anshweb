import { connectToDatabase, closeDatabaseConnection } from './db/connection.js';
import { initializeDatabase } from './db/init.js';

async function testDatabase() {
  console.log('Starting MongoDB integration test...');
  
  try {
    console.log('Connecting to MongoDB...');
    
    // Connect to database
    const { client, db } = await connectToDatabase();
    console.log('✓ Successfully connected to MongoDB');
    
    // Test database name
    console.log(`Connected to database: ${db.databaseName}`);
    
    // Initialize database
    console.log('Initializing database collections...');
    await initializeDatabase();
    console.log('✓ Database collections initialized');
    
    // List collections to verify creation
    const collections = await db.listCollections().toArray();
    console.log('Existing collections:', collections.map(c => c.name));
    
    console.log('✓ MongoDB integration is working correctly!');
    return true;
  } catch (error) {
    console.error('✗ Error testing MongoDB integration:', error);
    return false;
  } finally {
    // Close connection
    console.log('Closing MongoDB connection...');
    await closeDatabaseConnection();
    console.log('✓ Connection closed');
  }
}

// Run test if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testDatabase()
    .then(success => {
      if (success) {
        console.log('All tests passed!');
        process.exit(0);
      } else {
        console.log('Some tests failed!');
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('Unexpected error:', error);
      process.exit(1);
    });
}