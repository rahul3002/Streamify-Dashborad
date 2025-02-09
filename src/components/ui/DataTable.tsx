import { Stream } from '../../types/dashboard'

interface DataTableProps {
  data: Stream[]
}

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Song Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Artist
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date Streamed
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Stream Count
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User ID
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((stream) => (
            <tr key={stream.id}>
              <td className="px-6 py-4 whitespace-nowrap">{stream.songName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stream.artist}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stream.dateStreamed}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stream.streamCount}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stream.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
