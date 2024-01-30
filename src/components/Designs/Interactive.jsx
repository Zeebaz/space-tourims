export const Interactive = () => {
  return (
    <section className="flow" id="interactive-elements">
      <h2 className="numbered-title">
        <span>03</span> Interactive elements
      </h2>

      {/* <!-- navigation --> */}
      <div>
        <nav>
          <ul
            className="primary-navigation underline-indicator flex"
            style={{ "--gap": "8rem" }}
          >
            <li className="active">
              <a className="uppercase text-white letter-spacing-2" href="#">
                <span>01</span>Active
              </a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="#">
                <span>02</span>Hovered
              </a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="#">
                <span>03</span>Idle
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex">
        <div style={{ marginTop: "5rem" }}>
          {/* <!-- explore button --> */}
          <a
            href="#"
            className="large-button uppercase ff-serif fs-600 text-dark bg-white"
          >
            Explore
          </a>
        </div>

        <div
          className="flow"
          style={{ marginBottom: "50vh", "--flow-space": "4rem" }}
        >
          {/* <!-- Tabs --> */}
          <div className="tab-list underline-indicator flex">
            <button
              aria-selected={true}
              className="uppercase text-accent bg-dark ff-sans-cond letter-spacing-2"
            >
              Moon
            </button>
            <button
              aria-selected={false}
              className="uppercase text-accent bg-dark ff-sans-cond letter-spacing-2"
            >
              Mars
            </button>
            <button
              aria-selected={false}
              className="uppercase text-accent bg-dark ff-sans-cond letter-spacing-2"
            >
              Europa
            </button>
          </div>
          {/* <!-- Dots --> */}
          <div className="dot-indicators flex">
            <button aria-selected={true} className="">
              <span className="sr-only">Slide title </span>
            </button>
            <button aria-selected={false} className="">
              <span className="sr-only">Slide title </span>
            </button>
            <button aria-selected={false} className="">
              <span className="sr-only">Slide title </span>
            </button>
          </div>

          {/* <!-- Numbers --> */}
          <div className="number-indicators flex">
            <button aria-selected={true} >
              1
            </button>
            <button aria-selected={false} >
              2
            </button>
            <button aria-selected={false} >
              3
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
