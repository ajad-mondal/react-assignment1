import React from "react";

const pageElements = [
  {
    /**
     * This can be div/section or any block level element.
     */
    htmlElementName: "div",
    innerHTML: "Hello World!",
    /**
     * The keys are what we set for HTMLElement.style[key]
     * eg: document.getElementById('myDiv').style.color = 'red'
     */
    style: {
      border: "1px solid blue",
      backgroundColor: "#edeff2",
      color: "#4d4d4d",
    },
  },
  {
    /**
     * This can be div/section or any block level element.
     */
    htmlElementName: "div",
    innerHTML: "Hello World!",
    /**
     * The keys are what we set for HTMLElement.style[key]
     * eg: document.getElementById('myDiv').style.color = 'red'
     */
    style: {
      border: "1px solid blue",
      backgroundColor: "#edeff2",
      color: "#4d4d4d",
    },
  },
];

function Elements() {
  return pageElements.map((element) => {
    const pageElement = React.createElement(
      element.htmlElementName,
      { style: element.style },
      element.innerHTML
    );
    return pageElement;
  });
}

export default Elements;
