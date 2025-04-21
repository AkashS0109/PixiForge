import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Ensure the global object has a cached connection
const globalWithMongoose = global as typeof global & { mongoose?: MongooseConnection };

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { conn: null, promise: null };
}

const cached = globalWithMongoose.mongoose;

export const connectToMongoDB = async () => {
  if (cached.conn) return cached.conn; // Return cached connection if exists

  if (!MONGODB_URL) throw new Error('MONGODB_URL is not defined');

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: 'yourDatabaseName', // Replace with actual database name
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
