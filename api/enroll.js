import { connectToDatabase } from '../db/connection.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { db } = await connectToDatabase();
    const data = req.body;

    const result = await db.collection('enrollments').insertOne({
      ...data,
      submittedAt: new Date(),
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Enrollment saved successfully',
      id: result.insertedId 
    });
  } catch (error) {
    console.error('Database Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to save to database',
      error: error.message 
    });
  }
}
