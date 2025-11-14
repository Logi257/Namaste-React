/*
{ <div id="parent">
    <div id="child">
        <h1>I am the h1 child</h1>
        <h2>I am the h2 child</h2>
        
    </div>
    <div id="child2">
        <h1>I am the h1 child</h1>
        <h2>I am the h2 child</h2>
        
    </div>

    ReactElement(Object) =>HTMl(Browsers Understand)
</div> }

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },

    [
      React.createElement("h1", {}, "I am the  h1 child"),
      React.createElement("h2", {}, "I am the  h2 child"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2" },

    [
      React.createElement("h1", {}, "I am the  h1 child"),
      React.createElement("h2", {}, "I am the  h2 child"),
    ]
  ),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
