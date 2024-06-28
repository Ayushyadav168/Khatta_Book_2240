const mongoose = require('mongoose');
const log = require('debug')("development:mongoose");

const mongoURI = process.env.MONGODB_URI 

async function connectDB() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to Database successfully");
    } catch (err) {
        console.log("Error connecting to the database:", err);
        process.exit(1); // Exit the process with an error code
    }
}

connectDB();

const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});

module.exports = db;
