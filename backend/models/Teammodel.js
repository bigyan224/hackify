const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);


const teamSchema = new mongoose.Schema({
  name: String,
  hackathon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hackathon'
  },
  leader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  teamcode:String,
  status: {
    type: String,
    enum: ['pending', 'selected', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

const Teams = mongoose.model('Teams', teamSchema);

module.exports = Teams;
