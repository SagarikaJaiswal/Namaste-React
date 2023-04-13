/*
<div id="parent">
  <div id="child1">
    <h1>H1 tag</h1>
    <h2>H2 tag</h2>
  </div>
  <div id="child2">
    <h1>H1 tag</h1>
    <h2>H2 tag</h2>
  </div>
</div>
*/

//const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
const parent = React.createElement(
    "div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag")]),
        React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag")])
    ]
)
console.log(parent);
//the heading here is the react element not a html tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);