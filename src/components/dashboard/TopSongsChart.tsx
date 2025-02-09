import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function TopSongsChart() {
  const data = {
    labels: ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5'],
    datasets: [
      {
        label: 'Streams',
        data: [300000, 250000, 200000, 150000, 100000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Top 5 Streamed Songs</h2>
      <Bar data={data} />
    </div>
  )
}
