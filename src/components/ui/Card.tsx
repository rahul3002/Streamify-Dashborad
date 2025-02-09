import { ReactNode } from 'react'

interface CardProps {
  label: string
  value: string | number
  change: number
  icon: ReactNode
}

export default function Card({ label, value, change, icon }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
      </div>
      <div className="mt-4">
        <span className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
        <span className="text-sm text-gray-500 ml-1">vs last month</span>
      </div>
    </div>
  )
}
