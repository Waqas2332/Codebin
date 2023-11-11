import { IoSaveOutline } from "react-icons/io5";
import { BiDuplicate } from "react-icons/bi";
import { VscNewFile } from "react-icons/vsc";
import Icon from "./Icons";
export default function Menu() {
  const ICONLIST = [
    { icon: <VscNewFile />, text: "New File" },
    { icon: <IoSaveOutline />, text: "Save" },
    { icon: <BiDuplicate />, text: "Duplicate" },
  ];
  return (
    <div className="w-[100%] opacity-30 hover:opacity-100 transition-all fixed bottom-8">
      <nav className="w-[50%] max-sm:w-[75%] m-auto rounded-full bg-[#0081a2] h-12">
        <ul className="flex justify-evenly items-center h-8">
          {ICONLIST.map((icon) => (
            <Icon text={icon.text}>{icon.icon}</Icon>
          ))}
        </ul>
      </nav>
    </div>
  );
}
