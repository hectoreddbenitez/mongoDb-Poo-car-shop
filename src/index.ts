// import 'dotenv/config';
// import app from './app';
// import connectToDatabase from './connection';

// const PORT = process.env.PORT || 3001;
// connectToDatabase()
//   .then(() => {
//     app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
//   })
//   .catch((error) => {
//     console.log('Connection with database generated an error:\r\n');
//     console.error(error);
//     console.log('\r\nServer initialization cancelled');
//     process.exit(0);
//   });
import mongoose from 'mongoose';

// const MONGO_DB_URL = 'mongodb://localhost:27017/CarShop';
const MONGO_DB_URL = 'mongodb://mongodb:27017/CarShop';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
