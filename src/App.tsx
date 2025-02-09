import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import KeyMetrics from './components/dashboard/KeyMetrics'
import UserGrowthChart from './components/dashboard/UserGrowthChart'
import RevenueDistribution from './components/dashboard/RevenueDistribution'
import TopSongsChart from './components/dashboard/TopSongsChart'
import StreamsTable from './components/dashboard/StreamsTable'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="container mx-auto">
            <KeyMetrics />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <UserGrowthChart />
              <RevenueDistribution />
            </div>
            <TopSongsChart />
            <StreamsTable />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
