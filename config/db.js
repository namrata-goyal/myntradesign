const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb://127.0.0.1:27017/myntra'; // Directly hardcoding the MongoDB URI for troubleshooting
    console.log(`Connecting to MongoDB with URI: ${mongoURI}`); // Debug statement
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
