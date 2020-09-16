import mongoose from 'mongoose'

const UniSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  roomCharge: {
    type: Number,
  },
  boardCharge: {
    type: Number,
  },
  tuition: {
    type: Number,
  },
  fees: {
    type: Number,
  },
  bookSupplies: {
    type: Number,
  },
  onCampusCost: {
    type: Number,
  },
  offCampusCost: {
    type: Number,
  },
  acceptRate: {
    type: Number
  },
  totalStudents: {
    type: Number,
  },
  website: {
    type: String,
    unique: true,
  },
})

module.exports = mongoose.models.Uni || mongoose.model('Uni', UniSchema)
