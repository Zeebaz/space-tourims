import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { data } from "../../db/data";

export const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
  const [page, setPage] = useState("home");
  const [section, setSection] = useState("");
  const [sectionData, setSectionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    changeSection(data[`${page}`]?.data[0]?.name ?? null, page);
  }, []);

  const changeSection = (section, currentPage = page) => {
    setSection(section);
    setSectionData(data[`${currentPage}`]?.data);
  };

  const changePage = (page) => {
    setIsLoading(() => true);
    setPage(page);
    changeSection(data[`${page}`]?.data[0]?.name ?? null, page);
    setIsLoading(() => false);
  };

  return (
    <PagesContext.Provider
      value={{
        page,
        section,
        sectionData,
        isLoading,
        changePage,
        changeSection,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};

PagesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
