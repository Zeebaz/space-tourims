import PropTypes from "prop-types";
import { useContext } from "react";
import { PagesContext } from "../context";
import { CategoryItem } from "../components";

export const Destinations = ({ sectionData }) => {
  const { section } = useContext(PagesContext);
  if (!sectionData) return <></>;
  const item = sectionData.find((item) => item.name === section);

  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden={true}>01</span> Pick your destination
      </h1>
      <picture>
        <source srcSet={`${item.images.webp}`} type="image/webp"/>
        <img src={`${item.images.png}`} alt={item.name} />
      </picture>

      <div className="tab-list underline-indicators flex">
        {sectionData.map((item) => (
          <CategoryItem
            key={item.name}
            active={section === item.name}
            title={item.name}
          />
        ))}
      </div>

      <article className="destination-info">
        <h2 className="fs-800 uppercase ff-serif">{item.name}</h2>
        <p>{item.description}</p>

        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">AVG DISTANCE</h3>
            <p className="ff-serif uppercase">{item.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">EST. TRAVEL TIME</h3>
            <p className="ff-serif uppercase">{item.travel}</p>
          </div>
        </div>
      </article>
    </main>
  );
};

Destinations.propTypes = {
  sectionData: PropTypes.array,
};
