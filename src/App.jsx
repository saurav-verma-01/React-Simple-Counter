import { useState } from "react";

const App = () => {
  // let counter = 15;
  const [counter, setCounter] = useState(0);

  const addVal = () => {
    if (counter >= 20) return;
    setCounter((prev) => prev + 1);
  };
  const removeVal = () => {
    if (counter <= 0) return;
    setCounter((prev) => prev - 1);
  };
  return (
    <>
      <h1>Chay aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={removeVal}>Remove Value {counter}</button>
      <button onClick={addVal}>Add Value {counter}</button>

      <footer>
        <p> Lorem ipsum dolor sit amet. : {counter}</p>
      </footer>
    </>
  );
};

export default App;
