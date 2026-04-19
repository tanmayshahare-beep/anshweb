import { connectToDatabase } from '../db/connection.js';

/**
 * Get all users
 */
export async function getUsers() {
  try {
    const { db } = await connectToDatabase();
    const users = await db.collection('users').find({}).toArray();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

/**
 * Get user by ID
 */
export async function getUserById(id) {
  try {
    const { db } = await connectToDatabase();
    const user = await db.collection('users').findOne({ _id: id });
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

/**
 * Create a new user
 */
export async function createUser(userData) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('users').insertOne({
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return result;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

/**
 * Update user by ID
 */
export async function updateUser(id, userData) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('users').updateOne(
      { _id: id },
      { $set: { ...userData, updatedAt: new Date() } }
    );
    return result;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

/**
 * Delete user by ID
 */
export async function deleteUser(id) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('users').deleteOne({ _id: id });
    return result;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}