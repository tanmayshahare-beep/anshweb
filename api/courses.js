import { connectToDatabase } from '../db/connection.js';

/**
 * Get all courses
 */
export async function getCourses() {
  try {
    const { db } = await connectToDatabase();
    const courses = await db.collection('courses').find({}).toArray();
    return courses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}

/**
 * Get course by ID
 */
export async function getCourseById(id) {
  try {
    const { db } = await connectToDatabase();
    const course = await db.collection('courses').findOne({ _id: id });
    return course;
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
}

/**
 * Create a new course
 */
export async function createCourse(courseData) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('courses').insertOne({
      ...courseData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return result;
  } catch (error) {
    console.error('Error creating course:', error);
    throw error;
  }
}

/**
 * Update course by ID
 */
export async function updateCourse(id, courseData) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('courses').updateOne(
      { _id: id },
      { $set: { ...courseData, updatedAt: new Date() } }
    );
    return result;
  } catch (error) {
    console.error('Error updating course:', error);
    throw error;
  }
}

/**
 * Delete course by ID
 */
export async function deleteCourse(id) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('courses').deleteOne({ _id: id });
    return result;
  } catch (error) {
    console.error('Error deleting course:', error);
    throw error;
  }
}