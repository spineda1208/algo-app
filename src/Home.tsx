import "./Menu.css";
import MenuOption from "./components/MenuOption";

function Home() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10">
        <h1 className="header">
          Welcome to Santi's DSA
          <span className="line-home"></span>
        </h1>
        <ul className="flex w-11/12 flex-grow flex-row items-center justify-center gap-8">
          <MenuOption
            header="Data Structures"
            icon="/icons/ds-icon.svg"
            color="green"
            path="/ds"
          />
          <MenuOption
            header="Algorithms"
            icon="/icons/algo-icon.svg"
            color="blue"
            path="/algos"
          />
        </ul>
      </div>
    </>
  );
}

export default Home;
