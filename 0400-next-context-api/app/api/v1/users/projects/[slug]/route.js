import { NextResponse } from 'next/server';
import { prisma } from '@lib/prisma';

export async function GET(_, context) {
  try {
    const { slug } = (await context.params) || {};
    
    const project = await prisma.project.findUnique({
      where: { slug },
      include: { stats: true },
    });

    if (!project) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ data: project });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
