/**
 * Data models for URJA Trading Academy
 */

/**
 * User model
 */
export const UserSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['student', 'instructor', 'admin'], 
    default: 'student' 
  },
  enrolledCourses: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
};

/**
 * Course model
 */
export const CourseSchema = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true }, // Reference to user ID
  price: { type: Number, required: true },
  duration: { type: String }, // e.g., "4 weeks"
  level: { 
    type: String, 
    enum: ['beginner', 'intermediate', 'advanced'] 
  },
  lessons: [{ type: Object }], // Array of lesson objects
  enrolledStudents: [{ type: String }], // Array of user IDs
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
};

/**
 * Lesson model
 */
export const LessonSchema = {
  title: { type: String, required: true },
  content: { type: String, required: true },
  courseId: { type: String, required: true }, // Reference to course ID
  order: { type: Number, required: true }, // Order in course
  videoUrl: { type: String },
  resources: [{ type: Object }], // Downloadable resources
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
};

/**
 * Trading strategy model
 */
export const StrategySchema = {
  name: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true }, // Reference to user ID
  category: { 
    type: String, 
    enum: ['technical', 'fundamental', 'automated', 'other'] 
  },
  riskLevel: { 
    type: String, 
    enum: ['low', 'medium', 'high'] 
  },
  backtestResults: { type: Object },
  isPublic: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
};