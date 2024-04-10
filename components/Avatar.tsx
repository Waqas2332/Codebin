import { ReactNode } from "react";

type AvatarProps = {
  children: ReactNode;
  onModalToggle: () => void;
};

const Avatar = ({ children, onModalToggle }: AvatarProps) => {
  return (
    <button
      onClick={onModalToggle}
      className="flex items-center justify-center w-10 h-10 rounded-full border-white border-2 bg-transparent  focus:outline-none"
    >
      {children}
    </button>
  );
};

export default Avatar;
