import { initializeDatabase } from '../db/init.js';
import * as userApi from './users.js';
import * as courseApi from './courses.js';

/**
 * Initialize the API and database
 */
export async function initializeApi() {
  try {
    await initializeDatabase();
    console.log('API initialized successfully');
  } catch (error) {
    console.error('Error initializing API:', error);
    throw error;
  }
}

// Export all API functions
export { userApi, courseApi };

// Default export
export default {
  initializeApi,
  userApi,
  courseApi
};