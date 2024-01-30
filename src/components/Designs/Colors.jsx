export const Colors = () => {
  return (
    <section id="colors" style={{ margin: "4rem 0" }}>
      <h2 className="numbered-title" style={{"--space": "2rem"}}>
        <span>01</span> colors
      </h2>
      <div className="flex">
        <div className="" style={{ flexGrow: 1 }}>
          <div
            className="bg-dark text-white"
            style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
          >
            #0B0D17
          </div>
          <p>
            <span className="text-accent">RGB</span> 11, 13, 23
          </p>
          <p>
            <span className="text-accent">HSL</span> 230°, 35%, 7%
          </p>
        </div>
        <div className="" style={{ flexGrow: 1 }}>
          <div
            className="bg-accent text-dark"
            style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
          >
            #0B0D17
          </div>
          <p>
            <span className="text-accent">RGB</span> 11, 13, 23
          </p>
          <p>
            <span className="text-accent">HSL</span> 230°, 35%, 7%
          </p>
        </div>
        <div className="" style={{ flexGrow: 1 }}>
          <div
            className="bg-white text-dark"
            style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
          >
            #0B0D17
          </div>
          <p>
            <span className="text-accent">RGB</span> 11, 13, 23
          </p>
          <p>
            <span className="text-accent">HSL</span> 230°, 35%, 7%
          </p>
        </div>
      </div>
    </section>
  );
};
