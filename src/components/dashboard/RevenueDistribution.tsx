import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function RevenueDistribution() {
  const data = {
    labels: ['Subscriptions', 'Advertisements', 'Other'],
    datasets: [
      {
        data: [70, 25, 5],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)'
        ]
      }
    ]
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Revenue Distribution</h2>
      <Pie data={data} />
    </div>
  )
}
