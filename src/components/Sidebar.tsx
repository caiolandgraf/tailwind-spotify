import { HomeIcon, Library, Search } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="p-6 w-72 bg-zinc-950">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="mt-10 space-y-5">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon /> Home
        </Link>

        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search /> Search
        </Link>

        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library /> Your Library
        </Link>
      </nav>

      <nav className="flex flex-col gap-3 pt-6 mt-6 border-t border-zinc-1200">
        <Link
          href="/"
          className="text-sm font-semibold text-zinc-400 hover:text-zinc-100"
        >
          Hot Hits Brasil
        </Link>

        <Link
          href="/"
          className="text-sm font-semibold tex text-zinc-400 hover:text-zinc-100"
        >
          Aniver Funk
        </Link>

        <Link
          href="/"
          className="text-sm font-semibold text-zinc-400 hover:text-zinc-100"
        >
          My Playlist #13
        </Link>

        <Link
          href="/"
          className="text-sm font-semibold text-zinc-400 hover:text-zinc-100"
        >
          Top Brasil
        </Link>
      </nav>
    </aside>
  )
}
