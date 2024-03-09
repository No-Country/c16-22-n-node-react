import { useState } from "react";
import ProfilePic from "./ProfilePic";
import PropTypes from "prop-types";

MyChatItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  pic: PropTypes.string
};


function MyChatItem({ id, title, subtitle, pic, setSelectedChatId }) {
  const [isSelected, setIsSelected] = useState(false);

  if (!pic || !title || !subtitle) {
    pic =
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
    title = "Buscando profesionales";
    subtitle = "Cargando chat existentes";
  }

  const handleClick = (id) => {
    setIsSelected(!isSelected);
    console.log(id);
    setSelectedChatId(id);
    localStorage.setItem("selectedChat", !isSelected ? id : "undefined");
  };

  return (
    <div
      onClick={() => handleClick(id)}
      className={`flex w-full h-[80px] p-5 items-center
    border-b-[#D0D0D0] border-b-[1px]
      ${isSelected ? "bg-secondary" : "bg-white"}`}
    >
      <ProfilePic pic={pic} />
      {/* {a state should handle if the div is selected or not} */}
      <div
        className="flex flex-col ml-3 text-[14px] truncate"
        // selected={chat.selected}
      >
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default MyChatItem;
