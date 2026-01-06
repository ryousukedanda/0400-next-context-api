import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarController, BarElement, Legend);
