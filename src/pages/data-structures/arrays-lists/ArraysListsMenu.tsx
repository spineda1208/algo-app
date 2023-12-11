import DsMenu from "../dsMenuTemplate";

function ArrListMenu() {
  const options = ["Arrays", "Array Lists", "Linked Lists", "Stacks", "Queues"];
  const optionsImages = options.map((option) => {
    option = option.replaceAll(" ", "");
    option = option.toLowerCase();
    option = option.substring(0, option.length - 1);
    return `/icons/${option}.svg`;
  });
  const optionPagePaths = options.map((option) => {
    option = option.replaceAll(" ", "");
    option = option.toLowerCase();
    return `/ds/arrays-lists/${option}`;
  });
  return (
    <DsMenu
      header="Array & Lists"
      options={options}
      optionsImagePaths={optionsImages}
      optionPagePaths={optionPagePaths}
    />
  );
}

export default ArrListMenu;
