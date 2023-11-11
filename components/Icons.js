export default function Icon({ children, text }) {
  return (
    <li className="mt-4 flex justify-center items-center flex-col text-gray-200 hover:text-white cursor-pointer">
      {children}
      <p>{text}</p>
    </li>
  );
}
