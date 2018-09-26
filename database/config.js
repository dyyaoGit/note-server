const mongoose = require('mongoose')
mongoose.connect(
    'mongodb://yao:yjr1923521@localhost:27017/note',
    { useNewUrlParser: true}
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('success');
});
module.exports = db
