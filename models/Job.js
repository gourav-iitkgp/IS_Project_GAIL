import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company'],
      maxlength: 50,
    },
    motorName: {
      type: String,
      required: [true, 'Please provide motorName'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['Working', 'Not Working', 'Faulty'],
      default: 'Working',
    },
    motorType: {
      type: String,
      enum: ['A', 'B', 'C', 'D'],
      default: 'A',
    },
    motorLocation: {
      type: String,
      default: 'my city',
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Job', JobSchema)
