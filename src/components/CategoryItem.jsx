import PropTypes from "prop-types";
import { useContext } from "react";
import { PagesContext } from "../context";

export const CategoryItem = ({ title, active }) => {
    const { changeSection} = useContext(PagesContext);

  return (
    <button
      aria-selected={active}
      className="uppercase text-accent ff-sans-cond letter-spacing-2"
      onClick={() => changeSection(title)}
    >
      {title}
    </button>
  );
};

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
