import { handleLogAuth } from "../../../handleLogout/handleLogAuth";
import Icon from "./Icon";

const Logout = () => {

const {handleclearlocalStorage, user}= handleLogAuth()

  return (
    <div
      className="flex items-center gap-5 font-roboto
    text-xl font-medium text-primary"
    >
      <Icon path="/" icon={"notification"} label={"Notificaciones"} />
      <Icon path="/chat" icon={"message"} label={"Mensajes"} />
      <Icon
        
        icon={"profile"}
        label={"Mi perfil"}
      />
      {/* <span
        className="
      mr-1
      "
      >
        {user?._doc.name}
      </span>
      <img className="w-12 rounded-full" src={user?._doc.pic} alt="avatar" />
      <i
        style={{ color: "#7C7C7C" }}
        onClick={() => handleclearlocalStorage()}
        className="cursor-pointer bx bx-log-out bx-md"
      ></i> */}
    </div>
  );
};

export default Logout;
