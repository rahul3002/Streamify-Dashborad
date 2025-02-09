import { Bell } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Streamify Analytics</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <button className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
