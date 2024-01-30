import PropTypes from "prop-types";
import { useContext } from "react";
import { PagesContext } from "../context";
import { NumberItem } from "../components";

export const Tecnology = ({ sectionData }) => {
  const { section } = useContext(PagesContext);
  if (!sectionData) return <></>;
  const item = sectionData.find((item) => item.name === section);

  return (
    <main id="main" className="grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden={true}>03</span> space lauch 101
      </h1>

      <picture>
        <source srcSet={`${item.images.portrait}`} type="image/jpg" media="(min-width: 45em)"/>
        <img src={`${item.images.landscape}`} alt={item.name} />
      </picture>

      <div className="number-indicators flex">
        {sectionData.map((item, index) => (
          <NumberItem active={section === item.name} key={item.name} id={index + 1} title={item.name}/>
        ))}
      </div>

      <article className="technology-details flow">
        <header className="flow">
          <h2
            style={{ "--alpha-txt": 0.5 }}
            className="text-white fs-600 uppercase ff-serif"
          >
            the technology ...
          </h2>
          <p className="fs-700 uppercase ff-serif name">{item.name}</p>
        </header>

        <p>{item.description}</p>
      </article>
    </main>
  );
};

Tecnology.propTypes = {
  sectionData: PropTypes.array,
};
