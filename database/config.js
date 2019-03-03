const mongoose = require('mongoose');

console.log(process.env.NODE_ENV)
const connectAddress = process.env.NODE_ENV == 'development' ? 'mongodb://localhost:27017/note' : 'mongodb://dyyao:yjr1923521@116.62.145.106:27017/note';
mongoose.connect(
    // 'mongodb://yao:yjr1923521@localhost:27017/note',
    connectAddress,
    { useNewUrlParser: true}
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('success');
});
module.exports = db;
