'use client'

import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import Image from 'next/image'
import { Button } from 'primereact/button'
import { InputSwitch } from 'primereact/inputswitch'
import { useState } from 'react'

// mock posts data
const posts = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
]

export default function Home() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="px-6 py-12">
      <div className="flex flex-col w-full max-w-4xl gap-6">
        <code className="text-4xl font-bold">Hello, world!</code>

        <div className="flex gap-5 items-center">
          <Button className="bg-cyan-400 px-4 py-2 text-white font-semibold">Click Me</Button>
          <InputSwitch checked={checked} onChange={e => setChecked(e.value)} />
        </div>

        <TestTabs />

        <Image src="/front.jpeg" alt="Hero" width="1280" height="720" />

        <div className="flex flex-col gap-6 py-12">
          <h2 className="mt-5 text-3xl font-semibold">Recent Posts</h2>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <li key={post.id} className="px-8 py-6 space-y-2 transition rounded-lg bg-zinc-100 hover:brightness-95">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique tenetur magnam, dolore qui provident sequi reprehenderit</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function TestTabs() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="photos" title="Photos">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}
