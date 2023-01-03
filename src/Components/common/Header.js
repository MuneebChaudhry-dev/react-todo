import PropTypes from "prop-types";

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//     </div>
//   );
// };
// const headingStyle = { color: "red", backgroundColor: "black" };
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      {/* <Button
        onClick={onAdd}
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
      /> */}
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
