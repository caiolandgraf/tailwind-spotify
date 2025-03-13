import Image from 'next/image'

export function MixItem() {
  return (
    <a
      href="/"
      className="flex flex-col gap-2 p-3 transition-colors rounded-md bg-white/5 hover:bg-white/10"
    >
      <Image
        width={120}
        height={120}
        src="/album.jpg"
        className="w-full rounded"
        alt="Capa do álbum Wasting Light da banda Foo Fighters"
      />

      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-500">
        Wallows, COIN, girl in red and more
      </span>
    </a>
  )
}
