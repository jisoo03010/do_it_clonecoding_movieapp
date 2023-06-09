import React, { useState } from "react"

function App() {

  const [num, setNum] = useState(1)

  async function plus() {
    setNum(num => num + 1)
    setNum(num => num + 1)
    setNum(num => num + 1)
  }

  async function minus() {
    setNum(num - 1)
  }

  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={plus}>PLUS</button>
      <button onClick={minus}>MINUS</button>
    </div>
  );
}

export default App;