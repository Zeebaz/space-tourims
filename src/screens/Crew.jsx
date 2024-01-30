import PropTypes from "prop-types";
import { useContext } from "react";
import { PagesContext } from "../context";
import { DotItem } from "../components";
export const Crew = ({ sectionData }) => {
  const { section } = useContext(PagesContext);
  if (!sectionData) return <></>;
  const item = sectionData.find((item) => item.name === section);

  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden={true}>02</span> Meet your crew
      </h1>

      <img src={`${item.images.webp}`} alt={item.name} />

      <div className="dot-indicators flex">
        {sectionData.map((item) => (
          <DotItem
            key={item.name}
            title={item.name}
            active={section === item.name}
          />
        ))}
      </div>

      <article className="crew-details flow">
        <header className="flow flow--space-small">
          <h2
            style={{ "--alpha-txt": 0.5 }}
            className="text-white fs-600 uppercase ff-serif"
          >
            {item.role}
          </h2>
          <p className="fs-700 uppercase ff-serif">{item.name}</p>
        </header>

        <p>{item.bio}</p>
      </article>
    </main>
  );
};

Crew.propTypes = {
  sectionData: PropTypes.array,
};
