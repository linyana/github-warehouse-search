import React from "react";

import "./index.css";

export default function App() {
  const Search = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      console.log(event.code);
    }
  };
  return (
    <div className={"search"}>
      <input type="text" onKeyDown={(event) => Search(event)} />
    </div>
  );
}
