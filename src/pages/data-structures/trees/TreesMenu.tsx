import DsMenu from "../dsMenuTemplate";

function TreesMenu() {
  const options = ["General", "Binary Trees", "Heaps"];
  const optionsImages = [
    "/icons/tree-icon.svg",
    "/icons/btree.svg",
    "/icons/heap.svg",
  ];
  const optionPagePaths = ["", "", ""];
  return (
    <DsMenu
      header="Trees"
      options={options}
      optionsImagePaths={optionsImages}
      optionPagePaths={optionPagePaths}
    />
  );
}

export default TreesMenu;
