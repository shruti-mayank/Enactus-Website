//Declared mongoose as global
global.MONGOOSE = require('mongoose');
const db_url = process.env.DB_URL;
// || "mongodb://localhost:27017/enactus"  ;
MONGOOSE.connect(db_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
MONGOOSE.connection.on('connected', () => {
    console.log('MongoDB Connected!');
});
MONGOOSE.connection.on('error', (err) => {
    console.log('Error connecting', err);
});