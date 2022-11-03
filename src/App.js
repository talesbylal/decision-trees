import "./App.css";
import Tree from "react-d3-tree";
import inputData from "./data.js";
import "./custom-tree.css";

function App() {

  return (
      <Tree
        data={inputData}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        depthFactor="700"
      />
  );
}

export default App;
