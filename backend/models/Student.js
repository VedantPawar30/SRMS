const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
    },
    rollNumber: {
      type: String,
      required: [true, 'Roll number is required'],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      match: [/^\d{10}$/, 'Phone must be exactly 10 digits'],
    },
    course: {
      type: String,
      required: [true, 'Course is required'],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, 'Year is required'],
      min: [1, 'Year must be between 1 and 5'],
      max: [5, 'Year must be between 1 and 5'],
    },
    gender: {
      type: String,
      required: [true, 'Gender is required'],
      enum: ['Male', 'Female', 'Other'],
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
      min: [15, 'Age must be at least 15'],
      max: [60, 'Age cannot exceed 60'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', studentSchema);
