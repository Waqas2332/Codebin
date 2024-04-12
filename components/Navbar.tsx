"use client";

import { Dialog } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { signOut, useSession } from "next-auth/react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //   const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [session, setSession] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  if (isModalOpen) {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 70;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    navbar: {
      backgroundColor: isScrolled ? "#fff" : "transparent", // Example changes
      boxShadow: isScrolled ? "0px 2px 5px rgba(0, 0, 0, 0.1)" : "none",
      color: isScrolled ? "black" : "white",
    },
  };

  return (
    <header
      style={styles.navbar}
      className="text-white sticky inset-x-0  top-0 z-50 transition-colors"
    >
      <nav
        className="flex items-center justify-between w-[90%] max-md:w-[98%] mx-auto p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className={`${
              isScrolled ? "text-bgPrimary" : "text-white"
            } -m-1.5 p-1.5 text-2xl font-extrabold`}
          >
            CodeBin
          </Link>
        </div>

        {/* Mobile menu */}

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

        <div className="hidden ms-auto lg:flex items-center lg:gap-x-12">
          {!session
            ? guestNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-underline underline-on-hover   font-semibold leading-6 ${
                    isScrolled ? "text-bgPrimary" : "text-white"
                  } `}
                >
                  {item.name}
                </a>
              ))
            : authNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition-underline underline-on-hover   font-semibold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!session ? (
            <Link
              href="/auth/login"
              className={`${isScrolled ? "btn-primary " : "btn"} w-28 scale`}
            >
              Login
            </Link>
          ) : (
            <>
              <Avatar onModalToggle={toggleModal}>W</Avatar>
              {isModalOpen && (
                <div className="absolute right-0 mt-8 z-50">
                  <div className="z-50  p-4 rounded-lg shadow-lg">
                    <button className="btn">Logout</button>
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
            <Link href="/" className="-m-1.5 p-1.5 text-2xl   font-extrabold">
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
                        className="block transition-underline underline-on-hover   font-semibold leading-6 text-white"
                      >
                        {item.name}
                      </a>
                    ))
                  : authNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="transition-underline underline-on-hover   font-semibold leading-6 text-white"
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
                    <button className="btn">Logout</button>
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
