import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { handleLogAuth } from "../../../handleLogout/handleLogAuth";

function getIconComponent(icon) {
  switch (icon) {
    case "notification":
      return <BellIcon className="w-10 h-10 text-primary" />;
    case "message":
      return <ChatBubbleLeftIcon className="w-10 h-10 text-primary" />;
    case "search":
      return <MagnifyingGlassIcon className="w-10 h-10 text-primary" />;
    case "profile":
      return <UserCircleIcon className="w-10 h-10 text-primary" />;
    default:
      return null; // Handle the case where icon is not recognized
  }
}

function Icon({ path, icon, label }) {
  const { handleclearlocalStorage } = handleLogAuth();
  const iconComponent = getIconComponent(icon);

  return (
    <>
      {path ? (
        <Link className="flex flex-col items-center" to={path}>
          {iconComponent}
          <p className="font-small text-[13px]">{label}</p>
        </Link>
      ) : (
        <button
          onClick={() => handleclearlocalStorage()}
          className="flex flex-col items-center"
        >
          {iconComponent}
          <p className="font-small text-[13px]">{label}</p>
        </button>
      )}
    </>
  );
}

export default Icon;
