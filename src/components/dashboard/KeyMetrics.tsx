import { Users, Music, DollarSign, Trophy } from 'lucide-react'
import Card from '../ui/Card'

export default function KeyMetrics() {
  const metrics = [
    {
      label: 'Total Users',
      value: '1.2M',
      change: 12.5,
      icon: <Users className="h-5 w-5" />
    },
    {
      label: 'Active Users',
      value: '850K',
      change: 8.2,
      icon: <Users className="h-5 w-5" />
    },
    {
      label: 'Total Streams',
      value: '25M',
      change: 15.8,
      icon: <Music className="h-5 w-5" />
    },
    {
      label: 'Revenue',
      value: '$2.4M',
      change: 22.4,
      icon: <DollarSign className="h-5 w-5" />
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <Card key={metric.label} {...metric} />
      ))}
    </div>
  )
}
