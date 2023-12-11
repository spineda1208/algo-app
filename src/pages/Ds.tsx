import "../Menu.css";
import BackArrow from "../components/BackArrow";
import HomeButton from "../components/HomeButton";
import MenuOption from "../components/MenuOption";

function Ds() {
  return (
    <>
      <section className="flex h-full w-full flex-col items-center justify-center gap-10">
        <div className="wrapper justify-between">
          <BackArrow />
          <h1 className="header">
            Data Structures
            <span className="line-ds"></span>
          </h1>
          <HomeButton />
        </div>
        <ul className="flex w-11/12 flex-grow flex-row items-center justify-center gap-8">
          <MenuOption
            header="Arrays & Lists"
            icon="/icons/list-structure-icon.svg"
            color="green"
            path="/ds/arrays-lists"
          />
          <MenuOption
            header="Trees"
            icon="/icons/tree-icon.svg"
            color="green"
            path="/ds/trees"
          />
          <MenuOption
            header="Graphs"
            icon="/icons/graph-icon.svg"
            color="green"
            path="/ds/graphs"
          />
        </ul>
      </section>
    </>
  );
}

export default Ds;
