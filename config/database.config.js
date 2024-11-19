const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Nodejs', {});
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDatabase;