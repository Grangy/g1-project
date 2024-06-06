import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as Blob;
    const trainerId = formData.get('trainerId') as string;

    if (!file || !trainerId) {
      console.log('Invalid input');
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(process.cwd(), 'public/img/trainers', `${trainerId}.jpg`);
    await fs.writeFile(filePath, buffer);

    console.log(`File uploaded successfully to ${filePath}`);
    return NextResponse.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('File upload error:', error);
    return NextResponse.json({ message: 'File upload error' }, { status: 500 });
  }
}
