import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX Code is transpiled before it reaches to JS Engine(PARCEL to BABEL)
//JSX => React.createElement => JS Object => HTMLElement(render)
//BABEL is converting JSX to React.createElement
//Wrap JSX in () if you want to write it in multiple lines

//React Element
const title1 = (
  <span >
  Inner Title
  </span>
  )
const Title2 = ()=> (
<h1 className="heading">
This is a JSX Heading {title1}
</h1>
)


//React Functional Component
const HeadingComponent = () => {
  return(
    <div>
    <Title2/>
    <Title2></Title2>
    {Title2()}
    {/*JSX prevents cross side scripting attacks(ex- malicious data coming from api) by sanitizing the code that is inside*/}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
  )
}

root.render(<HeadingComponent/>)
