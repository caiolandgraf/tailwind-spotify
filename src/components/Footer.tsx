import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="flex items-center justify-between p-6 py-4 border-t bg-zinc-800 border-zinc-700">
      <div className="flex items-center gap-3">
        <Image
          width={56}
          height={56}
          src="/album.jpg"
          className="rounded"
          alt="Capa do álbum Wasting Light da banda Foo Fighters"
        />

        <div className="flex flex-col">
          <strong className="font-normal">Rope</strong>
          <span className="text-sm text-zinc-400">Foo Fighters</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle className="cursor-pointer text-zinc-200" size={20} />
          <SkipBack className="cursor-pointer text-zinc-200" size={20} />

          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 pl-0.5 text-black rounded-full bg-white cursor-pointer"
          >
            <Play className="fill-black" />
          </button>

          <SkipForward className="cursor-pointer text-zinc-200" size={20} />
          <Repeat className="cursor-pointer text-zinc-200" size={20} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="w-40 h-1 rounded-full bg-zinc-200" />
          </div>
          <span className="text-xs text-zinc-500">0:31</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />

        <div className="flex items-center gap-1">
          <Volume size={20} />
          <div className="w-24 h-1 rounded-full bg-zinc-600">
            <div className="w-10 h-1 rounded-full bg-zinc-200" />
          </div>
        </div>

        <Maximize2 size={20} />
      </div>
    </footer>
  )
}
