import React from 'react'

export default function About() {
  return (
    <div className="px-6 py-12">
      <div className="flex flex-col w-full max-w-4xl gap-6">
        <h1 className="mt-6 font-mono text-3xl">About</h1>

        <p className="text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut accusamus assumenda! Perspiciatis, repellat illum. Porro id quam provident eligendi,
          doloremque blanditiis non similique! Tempora provident id quasi enim dolore!
        </p>

        <h2 className="mt-4 font-mono text-2xl">Portfolio</h2>

        <ul className="flex flex-col gap-6 text-zinc-600">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum soluta magnam voluptatum dicta inventore iure esse, illum vero! Libero nemo
            incidunt adipisci et ipsam porro dolore nobis doloribus aliquam praesentium.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum soluta magnam voluptatum dicta inventore iure esse, illum vero! Libero nemo
            incidunt adipisci et ipsam porro dolore nobis doloribus aliquam praesentium.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum soluta magnam voluptatum dicta inventore iure esse, illum vero! Libero nemo
            incidunt adipisci et ipsam porro dolore nobis doloribus aliquam praesentium.
          </li>
        </ul>
      </div>
    </div>
  )
}
