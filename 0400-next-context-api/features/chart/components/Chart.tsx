'use client';
import { Bar } from 'react-chartjs-2';
import 'features/chart/lib/chart';

export default function Chart() {
  const planned = [93, 43, 70, 73, 8, 31, 53];
  const completed = [7, 36, 19, 30, 36, 4, 34];

  const remaining = planned.map((p, i) => Math.max(p - completed[i], 0));

  const data = {
    labels: ['9/22', '9/23', '9/24', '9/25', '9/26', '9/27', '9/28'],
    datasets: [
      {
        label: '完了タスク',
        data: [7, 36, 19, 30, 36, 4, 34],
        backgroundColor: 'rgba(129, 229, 189, 0.981)',
        hoverBackgroundColor: 'rgba(113, 250, 195, 0.981)',
      },
      {
        label: '予定タスク',
        data: remaining,
        backgroundColor: 'rgba(203, 246, 229, 0.6)',
        hoverBackgroundColor: 'rgba(203, 246, 229, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 16,
          boxHeight: 8,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="grow shrink bg-light2 ">
      <h2 className="flex justify-between text-[14px] font-thin items-center">
        進捗
      </h2>
      <div className="py-4 px-0">
        <div className="h-full">
          <div className="h-full">
            <div className="mt-16 w-[618px] h-[309px]">
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
