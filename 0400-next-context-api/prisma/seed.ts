import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

const prisma = new PrismaClient();

async function main() {
  // プロジェクト初期データ
  const projects = [
    {
      id: '01aae611-e02f-46d7-997f-d88cd7842c01',
      name: 'プログラミング',
      slug: 'programming',
      goal: '期限日までにフロントエンドエンジニアとして就職する。',
      shouldbe: 'エンジニアとしての学習習慣を身につけて生活する。',
      color: '#00008c60',
      deadline: dayjs().add(7, 'days').toDate(),
      status: 'active',
    },
    {
      id: '9a75b860-8587-4a78-98f8-39fae76b82df',
      name: '英語',
      slug: 'english',
      goal: 'IELTS Overall 7.0 を取得する。',
      shouldbe: '英語に浸る。',
      color: '#0019ff99',
      deadline: dayjs().add(14, 'days').toDate(),
      status: 'active',
    },
    {
      id: 'f0647d45-78ec-4eb3-b432-712c3131a080',
      name: 'プライベート',
      slug: 'private',
      goal: '長期休みに旅行をする',
      shouldbe: '',
      color: '#00a5ff99',
      deadline: dayjs().add(21, 'days').toDate(),
      status: 'active',
    },
  ];

  // プロジェクトをシード
  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: {},
      create: project,
    });
  }

  // タスク初期データ（100個）
  const tasks = Array.from({ length: 100 }, (_, index) => ({
    id: `task-${index + 1}`,
    title: `タスク ${index + 1}`,
    description: '',
    status: 'scheduled' as const,
    kind: 'task',
    deadline: dayjs().add(14, 'days').toDate(),
    projectId: projects[index % 3].id, // ラウンドロビンでプロジェクトに割り当て
  }));

  for (const task of tasks) {
    await prisma.task.upsert({
      where: { id: task.id },
      update: {},
      create: task,
    });
  }

  console.log('✅ シードデータを挿入しました');
}

main()
  .catch((e) => {
    console.error('❌ エラーが発生しました:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
