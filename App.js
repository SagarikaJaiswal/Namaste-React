import React from "react";
import ReactDOM from "react-dom/client";
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
// const parent = React.createElement(
//     "div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag")]),
//         React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag")])
//     ]
// )
// console.log(parent);

//React Element
const heading = (
  <h1 className="head" tabIndex="5">
    This is a React Element using JSX
  </h1>
);
const Title = () => <h1>Component embedded inside another component</h1>;
//React Functional Component
const HeadingComponent = () => (
  <React.Fragment>
    <div id="container">
      {/* Component Composition */}
      <Title />
      <h1 className="head">Namaste React using Functional Component</h1>
    </div>
  </React.Fragment>
);
// -----------------------------------------------------------------------
//the heading here is the react element not a html tag
//const jsxHeading = <h1 className="heading"> Namaste React in JSX </h1>;
// -----------------------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Rendering Functional Component
root.render(<HeadingComponent />);
