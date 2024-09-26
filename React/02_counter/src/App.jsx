import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter=15
  const addValue = () => {
    // counter=counter+1
    setCounter(counter + 1);
    // console.log("clicked",counter);
  };
  const removeValue = () => {
    // counter=counter-1
    setCounter(counter - 1);
    // console.log("clicked",counter);
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter Vlaue: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
