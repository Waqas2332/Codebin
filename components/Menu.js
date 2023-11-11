import { IoSaveOutline } from "react-icons/io5";
import { BiDuplicate } from "react-icons/bi";
import { VscNewFile } from "react-icons/vsc";
import Icon from "./Icons";
export default function Menu({ onSave }) {
  const ICONLIST = [
    {
      icon: <VscNewFile />,
      text: "New File",
      onClick: () => {
        console.log("Clicked");
      },
    },
    { icon: <IoSaveOutline />, text: "Save", onClick: onSave },
    {
      icon: <BiDuplicate />,
      text: "Duplicate",
      onClick: () => {
        console.log("Clicked");
      },
    },
  ];
  return (
    <div className="w-[100%] opacity-30 hover:opacity-100 transition-all fixed bottom-8">
      <nav className="w-[50%] max-sm:w-[75%] m-auto rounded-full bg-[#0081a2] h-12">
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
