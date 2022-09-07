export default function StyledNavLink({ children }) {
  return (
    <li className="relative transform translate-y-0 transition-transform duration-500 ease-in-out after:contents-[''] after:w-full after:h-[2px] after:bg-green dark:after:bg-mustard after:origin-center after:scale-x-0 after:absolute after:bottom-0 after:left-0 after:transform after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:text-green dark:hover:text-mustard">
      {children}
    </li>
  );
}
