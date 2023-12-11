import DsPage from "../dsPageTemplate";

function ArraysPage() {
  const algoOptions = ["Sorting", "Search"];
  const algoOptionsImagePaths = [
    "/icons/sort-icon.svg",
    "/icons/search-icon.svg",
  ];
  const algoOptionsPaths = algoOptions.map((option) => {
    option = option.toLowerCase();
    return `/algos/${option}`;
  });
  return (
    <DsPage
      header="Arrays"
      description="the best in the world"
      code="public static void main(String[] args){ return; }"
      algoOptions={algoOptions}
      algoOptionsImagePaths={algoOptionsImagePaths}
      algoOptionsPaths={algoOptionsPaths}
    />
  );
}

export default ArraysPage;
