import DsMenu from "../dsMenuTemplate";

function GraphsMenu() {
  const options = ["Oriented Graphs", "Weighted Graphs"];
  const optionsImages = ["/icons/graph-icon.svg", "/icons/weightedgraph.svg"];
  const optionPagePaths = ["", ""];
  return (
    <DsMenu
      header="Array/List Structures"
      options={options}
      optionsImagePaths={optionsImages}
      optionPagePaths={optionPagePaths}
    />
  );
}

export default GraphsMenu;
