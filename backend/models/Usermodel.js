const mongoose = require('mongoose');


// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB using the MONGODB_URI environment variable
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    bio: String,
    avatar: String,
    registeredHackathons: [{
      hackathon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hackathon'
      },
      status: {
        type: String,
        enum: ['pending', 'active', 'completed'],
        default: 'registered'
      },
      chatAccess: {
        type: Boolean,
        default: false
      }
    }],
    participatedHackathons: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hackathon'
    }],
    organizedHackathons: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hackathon'
    }],
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    }
  }, { timestamps: true });
  
  const User = mongoose.model('User', userSchema);
  

module.exports = User;
