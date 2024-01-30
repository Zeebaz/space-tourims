// import DesingApp from "./components/Designs";
import { useContext } from "react";
import { PagesContext } from "./context";
import { MainLayout } from "./layouts";
import { Home, Destinations, Loading, Tecnology, Crew } from "./screens";

const App = () => {
  const { page, sectionData, isLoading } = useContext(PagesContext);

  let main = <></>;
  switch (page) {
    case "home":
      main = <Home sectionData={sectionData} />;
      break;
    case "destinations":
      main = <Destinations sectionData={sectionData} />;
      break;
    case "crew":
      main = <Crew sectionData={sectionData} />;
      break;
    case "technology":
      main = <Tecnology sectionData={sectionData} />;
      break;
  }

  return <MainLayout>{isLoading ? <Loading /> : main}</MainLayout>;
};

export default App;
