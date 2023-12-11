import { useState } from "react";
import BackArrow from "../../components/BackArrow";
import HomeButton from "../../components/HomeButton";

function AlgorithmPage({
  header = "Some Header",
  options,
  Visualizer,
  optionsInfo,
}: {
  header?: string;
  options: string[];
  Visualizer: React.ComponentType;
  optionsInfo: string[];
}) {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="wrapper justify-between">
        <BackArrow path="/algos" />
        <h1 className="header">
          {header}
          <span className="line-algo"></span>
        </h1>
        <HomeButton />
      </div>
      <ul className="flex flex-row justify-between">
        {options.map((option, index) => {
          return (
            <button onClick={() => setTab(index)}>
              <h3
                className={tab === index ? "text-dark-tertiary" : "text-white"}
                id={`${index}`}
              >
                {option}
              </h3>
            </button>
          );
        })}
      </ul>
      <div className="">
        <Visualizer />
      </div>
      <div>{optionsInfo[tab]}</div>
    </div>
  );
}

export default AlgorithmPage;
