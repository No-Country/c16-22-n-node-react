import PropTypes from "prop-types";

ProfilePic.propTypes = {
    pic: PropTypes.string,
};

function ProfilePic({pic}) {
  return <img className="w-14 h-14 rounded-full" src={pic} alt="" />;
}

export default ProfilePic