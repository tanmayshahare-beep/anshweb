import { connectToDatabase } from './connection.js';
import { UserSchema, CourseSchema, LessonSchema, StrategySchema } from './models.js';

/**
 * Initializes the database with collections and indexes
 */
export async function initializeDatabase() {
  console.log('Starting database initialization...');
  
  try {
    const { db } = await connectToDatabase();
    console.log(`Connected to database: ${db.databaseName}`);
    
    // Create collections if they don't exist
    console.log('Checking existing collections...');
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    console.log('Existing collections:', collectionNames);
    
    // Create users collection
    if (!collectionNames.includes('users')) {
      console.log('Creating users collection...');
      await db.createCollection('users');
      await db.collection('users').createIndex({ email: 1 }, { unique: true });
      console.log('✓ Created users collection with email index');
    } else {
      console.log('✓ Users collection already exists');
    }
    
    // Create courses collection
    if (!collectionNames.includes('courses')) {
      console.log('Creating courses collection...');
      await db.createCollection('courses');
      console.log('✓ Created courses collection');
    } else {
      console.log('✓ Courses collection already exists');
    }
    
    // Create lessons collection
    if (!collectionNames.includes('lessons')) {
      console.log('Creating lessons collection...');
      await db.createCollection('lessons');
      console.log('✓ Created lessons collection');
    } else {
      console.log('✓ Lessons collection already exists');
    }
    
    // Create strategies collection
    if (!collectionNames.includes('strategies')) {
      console.log('Creating strategies collection...');
      await db.createCollection('strategies');
      console.log('✓ Created strategies collection');
    } else {
      console.log('✓ Strategies collection already exists');
    }
    
    console.log('✓ Database initialization complete');
    return true;
  } catch (error) {
    console.error('✗ Error initializing database:', error);
    throw error;
  }
}

// Run initialization if this file is executed directly
const isDirectRun = import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/')) || process.argv[1].endsWith('db/init.js') || process.argv[1].endsWith('db\\init.js');
if (isDirectRun) {
  console.log('Running database initialization script...');
  
  initializeDatabase()
    .then((success) => {
      if (success) {
        console.log('✓ Database initialized successfully');
        process.exit(0);
      } else {
        console.log('✗ Database initialization failed');
        process.exit(1);
      }
    })
    .catch((error) => {
      console.error('✗ Failed to initialize database:', error);
      process.exit(1);
    });
}