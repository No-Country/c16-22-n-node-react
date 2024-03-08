import ProfilePic from "./ProfilePic";

import PropTypes from "prop-types";

ChatHeader.propTypes = {
  user: PropTypes.object,
};


function ChatHeader({user}) {
  return (
    <div className="w-full h-[10%] bg-primary">
      <div className="h-full flex items-center ml-5 space-x-6">
        <ProfilePic pic={user._doc.pic}></ProfilePic>
        <p>
          {user._doc.name} {user._doc.lastname}
        </p>
      </div>
    </div>
  );
}

export default ChatHeader