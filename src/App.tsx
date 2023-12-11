import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Algos from "./pages/Algos";
import Ds from "./pages/Ds";
import Search from "./pages/algorithms/search/Search";
import Sorting from "./pages/algorithms/sorting/Sorting";
import Traversal from "./pages/algorithms/traversal/Traversal";
import ArrListMenu from "./pages/data-structures/arrays-lists/ArraysListsMenu";
import ArrayListsPage from "./pages/data-structures/arrays-lists/arraylists";
import ArraysPage from "./pages/data-structures/arrays-lists/arrays";
import LinkedListsPage from "./pages/data-structures/arrays-lists/linkedlists";
import QueuesPage from "./pages/data-structures/arrays-lists/queues";
import StacksPage from "./pages/data-structures/arrays-lists/stacks";
import GraphsMenu from "./pages/data-structures/graphs/GraphsMenu";
import TreesMenu from "./pages/data-structures/trees/TreesMenu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ds" element={<Ds />} />
        <Route path="/ds/arrays-lists" element={<ArrListMenu />} />
        <Route path="/ds/arrays-lists/arrays" element={<ArraysPage />} />
        <Route
          path="/ds/arrays-lists/arraylists"
          element={<ArrayListsPage />}
        />
        <Route
          path="/ds/arrays-lists/linkedlists"
          element={<LinkedListsPage />}
        />
        <Route path="/ds/arrays-lists/queues" element={<QueuesPage />} />
        <Route path="/ds/arrays-lists/stacks" element={<StacksPage />} />
        <Route path="/ds/trees" element={<TreesMenu />} />
        <Route path="/ds/graphs" element={<GraphsMenu />} />
        <Route path="/algos" element={<Algos />} />
        <Route path="/algos/sorting" element={<Sorting />} />
        <Route path="/algos/search" element={<Search />} />
        <Route path="/algos/traversal" element={<Traversal />} />
      </Routes>
    </>
  );
}

export default App;
