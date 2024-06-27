const mongoose =require('mongoose')
const log = require('debug')("development:mongoose")

const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/khatabook';
mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on("error",(err)=>{
    log(err)
})

db.on("open",()=>{
    log("Connected to Database successfully")
})

module.exports = db;