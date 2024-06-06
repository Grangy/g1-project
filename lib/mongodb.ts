// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://lololomik:22170313Max@cluster0.revbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

if (!clientPromise) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
