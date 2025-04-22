import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src/app/data/resumeData.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading resume data:', error);
    return NextResponse.json({ error: 'Failed to load resume data' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const filePath = path.join(process.cwd(), 'src/app/data/resumeData.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving resume data:', error);
    return NextResponse.json({ error: 'Failed to save resume data' }, { status: 500 });
  }
} 