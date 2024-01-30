import PropTypes from "prop-types";
import { Header } from "../components";
import { useContext } from "react";
import { PagesContext } from "../context";

export const MainLayout = ({ children }) => {
  const { page } = useContext(PagesContext);
  return (
    <div className={`parent ${page}`}>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <Header />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
