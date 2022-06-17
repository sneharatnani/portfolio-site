import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Logo from "./Logo.js";
import burger from "../assets/icons/menu.svg";
import x from "../assets/icons/x.svg";
import NavLinks from "./NavLinks.js";

export default function Example() {
  return (
    <div className="min-h-full">
      <Popover
        as="header"
        className="text-lightGrey dark:bg-gray-800 dark:text-white"
      >
        {({ open, close }) => (
          <>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="relative flex h-[10vh] items-center justify-center lg:justify-between">
                {/* Logo */}
                <div className="absolute left-0 flex-shrink-0 lg:static">
                  <Logo />
                </div>
                {/* links for desktop */}
                <NavLinks />
                {/* Mobile menu button */}
                <div className="absolute right-0 flex-shrink-0 lg:hidden">
                  <Popover.Button className="p-2 hover:bg-gray-100 rounded-md inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green">
                    {open ? (
                      <img
                        src={x}
                        alt="menu icon"
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <img
                        src={burger}
                        alt="menu icon"
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Popover.Button>
                </div>
              </div>
            </div>

            <Transition.Root as={Fragment}>
              <div className="lg:hidden">
                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                      <div className="pt-3 pb-2">
                        <div className="flex items-center justify-between px-4">
                          <Logo />
                          <div className="-mr-2">
                            <Popover.Button className="p-2 hover:bg-gray-100 rounded-md inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green">
                              <img
                                src={x}
                                alt="menu icon"
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                          <Link
                            to="/"
                            className="block rounded-md px-3 py-2 font-medium hover:bg-gray-100 hover:text-green"
                            onClick={close}
                          >
                            Home
                          </Link>

                          <Link
                            to="/projects"
                            className="block rounded-md px-3 py-2 font-medium hover:bg-gray-100 hover:text-green"
                            onClick={close}
                          >
                            Projects
                          </Link>
                          <Link
                            to="/about"
                            className="block rounded-md px-3 py-2 font-medium hover:bg-gray-100 hover:text-green"
                            onClick={close}
                          >
                            About
                          </Link>
                          <Link
                            to="/"
                            className="block rounded-md px-3 py-2 font-medium hover:bg-gray-100 hover:text-green"
                            onClick={close}
                          >
                            Resume
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition.Child>
              </div>
            </Transition.Root>
          </>
        )}
      </Popover>
    </div>
  );
}
