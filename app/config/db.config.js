require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.xj3as.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const mongooseOptions = 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    };

module.exports = {
    dbUri, mongooseOptions
}