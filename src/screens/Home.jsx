import PropTypes from "prop-types";

export const Home = ({ sectionData }) => {
  if (!sectionData) return <></>;

  return (
    <main id="main" className="grid-container grid-container--home">
      <div data-id="1">
        <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
          {sectionData.title}

          <span className="fs-900 ff-serif text-white d-block">
            {sectionData.subtitle}
          </span>
        </h1>
        <p>{sectionData.description}</p>
      </div>
      <div data-id="2">
        <a
          href="#"
          className="large-button uppercase ff-serif text-dark bg-white"
        >
          Exploress
        </a>
      </div>
    </main>
  );
};

Home.propTypes = {
  sectionData: PropTypes.object,
};
