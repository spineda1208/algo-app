import BackArrow from "../../components/BackArrow";
import HomeButton from "../../components/HomeButton";
import MenuOption from "../../components/MenuOption";

function DsMenu({
  header,
  options,
  optionsImagePaths,
  optionPagePaths,
}: {
  header: string;
  options: string[];
  optionsImagePaths: string[];
  optionPagePaths: string[];
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="wrapper justify-between">
        <BackArrow path="/ds" />
        <h1 className="header">
          {header}
          <span className="line-ds"></span>
        </h1>
        <HomeButton />
      </div>
      <ul className="flex w-11/12 flex-row flex-wrap justify-center gap-10">
        {options.map((option, index) => {
          return (
            <MenuOption
              header={option}
              icon={optionsImagePaths[index]}
              color="green"
              path={optionPagePaths[index]}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default DsMenu;
