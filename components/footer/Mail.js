import MailIcon from "../../public/icons/MailIcon.js";

export default function Mail() {
  return (
    <a
      href="mailto:sneharatnani5@gmail.com"
      className="bg-white dark:bg-gray-600 dark:shadow-gray-900 p-2 rounded-full shadow-xl group"
    >
      <MailIcon />
    </a>
  );
}
