import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  const client = await clientPromise;
  if (!client) {
    return NextResponse.json({ message: 'Database connection error' }, { status: 500 });
  }
  const db = client.db('g1-site');
  const menus = await db.collection('menu').find({}).toArray();
  return NextResponse.json(menus);
}

export async function POST(req: Request) {
  const client = await clientPromise;
  if (!client) {
    return NextResponse.json({ message: 'Database connection error' }, { status: 500 });
  }
  const db = client.db('g1-site');
  const data = await req.json();
  await db.collection('menu').insertOne(data);
  return NextResponse.json({ message: 'Menu item added' });
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

  const result = await db.collection('menu').deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 0) {
    return NextResponse.json({ message: 'Menu item not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Menu item deleted' });
}
