'use client'
import { User } from '@/lib/dummyDatas';
import { ROUTES } from '@/lib/routes';
import { useAuth } from '@/store/useAuth';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';

const userNavigation = [
  { name: 'Admin', href: ROUTES.ADMIN },
]

const Navbar = () => {
  const { onAuth, setOnAuth } = useAuth();

  return (
    <Disclosure as="nav" className="border-b border-gray-200 bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex justify-between w-full">

                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </Link>
                </div>
                {!onAuth &&
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:justify-end sm:space-x-8">
                    <Link
                      href={'/'}
                      onClick={() => setOnAuth(true)}
                      className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700`}
                    >
                      Login
                    </Link>
                  </div>}
              </div>


              {onAuth && <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src={User.imageUrl} alt="" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <>
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                href={item.href}
                                className={clsx(
                                  active && 'bg-gray-100',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={ROUTES.LOGIN}
                              onClick={() => setOnAuth(false)}
                              className={`block px-4 py-2 text-sm text-gray-700 ${active && 'bg-gray-100'}`}
                            >
                              Logout
                            </Link>
                          )}
                        </Menu.Item>
                      </>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>}

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {!onAuth &&
              <div className="space-y-1 pb-3 pt-2">
                <Link
                  href={ROUTES.MAIN}
                  className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800`}
                >
                  Login
                </Link>
              </div>}

            {onAuth &&
              <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={User.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{User.name}</div>
                    <div className="text-sm font-medium text-gray-500">{User.email}</div>
                  </div>

                </div>
                <div className="mt-3 space-y-1">
                  {userNavigation.map((item) => (
                    <Link
                      key={item.name}
                      onClick={() => { }}
                      href={item.href}
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    onClick={() => setOnAuth(false)}
                    href={ROUTES.LOGIN}
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Logout
                  </Link>
                </div>
              </div>}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;