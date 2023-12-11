import "../Menu.css";
import BackArrow from "../components/BackArrow";
import HomeButton from "../components/HomeButton";
import MenuOption from "../components/MenuOption";

function Algos() {
  return (
    <>
      <section className="flex h-full w-full flex-col items-center justify-center gap-10">
        <div className="wrapper justify-between">
          <BackArrow />
          <h1 className="header">
            Algorithms
            <span className="line"></span>
          </h1>
          <HomeButton />
        </div>
        <ul className="flex w-11/12 flex-grow flex-row items-center justify-center gap-8">
          <MenuOption
            header="Sorting"
            icon="/icons/sort-icon.svg"
            color="blue"
            path="/algos/sorting"
          />
          <MenuOption
            header="Searching"
            icon="/icons/search-icon.svg"
            color="blue"
            path="/algos/search"
          />
          <MenuOption
            header="Traversal"
            icon="/icons/traversal-icon.svg"
            color="blue"
            path="/algos/traversal"
          />
        </ul>
      </section>
    </>
  );
}

export default Algos;
