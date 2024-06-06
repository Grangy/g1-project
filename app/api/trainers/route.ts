import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const client = await clientPromise;
  if (!client) {
    return NextResponse.json({ message: 'Database connection error' }, { status: 500 });
  }
  const db = client.db('g1-site');
  const trainers = await db.collection('trainers').find({}).toArray();
  return NextResponse.json(trainers);
}

export async function POST(req: Request) {
  const client = await clientPromise;
  if (!client) {
    return NextResponse.json({ message: 'Database connection error' }, { status: 500 });
  }
  const db = client.db('g1-site');
  const data = await req.json();
  const result = await db.collection('trainers').insertOne(data);
  return NextResponse.json({ message: 'Trainer added', id: result.insertedId });
}

export async function DELETE(req: Request) {
  const client = await clientPromise;
  if (!client) {
    return NextResponse.json({ message: 'Database connection error' }, { status: 500 });
  }
  const db = client.db('g1-site');
  const { id } = await req.json();

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }

  const result = await db.collection('trainers').deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 0) {
    return NextResponse.json({ message: 'Trainer not found' }, { status: 404 });
  }

  const filePath = path.join(process.cwd(), 'public/img/trainers', `${id}.jpg`);
  try {
    await fs.unlink(filePath);
  } catch (error) {
    console.error('Error deleting file:', error);
  }

  return NextResponse.json({ message: 'Trainer deleted' });
}
