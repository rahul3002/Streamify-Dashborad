import { Home, BarChart2, Users, Settings } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white h-[calc(100vh-4rem)]">
      <nav className="flex flex-col gap-2 p-4">
        <a className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <Home className="h-5 w-5" />
          <span>Dashboard</span>
        </a>
        <a className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <BarChart2 className="h-5 w-5" />
          <span>Analytics</span>
        </a>
        <a className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <Users className="h-5 w-5" />
          <span>Users</span>
        </a>
        <a className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  )
}
