import { Colors } from "./Colors";
import { Interactive } from "./Interactive";
import { Typographies } from "./Typographies";

const DesingApp = () => {
  return (
    <div className="container">
      <h1 className="uppercase">Design system</h1>
      <Colors />
      <Typographies />
      <Interactive />
    </div>
  );
};

export default DesingApp;
