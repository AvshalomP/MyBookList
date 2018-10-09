const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log("Connected to database")
});


module.exports.Book = require('./book');
module.exports.Author = require('./author');