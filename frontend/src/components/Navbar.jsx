import { Fragment, useState } from 'react'
import codingImage from '/assets/coding3.jpg'
import { Menu, Transition, Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Services', href: '#services', current: false },
  { name: 'About', href: '#about', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50 shadow-lg text-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Left: Logo + Nav links */}
              <div className="flex items-center">
                <img
                  className="h-8 w-8"
                  src={codingImage}
                  alt="Logo"
                />
                <div className="hidden md:block ml-6 space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-slate-700 text-white' : 'text-gray-300 hover:bg-slate-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Center: Search */}
              <div className="hidden md:block w-1/3 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-md bg-slate-700 pl-10 pr-3 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              {/* Right: Icons */}
              <div className="flex items-center gap-4">
                <button className="text-gray-300 hover:text-white">
                  <BellIcon className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="rounded-full focus:outline-none">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={codingImage}
                      alt="User"
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right bg-white text-black rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                      <Menu.Item>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Your Profile</a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-slate-700 hover:text-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-slate-700">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-slate-900 text-white' : 'text-gray-300 hover:bg-slate-600 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </a>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
