export default function Icon({ children, text, onClick }) {
  return (
    <li
      className="mt-5 flex justify-center items-center flex-col text-gray-200 hover:text-white cursor-pointer"
      onClick={onClick}
    >
      {children}
      <p>{text}</p>
    </li>
  );
}
