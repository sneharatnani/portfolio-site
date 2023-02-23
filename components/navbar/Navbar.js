import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Logo from "./Logo.js";
import NavLinks from "./NavLinks.js";
import ThemeToggler from "./ThemeToggler.js";
import MobileLinks from "./MobileLinks.js";
import BurgerIcon from "./BurgerIcon.js";
import XIcon from "./XIcon.js";

export default function Navbar() {
  return (
    <div className="h-16">
      <Popover
        as="header"
        className="z-[100] shadow-4xl bg-white dark:bg-gray-900 fixed w-full dark:shadow-black"
      >
        {({ open, close }) => (
          <>
            <div className="mx-auto h-16 px-4 sm:px-8 lg:px-28 xl:px-0 xl:w-[55rem]">
              <div className="relative flex h-full items-center justify-between lg:justify-between">
                {/* Logo */}
                <Logo />
                {/* links for desktop */}
                <NavLinks />
                {/* Mobile menu button */}
                <div className="absolute right-0 flex-shrink-0 md:hidden">
                  <Popover.Button className="bg-gray-100 dark:bg-gray-700 rounded-full h-12 w-12 inline-flex items-center justify-center focus:outline-none hover:ring-2 hover:ring-green dark:ring-white">
                    {open ? <XIcon /> : <BurgerIcon />}
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
                  <Popover.Overlay className="z-20 fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />
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
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-700 divide-y divide-gray-200 sm:absolute right-4 sm:w-80">
                      <div className="py-4">
                        <Popover.Button className="absolute right-9 focus:outline-none">
                          <XIcon />
                        </Popover.Button>
                        <div className="px-2 pl-6 pr-4 space-y-1 text-lg">
                          {/* mobile links */}
                          <MobileLinks close={close} />
                          <hr className="dark:border-gray-500 pb-3" />
                          <ThemeToggler />
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
