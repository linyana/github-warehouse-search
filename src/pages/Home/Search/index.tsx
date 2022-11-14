import React, { MutableRefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

export default function App() {
  const navigate = useNavigate();

  const searchInput: MutableRefObject<any> = useRef(null);

  const Search = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      navigate("/list", {
        replace: false,
        state: {
          searchState: searchInput.current.value,
        },
      });
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
