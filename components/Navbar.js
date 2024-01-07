"use client";

import { Dialog } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Avatar from "./Avatar";

const guestNavigation = [{ name: "Go To Editor", href: "/new/file" }];

const authNavigation = [
  ...guestNavigation,
  // TODO have to Replace HARD CODED links
  {
    name: "View Saved Files",
    href: "/ALL_FILES",
  },
  {
    name: "Starred Files",
    href: "/STARRED",
  },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  if (isModalOpen) {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  }

  return (
    <header className="text-white bg-[#0081a2] sticky inset-x-0  top-0 z-50">
      <nav
        className="flex items-center justify-between container mx-auto p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-2xl font-mono font-extrabold"
          >
            CodeBin
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FiMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {!session
            ? guestNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition-underline underline-on-hover font-mono font-semibold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))
            : authNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition-underline underline-on-hover font-mono font-semibold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!session ? (
            <Link href="/signin" className="btn">
              Login
            </Link>
          ) : (
            <>
              <Avatar onModalToggle={toggleModal}>
                {session.user?.name.charAt(0).toUpperCase()}
              </Avatar>
              {isModalOpen && (
                <div className="absolute right-0 mt-8 z-50">
                  <div className="z-50  p-4 rounded-lg shadow-lg">
                    <button onClick={() => signOut()} className="btn">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="text-white fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0081a2] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5 text-2xl font-mono font-extrabold"
            >
              CodeBin
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col">
                {!session
                  ? guestNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block transition-underline underline-on-hover font-mono font-semibold leading-6 text-white"
                      >
                        {item.name}
                      </a>
                    ))
                  : authNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="transition-underline underline-on-hover font-mono font-semibold leading-6 text-white"
                      >
                        {item.name}
                      </a>
                    ))}
              </div>
              <div className="py-6">
                {!session ? (
                  <Link href="/signin" className="btn">
                    Login
                  </Link>
                ) : (
                  <>
                    <button onClick={() => signOut()} className="btn">
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
