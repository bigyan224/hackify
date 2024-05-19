const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);


const hackathonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  about:String,
  email:String,
  hackathon_starts: {
    type: Date,
    required: true
  },
  hackathon_ends: {
    type: Date,
    required: true
  },
  prizePool: {
    type: Number,
    default: 0
  },
  max_team: {
    type: Number,
    required: true
  },
  application_open: {
    type: Date,
    required: true
  },
  application_close: {
    type: Date,
    required: true
  },
  themes:{
    type:Array
  },
  venue: String,
  cover_image: String,
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'completed'],
    default: 'pending'
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  teams: [{
    name: String,
    leader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  }]
}, { timestamps: true });

const Hackathons = mongoose.model('Hackathons', hackathonSchema);

module.exports = Hackathons;
