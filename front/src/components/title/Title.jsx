import PropTypes from "prop-types";

Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

function Title({ text, className }) {
  return <h3 className={className} >{text}</h3>;
}

export default Title;
