'use client';
import { Bar } from 'react-chartjs-2';
import 'features/chart/lib/chart';

export default function Chart() {
  const data = {
    labels: ['赤', '青', '黄', '緑', '紫'],
    datasets: [
      {
        label: 'スコア',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'サンプル棒グラフ',
      },
    },
  };

  return <Bar data={data} options={options} />;
}
