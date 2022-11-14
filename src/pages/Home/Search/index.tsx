import React, { MutableRefObject, useRef } from "react";

import "./index.css";

import MyAxios from "../../../utils/axios";

export default function App() {
  const searchInput: MutableRefObject<any> = useRef(null);

  const Search = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      MyAxios(searchInput.current.value);
    }
  };
  return (
    <div className={"search"}>
      <input
        type="text"
        ref={searchInput}
        onKeyDown={(event) => Search(event)}
      />
    </div>
  );
}
