import PropTypes from "prop-types";
import { useContext } from "react";
import { PagesContext } from "../context";

export const NumberItem = ({ id, title, active }) => {
  const { changeSection } = useContext(PagesContext);

  return (
    <button key={title} aria-selected={active} onClick={() => changeSection(title)}>
      {id}
    </button>
  );
};

NumberItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
