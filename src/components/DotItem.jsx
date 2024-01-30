import PropTypes from "prop-types";
import { useContext } from "react";
import { PagesContext } from "../context";

export const DotItem = ({ title, active }) => {
  const { changeSection } = useContext(PagesContext);

  return (
    <button
      aria-selected={active}
      className=""
      onClick={() => changeSection(title)}
    >
      <span className="sr-only">title </span>
    </button>
  );
};

DotItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
