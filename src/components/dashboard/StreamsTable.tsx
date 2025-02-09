import DataTable from '../ui/DataTable'
import { mockStreams } from '../../utils/mockData'

// Changed to named export to match the import in App.tsx
const StreamsTable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Streams</h2>
      <DataTable data={mockStreams} />
    </div>
  )
}

// Added explicit default export
export default StreamsTable
