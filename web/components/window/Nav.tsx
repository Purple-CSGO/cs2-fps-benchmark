import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 flex items-center justify-center w-full h-20 px-6 bg-white/80 backdrop-blur border-black/5 z-30">
      <ul className="flex w-full max-w-4xl gap-6 font-semibold text-zinc-950">
        <li className="mr-auto">
          <Link href="/">CS2帧数测试</Link>
        </li>
        <li>
          <Link href="/">主页</Link>
        </li>
        {/* <li>
          <Link href="/categories">Categories</Link>
        </li>
        <li>
          <Link href="/tags">Tags</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li> */}
      </ul>
    </nav>
  )
}
