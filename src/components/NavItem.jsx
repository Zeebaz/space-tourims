import PropTypes from "prop-types";
import { useContext } from "react";
import { PagesContext } from "../context";

export const NavItem = ({ decoration, name, setShowNavSide }) => {
  const { changePage, page } = useContext(PagesContext);

  return (
    <li
      className={page === name ? "active" : ""}
      onClick={() => {
        changePage(name);
        setShowNavSide("false");
      }}
    >
      <a
        className="ff-sans-cond uppercase text-white letter-spacing-2 up"
        href="#"
      >
        <span aria-hidden={true}>{decoration}</span>
        {name}
      </a>
    </li>
  );
};

NavItem.propTypes = {
  decoration: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setShowNavSide: PropTypes.func.isRequired,
};
