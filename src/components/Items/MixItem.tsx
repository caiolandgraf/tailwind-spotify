import { Play } from 'lucide-react'
import Image from 'next/image'

export function PlaylistItem() {
  return (
    <a
      href="/"
      className="flex items-center gap-4 overflow-hidden transition-colors rounded group hover:bg-white/10 bg-white/5"
    >
      <Image
        src="/album.jpg"
        width={85}
        height={85}
        alt="Capa do álbum Wasting Light da banda Foo Fighters"
      />

      <strong>Wasting Light</strong>

      <button
        type="button"
        className="invisible group-hover:visible flex items-center justify-center w-12 h-12 pl-0.5 ml-auto mr-8 text-black rounded-full bg-green-400 cursor-pointer"
      >
        <Play className="fill-black" />
      </button>
    </a>
  )
}
