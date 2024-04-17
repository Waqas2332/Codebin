"use client";
import { Menu, Transition } from "@headlessui/react";
import Avatar from "./Avatar";

export default function AvatarList({ children }: any) {
  return (
    <div className="text-right relative ">
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button>
            <Avatar>{children}</Avatar>
          </Menu.Button>
        </div>
        <Transition
          as="div"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          className="absolute right-4 top-6 w-56 text-bgPrimary border-2 rounded-lg bg-white"
        >
          <div className="cursor-pointer rounded-lg p-3 hover:bg-bgPrimary hover:text-white">
            Dashboard
          </div>
          <div className="cursor-pointer rounded-lg p-3 hover:bg-bgPrimary hover:text-white">
            Dashboard
          </div>
          <div className="cursor-pointer rounded-lg p-3 hover:bg-bgPrimary hover:text-white">
            Dashboard
          </div>
        </Transition>
      </Menu>
    </div>
  );
}
