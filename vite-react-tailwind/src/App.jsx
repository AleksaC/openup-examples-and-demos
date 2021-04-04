import React, { useState } from "react";
import logo from "./logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center ">
      <header className="min-h-screen flex flex-col items-center justify-center text-white text-default">
        <img src={logo} className="logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="btn hover:bg-gray-200"
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-turquoise underline"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="text-turquoise underline"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
