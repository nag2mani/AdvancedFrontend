import React from "react";
import ReactDOM from "react-dom/client"

const heading1 = React.createElement("h1", { id: 0, key: "heading1" }, "I am Nagmani");
const heading2 = React.createElement("h2", { id: 1, key: "heading2" }, "I am Nagmani2");
const heading3 = React.createElement("h2", { id: 2, key: "heading3" }, "I am Nagmani3");
const container = React.createElement("div", { id: "contanerdiv" }, [heading1, heading3, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);