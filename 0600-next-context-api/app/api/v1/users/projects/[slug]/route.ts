import { NextRequest, NextResponse } from 'next/server';
import { getProjects } from '../../../../datastore';
import { notFound } from '../../../../lib/renderer';
import { ProjectInfo } from 'features/projects/types/projects';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  console.log(slug);
  const project = getProjects().find((it: ProjectInfo) => it.slug === slug);
  console.log(project);
  if (!project) {
    return notFound();
  }

  return NextResponse.json({ data: project });
}
