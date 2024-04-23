import { IoSaveOutline } from "react-icons/io5";
import { VscNewFile } from "react-icons/vsc";
import { toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

import Icon from "./Icons";

export default function Menu({ mode, onSave }) {
  const router = useRouter();

  const NEW_FILE_ICONS = [
    { icon: <IoSaveOutline />, text: "Save", onClick: onSave },
    {
      icon: <FaRegEdit />,
      text: "Edit",
      onClick: () => {
        toast.info("Save File for Editing");
      },
    },
    {
      icon: <IoShareSocialOutline />,
      text: "Share",
      onClick: () => {
        toast.info("Save File for Sharing");
      },
    },
  ];

  const FILE_ICONS = [
    {
      icon: <VscNewFile />,
      text: "New",
      onClick: () => {
        router.push("/new/file");
      },
    },
    {
      icon: <FaRegEdit />,
      text: "Edit",
      // TODO add editing logic
      onClick: () => {
        toast.info("Save File for Editing");
      },
    },
    {
      icon: <IoShareSocialOutline />,
      text: "Share",
      // TODO add link sharing capability
      onClick: () => {
        toast.info("Save File for Sharing");
      },
    },
    {
      icon: <FaRegStar />,
      text: "Add To Star",
      // TODO starr file
      onClick: () => {},
    },
  ];

  let ICONLIST = [];

  if (mode === "new") {
    ICONLIST = NEW_FILE_ICONS;
  }

  if (mode === "file") {
    ICONLIST = FILE_ICONS;
  }

  return (
    <div className="w-[100%] opacity-30 hover:opacity-100 transition-all fixed bottom-8">
      <nav className="w-[50%] max-sm:w-[75%] m-auto rounded-full bg-white h-12">
        <ul className="flex justify-evenly items-center h-8">
          {ICONLIST.map((icon) => (
            <Icon key={icon.text} text={icon.text} onClick={icon.onClick}>
              {icon.icon}
            </Icon>
          ))}
        </ul>
      </nav>
    </div>
  );
}
