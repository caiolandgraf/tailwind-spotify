import { Footer } from '@/components/Footer'
import { PlaylistItem } from '@/components/Items/MixItem'
import { MixItem } from '@/components/Items/PlaysetItem'
import { Sidebar } from '@/components/Sidebar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="p-1 rounded-full cursor-pointer bg-black/40"
              >
                <ChevronLeft />
              </button>

              <button
                type="button"
                className="p-1 rounded-full cursor-pointer bg-black/40"
              >
                <ChevronRight />
              </button>
            </div>

            <div className="flex items-center gap-2 pr-4 rounded-full bg-zinc-950">
              <Image
                width={30}
                height={30}
                src="/caio.jpg"
                className="border border-green-800 rounded-full"
                alt="Capa do álbum Wasting Light da banda Foo Fighters"
              />

              <strong className="text-sm font-semibold">Caio Landgraf</strong>
            </div>
          </div>

          <h1 className="mt-10 text-4xl font-bold">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <PlaylistItem key={`playlist-${index}`} />
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-bold">Made for Caio Landgraf</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <MixItem key={`mix-item-${index}`} />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
